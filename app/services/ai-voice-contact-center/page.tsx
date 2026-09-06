import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Voice & Contact Center — Zion Tech Group",
  description: "Enterprise-grade AI voice and contact center platform. Conversational AI, voice agents, call routing, sentiment analysis, and omnichannel support with human-in-the-loop escalation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-voice-contact-center`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/services/ai-voice-contact-center" title="AI Voice & Contact Center" />
        <h1 className="text-4xl font-bold mb-6">AI Voice & Contact Center</h1>
        <p className="text-lg text-gray-300 mb-8">Conversational AI, voice agents, intelligent call routing, real-time sentiment analysis, and omnichannel support — with seamless human escalation for enterprise contact centers.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Conversational AI voice agents with natural language understanding (GPT-4o, Claude, Gemini)</li>
            <li>Real-time speech-to-text and text-to-speech (low latency &lt; 300ms)</li>
            <li>Intelligent call routing based on intent, sentiment, and customer history</li>
            <li>Real-time sentiment analysis with escalation triggers</li>
            <li>Omnichannel support: voice, SMS, WhatsApp, web chat, social messaging</li>
            <li>RAG-powered knowledge base with real-time retrieval from your docs and CRM</li>
            <li>Human-in-the-loop escalation with warm handoff and full context transfer</li>
            <li>Voice biometrics for authentication and fraud detection</li>
            <li>Omnichannel conversation logging and full call transcripts</li>
            <li>AI coaching and agent assist for human agents in real time</li>
            <li>Compliance recording, redaction, and retention policies (HIPAA, PCI, GDPR)</li>
            <li>Executive dashboards: CSAT, FCR, AHT, escalation rate, AI containment rate</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>30-60% call containment rate with AI voice agents (industry benchmark: 15-25%)</li>
            <li>25-40% reduction in average handle time (AHT) with AI agent assist</li>
            <li>CSAT improvement of 10-20 points through personalized, faster resolutions</li>
            <li>24/7 coverage without hiring night/weekend staff</li>
            <li>Consistent brand voice and compliance across every interaction</li>
            <li>Real-time escalation prevents customer frustration and churn</li>
            <li>Full audit trail for regulated industries (finance, healthcare, insurance)</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Starter</h3>
              <p className="text-2xl font-bold mb-2">$4,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">AI voice agent, 1 channel, 500 inbound calls/mo, email support</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Professional</h3>
              <p className="text-2xl font-bold mb-2">$12,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">Multi-channel, 5 voice agents, 5,000 calls/mo, WhatsApp + web chat, SLA 4h</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$34,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">Unlimited agents, unlimited calls, full omnichannel, dedicated team, HIPAA/PCI compliance, 1h SLA</p>
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
            Start 14-Day Trial — $4,999/mo
          </a>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors border border-slate-700"
          >
            Voice Strategy Call
          </a>
        </div>
      </div>
    </main>
  );
}
