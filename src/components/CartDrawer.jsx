import React from 'react';

export default function CartDrawer({ isOpen, onClose, cart }) {
  if (!isOpen) return null;

  const generateWhatsAppMessage = () => {
    const phoneNumber = '9905763301';
    let message = 'Hello Qaleen Bhaiya, I want to order the following items:\n\n';
    let total = 0;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title}\n   Size: ${item.selectedSize}\n   Price: Rs. ${item.price.toLocaleString()}\n\n`;
      total += item.price;
    });

    message += `Total Amount: Rs. ${total.toLocaleString()}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-end">
      <div className="bg-[#faf8f5] w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex justify-between items-center border-b pb-4">
            <h3 className="font-serif text-xl font-bold text-[#2c221e]">Shopping Bag</h3>
            <button onClick={onClose} className="text-xl font-bold">✕</button>
          </div>

          <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-center text-stone-500 py-10 text-sm">Your bag is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex gap-4 border-b pb-3 items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1 text-xs">
                    <h4 className="font-semibold text-stone-800">{item.title}</h4>
                    <p className="text-stone-500">Size: {item.selectedSize}</p>
                    <p className="font-bold text-[#5c0612] mt-1">Rs. {item.price.toLocaleString()}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="border-t pt-4 space-y-3">
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white py-3 rounded flex items-center justify-center gap-2 font-medium text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-md"
            >
              Order via WhatsApp (+91 9905763301)
            </a>
          </div>
        )}
      </div>
    </div>
  );
}