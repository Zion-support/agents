import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Data Platform & Advanced Analytics — Zion Tech Group",
  description: "Enterprise AI data platform: real-time data pipelines, lakehouse architecture, advanced analytics, ML feature stores, and governed self-service BI for data-driven decisions at scale.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-data-platform-analytics`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/services/ai-data-platform-analytics" title="AI Data Platform & Advanced Analytics" />
        <h1 className="text-4xl font-bold mb-6">AI Data Platform & Advanced Analytics</h1>
        <p className="text-lg text-gray-300 mb-8">End-to-end data platform: real-time pipelines, lakehouse architecture, governed self-service BI, ML feature stores, and AI-powered analytics — turning raw data into board-ready decisions.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Lakehouse architecture (Delta Lake / Iceberg) on AWS, GCP, or Azure</li>
            <li>Real-time streaming pipelines (Kafka, Kinesis, Pub/Sub) with exactly-once semantics</li>
            <li>ELT/ETL orchestration with Airflow, Dagster, or Prefect</li>
            <li>ML feature store (Feast, Tecton) for consistent training and serving features</li>
            <li>Governed self-service BI with dbt, Looker, Tableau, or Power BI integration</li>
            <li>AI-powered anomaly detection and natural-language querying (Text-to-SQL)</li>
            <li>Data quality monitoring with automated alerts and lineage tracking</li>
            <li>Cost governance: query optimization, partition strategies, storage tiering</li>
            <li>Role-based access control, column-level security, and audit logging</li>
            <li>Data catalog with business glossary and automated documentation</li>
            <li>Reverse ETL to sync insights back to CRM, marketing, and ops tools</li>
            <li>ML model registry and deployment pipeline (MLflow, SageMaker, Vertex AI)</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Single source of truth across all business units — no more spreadsheet silos</li>
            <li>50-80% faster time-to-insight with governed self-service BI</li>
            <li>AI-driven anomaly detection catches revenue leaks and operational issues in real time</li>
            <li>Natural-language querying empowers non-technical stakeholders to get answers</li>
            <li>30-60% data infrastructure cost reduction through right-sizing and automation</li>
            <li>Compliance-ready: SOC 2, GDPR, CCPA, HIPAA data governance built in</li>
            <li>Real-time streaming enables use cases that batch pipelines can't support</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Data Foundation</h3>
              <p className="text-2xl font-bold mb-2">$9,999<span className="text-lg text-gray-400">one-time</span></p>
              <p className="text-xs text-gray-400 mt-2">Architecture, pipeline setup, BI dashboards, 30-day support</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Platform + Analytics</h3>
              <p className="text-2xl font-bold mb-2">$34,999<span className="text-lg text-gray-400">one-time</span></p>
              <p className="text-xs text-gray-400 mt-2">Full lakehouse, streaming, feature store, dbt, 90-day support, team training</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Managed Data Platform</h3>
              <p className="text-2xl font-bold mb-2">$12,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">24/7 ops, cost governance, pipeline monitoring, monthly reviews, on-call SRE</p>
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
            Book Data Assessment — $9,999
          </a>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors border border-slate-700"
          >
            Data Platform Strategy Call
          </a>
        </div>
      </div>
    </main>
  );
}
