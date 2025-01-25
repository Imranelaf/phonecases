import React from 'react'

function CardInfo() {
  return (
    <div>

<label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">
          Card Number
        </label>
        <input
          type="text"
          id="card-number"
          className="w-full p-2 border rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="1234 5678 9012 3456"
        />

        <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700 mb-2">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry-date"
          className="w-full p-2 border rounded-lg mb-4 focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="MM/YY"
        />

        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full p-2 border rounded-lg mb-6 focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="123"
        />

        <button
          
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Pay Now
        </button>
      </div>
  )
}

export default CardInfo