import React from "react";

const Press = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="store-container py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Media & Press Inquiries
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We welcome journalists, bloggers, and media partners to share our journey. ToolMinda is shaping the future of African agriculture — one innovation at a time.
            </p>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Contact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">For press kits, interviews, or speaking engagements:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a href="mailto:press@toolminda.com" className="text-green-600 hover:text-green-700 transition-colors">
                          press@toolminda.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <a href="tel:+263771234567" className="text-blue-600 hover:text-blue-700 transition-colors">
                          +263 77 123 4567
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Press Resources</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Press Kit</p>
                        <a href="#" className="text-purple-600 hover:text-purple-700 transition-colors">
                          Download Press Kit
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Executive Bios</p>
                        <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors">
                          View Team Bios
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Mentions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Mentions</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Coming Soon: Our feature in AgriAfrica Weekly</h3>
                  <p className="text-gray-600 text-sm">
                    ToolMinda will be featured in the upcoming issue of AgriAfrica Weekly, highlighting our innovative approach to agricultural technology distribution.
                  </p>
                  <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full mt-2">
                    Upcoming
                  </span>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">ToolMinda joins hands with local co-ops to launch pilot mechanization hubs</h3>
                  <p className="text-gray-600 text-sm">
                    We're excited to announce our partnership with local cooperatives to establish mechanization hubs across the region, making farming equipment more accessible to small-scale farmers.
                  </p>
                  <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                    Partnership
                  </span>
                </div>
              </div>
            </div>

            {/* Media Guidelines */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Media Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Response Time</h4>
                  <p>We aim to respond to all press inquiries within 24 hours during business days.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Interview Requests</h4>
                  <p>We're available for phone, video, and in-person interviews. Please include your preferred format and timeline.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Photo & Video</h4>
                  <p>High-resolution images and video content are available upon request for editorial use.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Fact Checking</h4>
                  <p>We're happy to assist with fact-checking and provide additional context for your stories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press; 