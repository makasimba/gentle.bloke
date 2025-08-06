import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="store-container py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-tight leading-tight">
              Terms of
            </h1>
            <h1 className="text-5xl md:text-7xl font-light text-slate-600 tracking-tight leading-tight">
              Service
            </h1>
          </div>
          <div className="w-24 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            By using our website and services, you agree to the following terms. Please read these terms carefully.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {/* Last Updated */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
              <p className="text-slate-700 text-sm font-light">
                <strong className="font-medium">Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* Key Terms */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Acceptance of Terms</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  By accessing and using the ToolMinda website and services, you accept and agree to be bound by these terms. If you do not agree, please do not use this service.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Intellectual Property</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  All content on this website is the property of ToolMinda and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without permission.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Orders and Payment</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  All orders are subject to availability and verification. We reserve the right to refuse service to anyone for any reason. Prices are subject to change without notice.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Shipping and Delivery</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  ToolMinda is not liable for delays outside our control, such as courier delays, customs issues, or natural disasters. Delivery times are estimates and may vary.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Product Warranties</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  Products come with manufacturer warranties. We strive to provide accurate product information, but we do not warrant that descriptions are complete, reliable, or error-free.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Limitation of Liability</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  ToolMinda shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Privacy and Data</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Termination</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  We may terminate or suspend your account and access to our services at any time, with or without cause, with or without notice.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Governing Law</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  These terms are governed by the laws of Zimbabwe. Any disputes shall be resolved through negotiation, mediation, or in the courts of Zimbabwe.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Changes to Terms</h2>
                <p className="text-slate-700 leading-relaxed font-light">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use constitutes acceptance of modified terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
                <h2 className="text-3xl font-light text-slate-800 mb-6">Contact Information</h2>
                <p className="text-slate-700 leading-relaxed font-light mb-8">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                
                <div className="bg-gradient-to-r from-emerald-50/70 to-blue-50/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-slate-800 mb-2">Legal Department</h3>
                      <a href="mailto:legal@toolminda.com" className="text-emerald-600 hover:text-emerald-700 font-light">
                        legal@toolminda.com
                      </a>
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-800 mb-2">General Support</h3>
                      <a href="mailto:support@toolminda.com" className="text-blue-600 hover:text-blue-700 font-light">
                        support@toolminda.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 