import React from "react";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="store-container py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Commitment to Sustainability
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Sustainability is at the heart of ToolMinda's operations. We believe that farming must be productive <em>and</em> environmentally responsible. That's why we support practices and technologies that:
            </p>

            {/* Sustainability Practices */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-800">Soil Conservation</h3>
                </div>
                <p className="text-green-700">
                  Minimize soil degradation and erosion through proper tool selection and farming practices.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.99l-.318.158a6 6 0 01-3.86.99l-.318-.158a6 6 0 00-3.86-.99l-2.387.477a2 2 0 00-1.022.547A2 2 0 004 17v3a2 2 0 002 2h12a2 2 0 002-2v-3a2 2 0 00-.572-1.555z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-800">Water Efficiency</h3>
                </div>
                <p className="text-blue-700">
                  Promote efficient water usage and conservation through smart irrigation tools.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-800">Energy Efficiency</h3>
                </div>
                <p className="text-purple-700">
                  Use energy-efficient or manual-powered equipment to reduce carbon footprint.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-600">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-800">Repairability</h3>
                </div>
                <p className="text-orange-700">
                  Promote repairability and reuse of tools through our spares and support ecosystem.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Education</h3>
              <p className="text-gray-700 mb-6">
                We also support community education on regenerative farming, agroforestry, and climate-smart agriculture. Our team works with local farming communities to share knowledge and best practices.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Regenerative Farming</h4>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5a2 2 0 002 2h.01M15 3.935V5a2 2 0 012 2v.01M12 8a2 2 0 012 2v.01M12 12a2 2 0 012 2v.01M12 16a2 2 0 012 2v.01M12 20a2 2 0 012 2v.01" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Agroforestry</h4>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Climate-Smart Agriculture</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability; 