import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Enterprise AI Transformation Suite — Zion Tech Group",
  description: "Comprehensive AI transformation program for Fortune 500 companies. End-to-end strategy, implementation, and managed operations.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/enterprise-ai-transformation-suite`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/services/enterprise-ai-transformation-suite" title="Enterprise AI Transformation Suite" />
        <h1 className="text-4xl font-bold mb-6">Enterprise AI Transformation Suite</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensive AI transformation program for Fortune 500 companies. End-to-end strategy, implementation, and managed operations.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {" "}
            <li>AI maturity assessment across 12 dimensions</li>
            <li>Executive AI strategy workshop (2-day on-site)</li>
            <li>Use case prioritization with ROI modeling</li>
            <li>Vendor/platform selection matrix (20+ vendors evaluated)</li>
            <li>Pilot program design with success metrics</li>
            <li>Full-scale implementation with dedicated team</li>
            <li>Change management & employee training</li>
            <li>90-day post-launch optimization sprint</li>
            <li>Quarterly AI governance reviews</li>
            <li>Custom AI policy & ethics framework</li>
          {" "}
        </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            {" "}
            <li>Accelerated time-to-AI value (6-12 months vs 18-24)</li>
            <li>Dedicated AI transformation team (PM, architect, data scientist, ML engineer)</li>
            <li>Executive buy-in framework with board-ready presentations</li>
            <li>Reduced organizational resistance through structured change management</li>
            <li>Measurable ROI tracked from day one</li>
            <li>Future-proof architecture that scales with AI advancements</li>
          {" "}
        </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Assessment & Strategy</h3>
              <p className="text-2xl font-bold mb-2">$49,999 <span className="text-lg text-gray-400">one-time</span></p>
              <p className="text-sm text-gray-400">AI maturity assessment, strategy workshop, use case prioritization, vendor matrix, roadmap</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Full Implementation</h3>
              <p className="text-2xl font-bold mb-2">$199,999 <span className="text-lg text-gray-400">one-time</span></p>
              <p className="text-sm text-gray-400">Includes Strategy + dedicated implementation team for 3 flagship use cases, 90-day optimization</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise Managed AI</h3>
              <p className="text-2xl font-bold mb-2">$49,999 <span className="text-lg text-gray-400">/ month</span></p>
              <p className="text-sm text-gray-400">Ongoing AI governance, model monitoring, quarterly reviews, unlimited use case intake, 24/7 support</p>
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
            Pay $49,999 — Start Assessment
          </a>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors border border-slate-700"
          >
            Schedule Executive Briefing
          </a>
        </div>
      </div>
    </main>
  );
}
