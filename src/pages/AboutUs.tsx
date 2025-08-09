import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="store-container py-4 md:py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-tight leading-tight">
              About
            </h1>
            <h1 className="text-5xl md:text-7xl font-light text-slate-600 tracking-tight leading-tight">
              ToolMinda
            </h1>
          </div>
          <div className="w-24 h-px bg-slate-300 mx-auto mb-4"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Empowering African farmers with quality tools and sustainable solutions for a brighter agricultural future
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {/* Story Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 md:p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-4 font-light">
                  At ToolMinda, our mission is to empower small to medium-scale farmers across Africa with access to high-quality tools, machinery, and equipment. Founded with the belief that agriculture is the backbone of the continent, we aim to simplify and modernize farming through affordable, durable, and reliable products.
                </p>
                
                <p className="text-lg text-slate-700 leading-relaxed font-light">
                  We understand the challenges faced by local farmers — from limited access to capital and quality inputs, to unreliable equipment and lack of support. ToolMinda exists to bridge this gap. We curate, manufacture, and distribute solutions that make a meaningful difference in productivity and sustainability.
                </p>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-slate-800">Our Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                  To be the most trusted source of agricultural tools and technology for African farmers, driving sustainable growth and food security across the continent.
                </p>
              </div>
              
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-slate-800">Our Mission</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                  To make modern farming accessible to all through innovation, affordability, and comprehensive support that transforms agricultural practices.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-slate-800 mb-3">Quality Assurance</h4>
                <p className="text-slate-600 leading-relaxed font-light">Every product meets our rigorous standards for durability, performance, and reliability in challenging agricultural environments.</p>
              </div>
              
              <div className="group text-center bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14l4-4 4 4" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-slate-800 mb-3">Affordable Solutions</h4>
                <p className="text-slate-600 leading-relaxed font-light">Making cutting-edge farming technology accessible through flexible financing and competitive pricing strategies.</p>
              </div>
              
              <div className="group text-center bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-medium text-slate-800 mb-3">Local Support</h4>
                <p className="text-slate-600 leading-relaxed font-light">Dedicated support team with deep understanding of local farming challenges and regional agricultural practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 