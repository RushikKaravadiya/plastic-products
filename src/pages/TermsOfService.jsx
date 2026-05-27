import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale, ShieldCheck, FileText, HelpCircle } from "lucide-react";

const TermsOfService = () => {
  const lastUpdated = "May 2026";

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Section */}
      <div className="bg-light-gray py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent-orange hover:text-accent-orange/80 font-semibold transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-dark-blue text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="bg-white/10 p-3 rounded-full text-accent-orange">
              <Scale size={36} />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-2"
          >
            Terms of Service
          </motion.h1>
          <p className="text-gray-300 text-sm">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-gray-600 space-y-12">
          
          {/* Introduction */}
          <section>
            <p className="text-lg leading-relaxed mb-4 text-dark-blue font-medium">
              Welcome to Maruti Plastic Products. These terms outline the rules and regulations for the commercial sale and supply of our manufacturing solutions.
            </p>
            <p className="leading-relaxed">
              By accessing this platform, placing bulk production inquiries, or requesting sample runs, you accept these terms of service in full. Do not continue to use Maruti Plastic Products' services if you do not agree to all of the terms stated on this page.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* 1. Commercial & Supply Orders */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-dark-blue">
              <FileText className="text-accent-orange shrink-0" size={24} />
              <h2 className="text-2xl font-bold">1. Commercial & Supply Orders</h2>
            </div>
            <p className="leading-relaxed">
              All quotes provided by our Morbi sales division are based on current raw material plastic polymer metrics:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-dark-blue">Production Timelines:</strong> Manufacturing lead times begin only after technical drawings are explicitly locked and sample metrics are verified by your engineering team.
              </li>
              <li>
                <strong className="text-dark-blue">Custom Profiling:</strong> Custom hardness formulas (Hard, Soft, or Semi-Hard), distinct size requirements (such as 4mm up to 12mm), or specific pigment requests are mixed per order batch tolerances. Minor structural variations across processing cycles fall within accepted industrial standards.
              </li>
            </ul>
          </section>

          {/* 2. Logistics & Delivery */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-dark-blue">
              <ShieldCheck className="text-accent-orange shrink-0" size={24} />
              <h2 className="text-2xl font-bold">2. Logistics & Freight Dispatches</h2>
            </div>
            <p className="leading-relaxed">
              Unless explicitly specified otherwise under formal corporate agreements, all wholesale shipments originate from our distribution centers in Morbi, India:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Risk of logistical transport loss shifts to the purchaser once partner freight carriers accept delivery bundles at our facility gates.</li>
              <li>Maruti Plastic Products is not liable for transport schedule delays arising from customs bottlenecks, regional trade restrictions, or partner delivery disruptions.</li>
            </ul>
          </section>

          {/* 3. Liability Limits */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-dark-blue">
              <Scale className="text-accent-orange shrink-0" size={24} />
              <h2 className="text-2xl font-bold">3. Structural Liability Limits</h2>
            </div>
            <p className="leading-relaxed">
              Maruti Plastic Products provides top-tier industrial sealing profiles, gaskets, and edge strips. However, purchasers must execute their own internal diagnostic evaluations to verify material compatibility with finished hardware or profile frameworks (such as specific aluminum windows, glass partitions, or cabinet assemblies) before full manufacturing deployment.
            </p>
          </section>

          {/* 4. Contact Information */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-dark-blue">
              <HelpCircle className="text-accent-orange shrink-0" size={24} />
              <h2 className="text-2xl font-bold">4. Compliance & Inquiries</h2>
            </div>
            <p className="leading-relaxed">
              For administrative clarifications regarding bulk sales contracts, delivery terms, or sample authorizations, reach out directly to our help desk:
            </p>
            <div className="bg-light-gray p-6 rounded-xl border-l-4 border-accent-orange text-dark-blue space-y-2">
              <p><strong>Corporate Base:</strong> Rajpar Road, Morbi, India</p>
              <p><strong>Primary Contact:</strong> +91-97145 86233</p>
              <p><strong>Administration Mailbox:</strong> <a href="mailto:admin.marutiplastic@gmail.com" className="text-accent-orange hover:underline font-medium">admin.marutiplastic@gmail.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;