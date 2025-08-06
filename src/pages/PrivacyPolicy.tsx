import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="store-container py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-tight leading-tight">
              Privacy
            </h1>
            <h1 className="text-5xl md:text-7xl font-light text-slate-600 tracking-tight leading-tight">
              Policy
            </h1>
          </div>
          <div className="w-24 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            ToolMinda respects your privacy and is committed to protecting your personal data. This policy outlines how we collect, use, and protect your information.
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

            {/* Information We Collect */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-light text-slate-800 mb-6">Information We Collect</h2>
              <p className="text-slate-700 leading-relaxed font-light mb-8">
                We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-slate-800">Personal Information</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 font-light">
                    <li>• Name and contact details</li>
                    <li>• Email address and phone number</li>
                    <li>• Shipping and billing addresses</li>
                    <li>• Payment information (processed securely)</li>
                  </ul>
                </div>
                
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-slate-800">Usage Information</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 font-light">
                    <li>• Website usage and browsing patterns</li>
                    <li>• Device and browser information</li>
                    <li>• IP address and location data</li>
                    <li>• Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-light text-slate-800 mb-6">How We Use Your Information</h2>
              <p className="text-slate-700 leading-relaxed font-light mb-8">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-sm font-medium">1</div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Order Fulfillment</h4>
                    <p className="text-slate-600 leading-relaxed font-light text-sm">To process and deliver your orders, send order confirmations, and provide customer support.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-sm font-medium">2</div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Customer Service</h4>
                    <p className="text-slate-600 leading-relaxed font-light text-sm">To respond to your inquiries, provide technical support, and improve our customer experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-sm font-medium">3</div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Website Improvement</h4>
                    <p className="text-slate-600 leading-relaxed font-light text-sm">To analyze usage patterns, optimize our website, and enhance user experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-sm font-medium">4</div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Marketing (with consent)</h4>
                    <p className="text-slate-600 leading-relaxed font-light text-sm">To send promotional emails and updates about new products and services.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-light text-slate-800 mb-6">Information Sharing</h2>
              <p className="text-slate-700 leading-relaxed font-light mb-8">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              
              <div className="bg-yellow-50/70 backdrop-blur-sm rounded-2xl shadow-sm border border-yellow-200/50 p-6">
                <h3 className="font-medium text-yellow-800 mb-4">Limited Sharing</h3>
                <ul className="space-y-2 text-sm text-yellow-700 font-light">
                  <li>• <strong>Service Providers:</strong> With trusted partners who help us operate our business (payment processors, shipping companies)</li>
                  <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li>• <strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-light text-slate-800 mb-6">Data Security</h2>
              <p className="text-slate-700 leading-relaxed font-light mb-8">
                We implement appropriate security measures to protect your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-slate-800">Security Measures</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 font-light">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure payment processing</li>
                    <li>• Regular security audits</li>
                    <li>• Limited access to personal data</li>
                  </ul>
                </div>
                
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-slate-800">Your Responsibilities</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-600 font-light">
                    <li>• Keep your account credentials secure</li>
                    <li>• Log out when using shared devices</li>
                    <li>• Report suspicious activity</li>
                    <li>• Update your contact information</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-light text-slate-800 mb-6">Your Rights</h2>
              <p className="text-slate-700 leading-relaxed font-light mb-8">
                You have the right to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-slate-700 font-light">Access your personal data</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-slate-700 font-light">Correct inaccurate information</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-slate-700 font-light">Request deletion of your data</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-slate-700 font-light">Opt out of marketing communications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-slate-700 font-light">Port your data to another service</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-slate-700 font-light">Lodge a complaint with authorities</span>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-light text-slate-800 mb-6">Cookies and Tracking</h2>
              <p className="text-slate-700 leading-relaxed font-light mb-8">
                We use cookies and similar technologies to enhance your browsing experience:
              </p>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Essential Cookies</h4>
                    <p className="text-slate-600 font-light">Required for website functionality and security.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Analytics Cookies</h4>
                    <p className="text-slate-600 font-light">Help us understand how visitors use our website.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">Marketing Cookies</h4>
                    <p className="text-slate-600 font-light">Used for personalized advertising (with consent).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-light text-slate-800 mb-6">Contact Us</h2>
              <p className="text-slate-700 leading-relaxed font-light mb-8">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-gradient-to-r from-emerald-50/70 to-blue-50/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Privacy Officer</h3>
                    <a href="mailto:privacy@toolminda.com" className="text-emerald-600 hover:text-emerald-700 font-light">
                      privacy@toolminda.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">General Inquiries</h3>
                    <a href="mailto:support@toolminda.com" className="text-blue-600 hover:text-blue-700 font-light">
                      support@toolminda.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-light text-slate-800 mb-6">Policy Updates</h2>
              <p className="text-slate-700 leading-relaxed font-light">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 