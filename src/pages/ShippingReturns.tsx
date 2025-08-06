import React from "react";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="store-container py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 tracking-tight leading-tight">
              Shipping &
            </h1>
            <h1 className="text-5xl md:text-7xl font-light text-slate-600 tracking-tight leading-tight">
              Returns Policy
            </h1>
          </div>
          <div className="w-24 h-px bg-slate-300 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Transparent shipping and returns policies designed to ensure your complete satisfaction
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {/* Shipping Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-light text-slate-800">Shipping Information</h2>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed font-light mb-8">
                We deliver nationwide across Zimbabwe with trusted courier partners to ensure your products arrive safely and on time.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-slate-800">Processing Time</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    Orders are processed within 1–2 business days from the time of order confirmation.
                  </p>
                </div>
                
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-slate-800">Delivery Time</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    Delivery time is 3–7 business days depending on your location and product availability.
                  </p>
                </div>
                
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-slate-800">Tracking</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    You will receive a tracking number via email once your order ships.
                  </p>
                </div>
              </div>

              {/* Shipping Details */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
                <h3 className="text-xl font-medium text-slate-800 mb-6">Shipping Details</h3>
                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="font-light">Express shipping available for urgent orders (additional fee applies)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="font-light">Delivery to remote areas may take additional time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Returns Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </div>
                <h2 className="text-3xl font-light text-slate-800">Returns Policy</h2>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed font-light mb-8">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, we're here to help.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-slate-800">Return Window</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light">
                    We accept returns within 14 days of delivery for unused items in original packaging.
                  </p>
                </div>
                
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-medium text-slate-800">Refund Processing</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light">
                    Refunds are processed within 5 business days of receiving the returned item.
                  </p>
                </div>
              </div>

              {/* Return Process */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-6">
                <h3 className="text-xl font-medium text-slate-800 mb-6">How to Return an Item</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Contact Us</h4>
                      <p className="text-slate-600 leading-relaxed font-light text-sm">Email returns@toolminda.com with your order number and reason for return.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Get Return Label</h4>
                      <p className="text-slate-600 leading-relaxed font-light text-sm">We'll provide you with a return shipping label and instructions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Ship Item Back</h4>
                      <p className="text-slate-600 leading-relaxed font-light text-sm">Package the item securely and ship it back using the provided label.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Receive Refund</h4>
                      <p className="text-slate-600 leading-relaxed font-light text-sm">Once we receive and inspect the item, we'll process your refund.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exceptions & Contact */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-light text-slate-800 mb-8 text-center">Exceptions & Contact</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-slate-800 mb-6">Non-Returnable Items</h3>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="font-light">Custom or personalized items</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="font-light">Items that have been used or installed</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="font-light">Damaged items due to improper use</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="font-light">Items missing original packaging</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-slate-800 mb-6">Contact Returns Team</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Email</p>
                        <a href="mailto:returns@toolminda.com" className="text-emerald-600 hover:text-emerald-700 font-light">
                          returns@toolminda.com
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
    </div>
  );
};

export default ShippingReturns; 