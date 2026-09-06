import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Content & Creative Studio — Zion Tech Group",
  description: "Enterprise AI content and creative studio: automated content generation, brand voice consistency, multi-channel campaign production, SEO-optimized copy, and creative asset generation at scale for marketing teams.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-content-creative-studio`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/services/ai-content-creative-studio" title="AI Content & Creative Studio" />
        <h1 className="text-4xl font-bold mb-6">AI Content & Creative Studio</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise content engine: brand-aligned copy generation, multi-channel campaign production, SEO-optimized articles, social content, email sequences, and creative asset generation — all governed by your brand voice and review workflow.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Brand voice model fine-tuning: GPT-4, Claude, Gemini trained on your content library</li>
            <li>Multi-channel content generation: blog posts, whitepapers, case studies, social posts, newsletters, email sequences</li>
            <li>SEO-optimized article generation with keyword research, internal linking, and schema markup</li>
            <li>Automated content calendar and campaign orchestration across channels</li>
            <li>A/B variant generation for headlines, CTAs, and email subject lines</li>
            <li>AI image and creative asset generation (DALL-E, Midjourney, Stable Diffusion) with brand guidelines</li>
            <li>Human-in-the-loop review workflow with version control and approval chains</li>
            <li>Content performance analytics: engagement, SEO rankings, conversion attribution</li>
            <li>Multi-language content generation and localization (30+ languages)</li>
            <li>Content compliance review: brand guidelines, legal checks, tone enforcement</li>
            <li>Integration with CMS (WordPress, Contentful, Sanity), CRM, and marketing automation</li>
            <li>Content operations dashboard: pipeline, status, performance, and team workload</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>5-10x content output without hiring more writers — same quality, more volume</li>
            <li>Consistent brand voice across every channel and piece of content</li>
            <li>SEO content engine: 30-50% faster ranking improvements through systematic publishing</li>
            <li>Campaign production cut from weeks to days with AI-assisted drafting and variants</li>
            <li>Reduce agency spend by 40-60% while increasing content frequency</li>
            <li>Content localization at scale: go multilingual without a localization team</li>
            <li>Data-driven content decisions: know what works and double down automatically</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Content Engine</h3>
              <p className="text-2xl font-bold mb-2">$3,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">Brand voice model, 20 pieces/mo, blog + social, CMS integration, email support</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Campaign Studio</h3>
              <p className="text-2xl font-bold mb-2">$9,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">Multi-channel campaigns, 60 pieces/mo, SEO engine, A/B variants, creative assets, SLA 8h</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise Content Ops</h3>
              <p className="text-2xl font-bold mb-2">$24,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">Unlimited content, full multi-language, dedicated team, compliance review, 1h SLA, weekly strategy</p>
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
            Start 14-Day Trial — $3,999/mo
          </a>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors border border-slate-700"
          >
            Content Strategy Call
          </a>
        </div>
      </div>
    </main>
  );
}
