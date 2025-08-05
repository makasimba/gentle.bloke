import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="store-container py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            By using our website and services, you agree to the following terms. Please read these terms carefully.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Last Updated */}
              <div className="bg-blue-50 rounded-lg p-4 mb-8">
                <p className="text-blue-800 text-sm">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              {/* Key Terms */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-700">
                    By accessing and using the ToolMinda website and services, you accept and agree to be bound by these terms. If you do not agree, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                  <p className="text-gray-700 mb-4">
                    All content on this website is the property of ToolMinda and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders and Payment</h2>
                  <p className="text-gray-700 mb-4">
                    All orders are subject to availability and verification. We reserve the right to refuse service to anyone for any reason. Prices are subject to change without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping and Delivery</h2>
                  <p className="text-gray-700 mb-4">
                    ToolMinda is not liable for delays outside our control, such as courier delays, customs issues, or natural disasters. Delivery times are estimates and may vary.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Warranties</h2>
                  <p className="text-gray-700 mb-4">
                    Products come with manufacturer warranties. We strive to provide accurate product information, but we do not warrant that descriptions are complete, reliable, or error-free.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                  <p className="text-gray-700 mb-4">
                    ToolMinda shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data</h2>
                  <p className="text-gray-700 mb-4">
                    Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                  <p className="text-gray-700 mb-4">
                    We may terminate or suspend your account and access to our services at any time, with or without cause, with or without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                  <p className="text-gray-700 mb-4">
                    These terms are governed by the laws of Zimbabwe. Any disputes shall be resolved through negotiation, mediation, or in the courts of Zimbabwe.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use constitutes acceptance of modified terms.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Legal Department</h3>
                        <a href="mailto:legal@toolminda.com" className="text-green-600 hover:text-green-700">
                          legal@toolminda.com
                        </a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">General Support</h3>
                        <a href="mailto:support@toolminda.com" className="text-blue-600 hover:text-blue-700">
                          support@toolminda.com
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 