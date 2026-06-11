import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, CreditCard, Truck, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      clearCart();
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-green-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Order Placed Successfully!</h2>
        <p className="text-gray-500 mb-8 text-lg">Thank you for shopping with Flipzon. Your order #FZ-99281 is being processed and will be delivered soon.</p>
        <button 
          onClick={() => navigate('/')}
          className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />
          <div className={`absolute top-1/2 left-0 h-1 bg-indigo-600 -translate-y-1/2 z-0 transition-all duration-500`} style={{ width: step === 1 ? '0%' : '100%' }} />
          
          {[
            { id: 1, label: 'Shipping', icon: MapPin },
            { id: 2, label: 'Payment', icon: CreditCard },
          ].map((s) => (
            <div key={s.id} className="relative z-10 flex flex-col items-center">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center border-4 ${step >= s.id ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-200 text-gray-400'}`}>
                <s.icon className="h-6 w-6" />
              </div>
              <span className={`mt-2 font-bold ${step >= s.id ? 'text-indigo-600' : 'text-gray-400'}`}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {step === 1 ? (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john@example.com" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-gray-700">Street Address</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="123 Main St" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">City</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="New York" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Zip Code</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="10001" />
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all mt-8">
                  Continue to Payment
                </button>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h3>
                <div className="space-y-4">
                  <div className="p-4 border-2 border-indigo-600 rounded-2xl bg-indigo-50 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-6 w-6 text-indigo-600" />
                      <div>
                        <p className="font-bold text-gray-900">Credit / Debit Card</p>
                        <p className="text-sm text-gray-500">Secure encrypted payment</p>
                      </div>
                    </div>
                    <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Card Number</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Expiry Date</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">CVV</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="123" />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8">
                  <button onClick={() => setStep(1)} className="flex-1 py-4 border border-gray-200 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 transition-all">
                    Back
                  </button>
                  <button 
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="flex-[2] py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      `Pay $${(totalPrice * 1.08).toFixed(2)}`
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Items Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (8%)</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>${(totalPrice * 1.08).toFixed(2)}</span>
              </div>
            </div>
            <div className="bg-indigo-100 p-4 rounded-2xl flex items-center space-x-3">
              <Truck className="h-5 w-5 text-indigo-600" />
              <p className="text-sm text-indigo-800 font-medium">Estimated delivery: 3-5 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
