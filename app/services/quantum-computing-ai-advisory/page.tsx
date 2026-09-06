import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Quantum Computing & AI Advisory — Zion Tech Group",
  description: "Strategic advisory for organizations preparing for the quantum computing era. Quantum-ready cryptography, quantum ML roadmap, and talent acquisition strategy.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/quantum-computing-ai-advisory`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/services/quantum-computing-ai-advisory" title="Quantum Computing & AI Advisory" />
        <h1 className="text-4xl font-bold mb-6">Quantum Computing & AI Advisory</h1>
        <p className="text-lg text-gray-300 mb-8">Strategic advisory for organizations preparing for the quantum computing era. Quantum-ready cryptography, quantum ML roadmap, and talent acquisition strategy.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {" "}
            <li>Post-quantum cryptography (PQC) readiness assessment</li>
            <li>NIST PQC migration plan (CRYSTALS-Kyber, CRYSTALS-Dilithium, Falcon, SPHINCS+)</li>
            <li>Quantum computing vendor evaluation (IBM, Google, IonQ, Rigetti, D-Wave)</li>
            <li>Quantum ML feasibility study for your use cases</li>
            <li>Quantum-inspired optimization for existing workflows</li>
            <li>Quantum roadmap development (3, 5, 10-year horizon)</li>
            <li>Quantum talent strategy (hiring, training, partnerships)</li>
            <li>Patent & IP strategy for quantum innovations</li>
            <li>Quantum computing access program (QAP) navigation</li>
            <li>Quantum-safe blockchain assessment</li>
            <li>Executive quantum literacy program</li>
            <li>Investment & M&A advisory for quantum startups</li>
          {" "}
        </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            {" "}
            <li>pqc migration before regulatory deadlines (NSA/CNSS 2025-2033 timeline)</li>
            <li>First-mover advantage in quantum-ready positioning</li>
            <li>Risk mitigation for "harvest now, decrypt later" attacks</li>
            <li>Access to quantum computing resources without building in-house</li>
            <li>Strategic talent pipeline for the quantum era</li>
            <li>Clearer investment decisions on quantum technologies</li>
            <li>Board-level quantum strategy presentation ready</li>
          {" "}
        </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">PQC Readiness Audit</h3>
              <p className="text-2xl font-bold mb-2">$24,999<span className="text-lg text-gray-400">one-time</span></p>
              <p className="text-xs text-gray-400 mt-2">Crypto inventory, PQC gap analysis, migration plan, priority matrix</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Quantum Strategy</h3>
              <p className="text-2xl font-bold mb-2">$74,999<span className="text-lg text-gray-400">one-time</span></p>
              <p className="text-xs text-gray-400 mt-2">Full quantum assessment, ML feasibility, vendor eval, 3-year roadmap, talent strategy</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Quantum Advisory Retainer</h3>
              <p className="text-2xl font-bold mb-2">$19,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">Ongoing advisory, quarterly roadmap updates, vendor management, talent pipeline</p>
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
            Pay $24,999 — PQC Readiness Audit
          </a>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors border border-slate-700"
          >
            Quantum Strategy Session
          </a>
        </div>
      </div>
    </main>
  );
}
