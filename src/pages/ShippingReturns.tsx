import React from "react";

const ShippingReturns = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="store-container py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shipping & Returns Policy
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Shipping Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Shipping Information</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              We deliver nationwide across Zimbabwe with trusted courier partners to ensure your products arrive safely and on time.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 className="font-semibold text-green-800 mb-2">Processing Time</h3>
                <p className="text-green-700 text-sm">
                  Orders are processed within 1–2 business days from the time of order confirmation.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <h3 className="font-semibold text-blue-800 mb-2">Delivery Time</h3>
                <p className="text-blue-700 text-sm">
                  Delivery time is 3–7 business days depending on your location and product availability.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-purple-800 mb-2">Tracking</h3>
                <p className="text-purple-700 text-sm">
                  You will receive a tracking number via email once your order ships.
                </p>
              </div>
            </div>

            {/* Shipping Details */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Details</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Free shipping on orders over $500</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Standard shipping: $15 for orders under $500</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Express shipping available for urgent orders (additional fee applies)</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Delivery to remote areas may take additional time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Returns Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Returns Policy</h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              We want you to be completely satisfied with your purchase. If you're not happy with your order, we're here to help.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                <h3 className="font-semibold text-red-800 mb-2">Return Window</h3>
                <p className="text-red-700">
                  We accept returns within 14 days of delivery for unused items in original packaging.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                <h3 className="font-semibold text-green-800 mb-2">Refund Processing</h3>
                <p className="text-green-700">
                  Refunds are processed within 5 business days of receiving the returned item.
                </p>
              </div>
            </div>

            {/* Return Process */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Return an Item</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Contact Us</h4>
                    <p className="text-gray-600 text-sm">Email returns@toolminda.com with your order number and reason for return.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Get Return Label</h4>
                    <p className="text-gray-600 text-sm">We'll provide you with a return shipping label and instructions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ship Item Back</h4>
                    <p className="text-gray-600 text-sm">Package the item securely and ship it back using the provided label.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Receive Refund</h4>
                    <p className="text-gray-600 text-sm">Once we receive and inspect the item, we'll process your refund.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exceptions & Contact */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exceptions & Contact</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Non-Returnable Items</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Custom or personalized items</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Items that have been used or installed</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Damaged items due to improper use</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Items missing original packaging</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Returns Team</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:returns@toolminda.com" className="text-green-600 hover:text-green-700">
                        returns@toolminda.com
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
                      <a href="tel:+263771234567" className="text-blue-600 hover:text-blue-700">
                        +263 77 123 4567
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
  );
};

export default ShippingReturns; 