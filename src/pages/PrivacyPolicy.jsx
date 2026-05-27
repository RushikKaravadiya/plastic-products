import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Eye, Landmark, HelpCircle } from "lucide-react";

const PrivacyPolicy = () => {
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
              <ShieldCheck size={36} />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-2"
          >
            Privacy Policy
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
              At Maruti Plastic Products, accessible from our digital communication platforms, one of our main priorities is the privacy of our visitors.
            </p>
            <p className="leading-relaxed">
              This Privacy Policy document outlines the types of information collected and recorded by Maruti Plastic Products and how we handle it. If you have additional questions or require more details about our data handling, do not hesitate to contact our compliance team.
            </p>
          </section>

          <hr className="border-gray-200" />

          {/* 1. Information We Collect */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-dark-blue">
              <Eye className="text-accent-orange shrink-0" size={24} />
              <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            </div>
            <p className="leading-relaxed">
              We collect information to provide better services to our manufacturing clients and wholesale buyers. The personal details you are asked to provide, and the reasons why you are asked to provide them, will be clear at the point we collect them:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-dark-blue">Communication Inquiries:</strong> When you initiate a connection using our WhatsApp CTA buttons or standard web inquiry options, we capture your name, active business phone connection, and text specifications.
              </li>
              <li>
                <strong className="text-dark-blue">Business Account Details:</strong> If you place sample queries or volume dispatch orders, we request formal operational information including distribution locations, corporate email addresses, and logistical tracking data.
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-dark-blue">
              <ShieldCheck className="text-accent-orange shrink-0" size={24} />
              <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
            </div>
            <p className="leading-relaxed">
              We manage your operational information carefully to optimize production metrics. Your data helps us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and evaluate our structural plastic supply networks.</li>
              <li>Improve customer response parameters and process technical profile custom requests.</li>
              <li>
                Develop customized technical profiles based on selected industrial raw materials 
                (including high-performance PVC compounds, flexible TPE, and weather-resistant TPV/EPDM polymers).
              </li>
              <li>Route purchase queries initiated via WhatsApp directly to our Morbi distribution office.</li>
            </ul>
          </section>

          {/* 3. Data Protection and Third Parties */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-dark-blue">
              <Landmark className="text-accent-orange shrink-0" size={24} />
              <h2 className="text-2xl font-bold">3. Shared Networks and Logistics</h2>
            </div>
            <p className="leading-relaxed">
              Maruti Plastic Products does not sell, lease, or distribute private contact metrics to unauthorized third-party marketing brokers. Data transfers occur strictly when required to arrange commercial shipping dispatches with partner freight brokers or to finalize text transmissions through instant messaging APIs (such as WhatsApp Business systems).
            </p>
          </section>

          {/* 4. Support and Help Queries */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-dark-blue">
              <HelpCircle className="text-accent-orange shrink-0" size={24} />
              <h2 className="text-2xl font-bold">4. Questions & Support Channel</h2>
            </div>
            <p className="leading-relaxed">
              If you wish to review, update, or completely purge your business communication history from our internal administrative logs, please submit an official inquiry to our privacy compliance desk:
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

export default PrivacyPolicy;