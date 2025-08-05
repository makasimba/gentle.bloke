import React from "react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="store-container py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Welcome to the ToolMinda Help Center. Here you'll find answers to frequently asked questions, product guides, and troubleshooting tips.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Popular Help Topics */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Help Topics</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.99l-.318.158a6 6 0 01-3.86.99l-.318-.158a6 6 0 00-3.86-.99l-2.387.477a2 2 0 00-1.022.547A2 2 0 004 17v3a2 2 0 002 2h12a2 2 0 002-2v-3a2 2 0 00-.572-1.555z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Product Selection</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  What tools are right for my farm size? Get personalized recommendations based on your specific needs.
                </p>
                <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                  Learn more →
                </a>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Order Tracking</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  How to track my order? Get real-time updates on your delivery status.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Track order →
                </a>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Warranties</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Understanding product warranties and how to claim them when needed.
                </p>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                  View warranties →
                </a>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.553.894L15 16M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Demonstrations</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  How to request a demonstration of our products at your farm.
                </p>
                <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
                  Request demo →
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I choose the right tools for my farm?</h3>
                <p className="text-gray-600">
                  Consider your farm size, crop type, and budget. Our team can provide personalized recommendations based on your specific needs. Contact us for a consultation.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What is your delivery time?</h3>
                <p className="text-gray-600">
                  Orders are typically processed within 1-2 business days and delivered within 3-7 business days depending on your location. You'll receive tracking information via email.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer installation services?</h3>
                <p className="text-gray-600">
                  Yes, we offer installation and setup services for complex machinery. Our technicians are trained to ensure proper installation and provide basic training.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I need spare parts?</h3>
                <p className="text-gray-600">
                  We maintain a comprehensive inventory of spare parts for all our products. Contact our support team with your product details for quick assistance.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How can I get technical support?</h3>
                <p className="text-gray-600">
                  Our technical support team is available via phone, email, and WhatsApp. We also offer on-site support for complex issues. Response time is typically within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Help?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@toolminda.com"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Email Support
                </a>
                <a 
                  href="tel:+263771234567"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Call Support
                </a>
                <a 
                  href={`https://wa.me/+263784505460?text=${encodeURIComponent("Hi ToolMinda! I need help with your products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter; 