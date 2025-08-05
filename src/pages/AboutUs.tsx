import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="store-container py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About ToolMinda
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At ToolMinda, our mission is to empower small to medium-scale farmers across Sub-Saharan Africa with access to high-quality tools, machinery, and equipment. Founded with the belief that agriculture is the backbone of the continent, we aim to simplify and modernize farming through affordable, durable, and reliable products.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We understand the challenges faced by local farmers — from limited access to capital and quality inputs, to unreliable equipment and lack of support. ToolMinda exists to bridge this gap. We curate, manufacture, and distribute solutions that make a meaningful difference in productivity and sustainability.
              </p>

              {/* Vision & Mission Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Our Vision</h3>
                  <p className="text-green-700">
                    To be the most trusted source of agricultural tools and technology for African farmers.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
                  <p className="text-blue-700">
                    To make modern farming accessible to all through innovation, affordability, and support.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">Every product meets our high standards for durability and performance.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Affordable Solutions</h4>
                  <p className="text-sm text-gray-600">Making modern farming technology accessible to all farmers.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Local Support</h4>
                  <p className="text-sm text-gray-600">Dedicated support team that understands local farming challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 