// Zion Connection Monitor v2.1 — checks Composio connected accounts via REST API
// (SDK-free for stability; Node 20+ has global fetch)

const API_KEY = process.env.COMPOSIO_API_KEY;
const BASE = 'https://backend.composio.dev/api/v1';

const connections = {
  calendly: process.env.COMPOSIO_CALENDLY_CONNECTION_ID,
  whatsapp: process.env.COMPOSIO_WHATSAPP_CONNECTION_ID,
  stripe: process.env.COMPOSIO_STRIPE_CONNECTION_ID,
  resend: process.env.COMPOSIO_RESEND_CONNECTION_ID,
  brevo: process.env.COMPOSIO_BREVO_CONNECTION_ID,
  gmail: process.env.COMPOSIO_GMAIL_CONNECTION_ID,
  hubspot: process.env.COMPOSIO_HUBSPOT_CONNECTION_ID,
  notion: process.env.COMPOSIO_NOTION_CONNECTION_ID,
  slack: process.env.COMPOSIO_SLACK_CONNECTION_ID,
  onepassword: process.env.COMPOSIO_1PASSWORD_CONNECTION_ID,
  sendgrid: process.env.COMPOSIO_SENDGRID_CONNECTION_ID,
  activecampaign: process.env.COMPOSIO_ACTIVECAMPAIGN_CONNECTION_ID,
  firecrawl: process.env.COMPOSIO_FIRECRAWL_CONNECTION_ID,
  serpapi: process.env.COMPOSIO_SERPAPI_CONNECTION_ID,
  tavily: process.env.COMPOSIO_TAVILY_CONNECTION_ID,
};

async function checkConnection(id) {
  if (!id) return { status: 'NO_SECRET' };
  try {
    const res = await fetch(`${BASE}/connectedAccounts/${id}`, {
      headers: { 'x-api-key': API_KEY },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return { status: 'ERROR', error: `HTTP ${res.status}` };
    const data = await res.json();
    const s = (data.status || '').toUpperCase();
    return { status: s === 'ACTIVE' ? 'ACTIVE' : (s || 'UNKNOWN'), raw: s };
  } catch (e) {
    return { status: 'ERROR', error: e.message };
  }
}

async function run() {
  const ts = new Date().toISOString();
  console.log(`\n═══ ZION CONNECTION MONITOR v2.1 — ${ts} ═══\n`);

  const report = { timestamp: ts, connections: [], alerts: [] };
  let activeCount = 0;
  let errorCount = 0;

  for (const [name, id] of Object.entries(connections)) {
    const r = await checkConnection(id);
    if (r.status === 'ACTIVE') activeCount++;
    if (r.status === 'ERROR') errorCount++;
    report.connections.push({ name, ...r });
    const icon = r.status === 'ACTIVE' ? '✓' : r.status === 'ERROR' ? '✗' : '○';
    console.log(`  ${icon} ${name.padEnd(16)} ${r.status}${r.error ? ' — ' + r.error : ''}`);
  }

  if (errorCount > 0) {
    report.alerts.push({ severity: 'warning', message: `${errorCount} connection(s) with errors` });
  }

  const healthScore = Math.round((activeCount / Object.keys(connections).length) * 100);
  report.healthScore = healthScore;
  report.activeCount = activeCount;
  report.totalCount = Object.keys(connections).length;

  console.log(`\n  Health Score: ${healthScore}% (${activeCount}/${Object.keys(connections).length} active)`);
  console.log(`\n═══ MONITOR COMPLETE ═══`);

  const fs = await import('fs');
  fs.writeFileSync('composio-connection-report.json', JSON.stringify(report, null, 2));
  return report;
}

// Never hard-fail the workflow on monitor errors; report and exit cleanly.
run().catch(e => {
  console.error('Monitor error (non-fatal):', e);
  import('fs').then(fs => fs.writeFileSync('composio-connection-report.json',
    JSON.stringify({ timestamp: new Date().toISOString(), healthScore: 0, error: String(e) }, null, 2)));
  process.exit(0);
});
