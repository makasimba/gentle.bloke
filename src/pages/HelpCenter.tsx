import React from "react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="store-container py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-tight leading-tight">
              Help
            </h1>
            <h1 className="text-5xl md:text-7xl font-light text-slate-600 tracking-tight leading-tight">
              Center
            </h1>
          </div>
          <div className="w-24 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Find answers to frequently asked questions, product guides, and expert support for all your agricultural needs
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {/* Popular Help Topics */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-8 text-center">Popular Help Topics</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-slate-800">Product Selection</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    What tools are right for my farm size? Get personalized recommendations based on your specific needs.
                  </p>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium group-hover:underline transition-colors duration-300">
                    Learn more →
                  </a>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-slate-800">Order Tracking</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    How to track my order? Get real-time updates on your delivery status.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium group-hover:underline transition-colors duration-300">
                    Track order →
                  </a>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-slate-800">Warranties</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    Understanding product warranties and how to claim them when needed.
                  </p>
                  <a href="#" className="text-purple-600 hover:text-purple-700 font-medium group-hover:underline transition-colors duration-300">
                    View warranties →
                  </a>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-.553.894L15 16M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-slate-800">Demonstrations</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light mb-4">
                    How to request a demonstration of our products at your farm.
                  </p>
                  <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium group-hover:underline transition-colors duration-300">
                    Request demo →
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-8">
                <div className="border-b border-slate-200 pb-8">
                  <h3 className="text-xl font-medium text-slate-800 mb-4">How do I choose the right tools for my farm?</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Consider your farm size, crop type, and budget. Our team can provide personalized recommendations based on your specific needs. Contact us for a consultation.
                  </p>
                </div>

                <div className="border-b border-slate-200 pb-8">
                  <h3 className="text-xl font-medium text-slate-800 mb-4">What is your delivery time?</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Orders are typically processed within 1-2 business days and delivered within 3-7 business days depending on your location. You'll receive tracking information via email.
                  </p>
                </div>

                <div className="border-b border-slate-200 pb-8">
                  <h3 className="text-xl font-medium text-slate-800 mb-4">Do you offer installation services?</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Yes, we offer installation and setup services for complex machinery. Our technicians are trained to ensure proper installation and provide basic training.
                  </p>
                </div>

                <div className="border-b border-slate-200 pb-8">
                  <h3 className="text-xl font-medium text-slate-800 mb-4">What if I need spare parts?</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    We maintain a comprehensive inventory of spare parts for all our products. Contact our support team with your product details for quick assistance.
                  </p>
                </div>

                <div className="pb-8">
                  <h3 className="text-xl font-medium text-slate-800 mb-4">How can I get technical support?</h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Our technical support team is available via phone, email, and WhatsApp. We also offer on-site support for complex issues. Response time is typically within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">Need More Help?</h2>
                <p className="text-slate-600 mb-12 text-lg leading-relaxed font-light max-w-2xl mx-auto">
                  Can't find what you're looking for? Our support team is here to help with personalized assistance.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <a 
                    href="mailto:support@toolminda.com"
                    className="group bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 p-6 hover:bg-white transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-slate-800 mb-2">Email Support</h3>
                    <p className="text-sm text-slate-600 font-light">Get detailed responses within 24 hours</p>
                  </a>
                  
                  <a 
                    href="tel:+263771234567"
                    className="group bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 p-6 hover:bg-white transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-slate-800 mb-2">Call Support</h3>
                    <p className="text-sm text-slate-600 font-light">Speak directly with our experts</p>
                  </a>
                  
                  <a 
                    href={`https://wa.me/+263784505460?text=${encodeURIComponent("Hi ToolMinda! I need help with your products.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 p-6 hover:bg-white transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-slate-800 mb-2">WhatsApp</h3>
                    <p className="text-sm text-slate-600 font-light">Quick responses via chat</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter; 