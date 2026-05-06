import React from 'react';

const MemberShipCard = () => {
    return (
       <div className="bg-gray-50 py-12 px-4 my-10 w-10/12 mx-auto">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900">Choose Your Reading Journey</h2>
      <p className="text-gray-600 mt-2">Unlock thousands of stories with our flexible membership plans.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
     
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col transition-transform hover:scale-105">
        <h3 className="text-xl font-semibold text-gray-800">Casual Reader</h3>
        <p className="text-4xl font-bold mt-4">$0 <span className="text-sm font-normal text-gray-500">/month</span></p>
        <ul className="mt-6 space-y-4 flex-grow">
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-green-500">✔</span> Borrow 2 books at a time
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-green-500">✔</span> 14-day borrowing period
          </li>
          <li className="flex items-center text-gray-400 line-through">
            <span className="mr-2">✘</span> E-book access
          </li>
        </ul>
        <button className="mt-8 w-full py-3 px-4 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition">Get Started</button>
      </div>

      
      <div className="bg-white rounded-2xl shadow-xl border-2 border-indigo-600 p-8 flex flex-col relative transform scale-105 z-10">
        <span className="absolute top-0 right-8 transform -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
        <h3 className="text-xl font-semibold text-gray-800">Bibliophile</h3>
        <p className="text-4xl font-bold mt-4 text-indigo-600">$12 <span className="text-sm font-normal text-gray-500">/month</span></p>
        <ul className="mt-6 space-y-4 flex-grow">
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-indigo-500">✔</span> Borrow 10 books at a time
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-indigo-500">✔</span> 30-day borrowing period
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-indigo-500">✔</span> Unlimited E-book access
          </li>
          <li className="flex items-center text-gray-600">
            <span className="mr-2 text-indigo-500">✔</span> 2 Renewable extensions
          </li>
        </ul>
        <button className="mt-8 w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-lg">Join Now</button>
      </div>

      
      <div className="bg-gray-900 rounded-2xl shadow-sm p-8 flex flex-col transition-transform hover:scale-105 text-white">
        <h3 className="text-xl font-semibold">Collector</h3>
        <p className="text-4xl font-bold mt-4 text-white">$25 <span className="text-sm font-normal text-gray-400">/month</span></p>
        <ul className="mt-6 space-y-4 flex-grow">
          <li className="flex items-center text-gray-300">
            <span className="mr-2 text-yellow-400">✔</span> Unlimited physical books
          </li>
          <li className="flex items-center text-gray-300">
            <span className="mr-2 text-yellow-400">✔</span> No late fees ever
          </li>
          <li className="flex items-center text-gray-300">
            <span className="mr-2 text-yellow-400">✔</span> Early access to new arrivals
          </li>
          <li className="flex items-center text-gray-300">
            <span className="mr-2 text-yellow-400">✔</span> Free home delivery
          </li>
        </ul>
        <button className="mt-8 w-full py-3 px-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition">Go Elite</button>
      </div>

    </div>
  </div>
</div>
    );
};

export default MemberShipCard;
