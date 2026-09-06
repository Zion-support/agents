import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Infrastructure at Scale — Zion Tech Group",
  description: "Design, deploy, and manage AI infrastructure for training and serving at enterprise scale. GPU clusters, vector databases, MLOps pipelines, and cost optimization.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-infrastructure-at-scale`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path="/services/ai-infrastructure-at-scale" title="AI Infrastructure at Scale" />
        <h1 className="text-4xl font-bold mb-6">AI Infrastructure at Scale</h1>
        <p className="text-lg text-gray-300 mb-8">Design, deploy, and manage AI infrastructure for training and serving at enterprise scale. GPU clusters, vector databases, MLOps pipelines, and cost optimization.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {" "}
            <li>GPU cluster design & provisioning (NVIDIA H100/A100, AMD MI300X)</li>
            <li>Distributed training infrastructure (PyTorch DDP, FSDP, DeepSpeed)</li>
            <li>Vector database deployment (Pinecone, Weaviate, Milvus, Qdrant)</li>
            <li>Feature store implementation (Feast, Tecton)</li>
            <li>MLOps pipeline orchestration (Kubeflow, MLflow, Airflow)</li>
            <li>Serving infrastructure (Triton, vLLM, TensorRT-LLM)</li>
            <li>Auto-scaling & load balancing for inference workloads</li>
            <li>Cost optimization (spot instances, reserved GPU, right-sizing)</li>
            <li>Monitoring & observability (Prometheus, Grafana, Arize, WhyLabs)</li>
            <li>Multi-cloud AI infrastructure (AWS, GCP, Azure, on-prem)</li>
            <li>Edge AI deployment for IoT & on-device inference</li>
            <li>Security & access control for AI infrastructure</li>
          {" "}
        </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            {" "}
            <li>30-50% GPU cost reduction through right-sizing & spot strategy</li>
            <li>99.9% serving SLA with auto-scaling infrastructure</li>
            <li>Faster iteration cycles (hours → minutes for training pipelines)</li>
            <li>Unified infrastructure across teams & projects</li>
            <li>Avoid vendor lock-in with multi-cloud architecture</li>
            <li>Proactive cost alerts & budget governance</li>
            <li>Reduced time-to-production for ML models (weeks → days)</li>
          {" "}
        </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Infrastructure Audit</h3>
              <p className="text-2xl font-bold mb-2">$7,999<span className="text-lg text-gray-400">one-time</span></p>
              <p className="text-xs text-gray-400 mt-2">Assessment, architecture review, cost analysis, roadmap</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Build & Deploy</h3>
              <p className="text-2xl font-bold mb-2">$59,999<span className="text-lg text-gray-400">one-time</span></p>
              <p className="text-xs text-gray-400 mt-2">Full infrastructure build, MLOps pipeline, 90-day support</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Managed AI Infra</h3>
              <p className="text-2xl font-bold mb-2">$14,999<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-xs text-gray-400 mt-2">24/7 ops, cost optimization, scaling, monitoring, monthly reviews</p>
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
            Pay $7,999 — Infrastructure Audit
          </a>
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors border border-slate-700"
          >
            Infrastructure Architecture Call
          </a>
        </div>
      </div>
    </main>
  );
}
