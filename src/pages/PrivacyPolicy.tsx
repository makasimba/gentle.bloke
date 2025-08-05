import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="store-container py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            ToolMinda respects your privacy and is committed to protecting your personal data. This policy outlines how we collect, use, and protect your information.
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

              {/* Information We Collect */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-green-800 mb-3">Personal Information</h3>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Name and contact details</li>
                      <li>• Email address and phone number</li>
                      <li>• Shipping and billing addresses</li>
                      <li>• Payment information (processed securely)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-800 mb-3">Usage Information</h3>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• Website usage and browsing patterns</li>
                      <li>• Device and browser information</li>
                      <li>• IP address and location data</li>
                      <li>• Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Order Fulfillment</h4>
                      <p className="text-gray-600 text-sm">To process and deliver your orders, send order confirmations, and provide customer support.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Customer Service</h4>
                      <p className="text-gray-600 text-sm">To respond to your inquiries, provide technical support, and improve our customer experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Website Improvement</h4>
                      <p className="text-gray-600 text-sm">To analyze usage patterns, optimize our website, and enhance user experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Marketing (with consent)</h4>
                      <p className="text-gray-600 text-sm">To send promotional emails and updates about new products and services.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information Sharing */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                
                <div className="bg-yellow-50 rounded-lg p-6">
                  <h3 className="font-semibold text-yellow-800 mb-3">Limited Sharing</h3>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li>• <strong>Service Providers:</strong> With trusted partners who help us operate our business (payment processors, shipping companies)</li>
                    <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li>• <strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="font-semibold text-green-800 mb-3">Security Measures</h3>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• SSL encryption for data transmission</li>
                      <li>• Secure payment processing</li>
                      <li>• Regular security audits</li>
                      <li>• Limited access to personal data</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-800 mb-3">Your Responsibilities</h3>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• Keep your account credentials secure</li>
                      <li>• Log out when using shared devices</li>
                      <li>• Report suspicious activity</li>
                      <li>• Update your contact information</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                    <span className="text-gray-700">Access your personal data</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                    <span className="text-gray-700">Correct inaccurate information</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                    <span className="text-gray-700">Request deletion of your data</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                    <span className="text-gray-700">Opt out of marketing communications</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                    <span className="text-gray-700">Port your data to another service</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                    <span className="text-gray-700">Lodge a complaint with authorities</span>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Essential Cookies</h4>
                      <p className="text-gray-600">Required for website functionality and security.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                      <p className="text-gray-600">Help us understand how visitors use our website.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                      <p className="text-gray-600">Used for personalized advertising (with consent).</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Privacy Officer</h3>
                      <a href="mailto:privacy@toolminda.com" className="text-green-600 hover:text-green-700">
                        privacy@toolminda.com
                      </a>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                      <a href="mailto:support@toolminda.com" className="text-blue-600 hover:text-blue-700">
                        support@toolminda.com
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Policy Updates */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 