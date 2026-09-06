import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Cybersecurity SOC Premium — Zion Tech Group",
  description: "24/7 AI-powered Security Operations Center with human expert oversight. Threat detection, incident response, and compliance monitoring for enterprise security.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-cybersecurity-soc-premium`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/services/ai-cybersecurity-soc-premium" title="AI Cybersecurity SOC Premium" />
        <h1 className="text-4xl font-bold mb-6">AI Cybersecurity SOC Premium</h1>
        <p className="text-lg text-gray-300 mb-8">24/7 AI-powered Security Operations Center with human expert oversight. Threat detection, incident response, and compliance monitoring for enterprise security.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {" "}
            <li>24/7 AI threat detection & anomaly monitoring</li>
            <li>AI-powered SIEM with real-time log analysis (1M+ events/sec)</li>
            <li>Automated incident triage & initial response</li>
            <li>Human security analyst escalation (US-based, certified)</li>
            <li>Threat intelligence feed integration (100+ sources)</li>
            <li>Vulnerability scanning & prioritization (weekly)</li>
            <li>Penetration testing coordination (monthly)</li>
            <li>Compliance monitoring (SOC 2, ISO 27001, GDPR, HIPAA)</li>
            <li>Security dashboard with executive reporting</li>
            <li>Incident response playbooks customized to your environment</li>
            <li>Tabletop exercise facilitation (quarterly)</li>
            <li>Security awareness training platform included</li>
          {" "}
        </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            {" "}
            <li>Mean time to detect (MTTD) under 60 seconds</li>
            <li>Mean time to respond (MTTR) under 15 minutes for AI-handled incidents</li>
            <li>Reduced security team overhead (AI handles 80% of alerts)</li>
            <li>Continuous compliance posture tracking</li>
            <li>Executive-readable security reports (board-ready)</li>
            <li>Proactive threat hunting with AI pattern recognition</li>
            <li>Rapid incident containment with automated playbooks</li>
          {" "}
        </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Essential SOC</h3>
              <p className="text-2xl font-bold mb-2">$5,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">AI monitoring, 8x5 analyst support, 5 endpoints</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Professional SOC</h3>
              <p className="text-2xl font-bold mb-2">$14,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">24/7 AI + 24/7 analyst, 50 endpoints, compliance monitoring</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise SOC</h3>
              <p className="text-2xl font-bold mb-2">$39,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">Full SOC suite, unlimited endpoints, dedicated team, Tabletop exercises</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>

        <div className="text-center">
          <a
            href="https://buy.stripe.com/test_3dsFE0m9sKK09viOZMMO8MQ8Wx8w3A895"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg shadow-purple-500/25 mb-3"
          >
            Start 14-Day Trial — $5,999/mo
          </a>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors border border-slate-700"
          >
            Security Assessment Call
          </a>
        </div>
      </div>
    </main>
  );
}
