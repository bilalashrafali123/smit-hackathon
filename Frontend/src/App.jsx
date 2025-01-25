import React, { useState } from "react";

const LandingPage = () => {
  // State for loan calculator
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [breakdown, setBreakdown] = useState(null);
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [cnic, setCnic] = useState("");
const [reason, setReason] = useState("");

  // Loan categories and subcategories
  const loanCategories = {
    "Small Business": ["Startup Loan", "Expansion Loan"],
    "Education": ["Higher Studies", "Skill Development"],
    "Health": ["Medical Emergency", "Surgical Procedures"],
  };

  // Calculate Loan Breakdown
  const calculateLoanBreakdown = () => {
    if (!category || !subCategory || !initialDeposit || !loanPeriod) {
      alert("Please fill in all fields.");
      return;
    }
    const principal = parseFloat(initialDeposit);
    const months = parseInt(loanPeriod, 10);
    const monthlyInstallment = (principal / months).toFixed(2);

    setBreakdown({
      principal,
      months,
      monthlyInstallment,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      

      {/* Loan Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800">Loan Categories</h3>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.keys(loanCategories).map((category) => (
              <div key={category} className="bg-blue-100 p-6 shadow rounded">
                <h4 className="text-xl font-semibold text-blue-600">{category}</h4>
                <ul className="mt-2 text-gray-700">
                  {loanCategories[category].map((subCategory) => (
                    <li key={subCategory} className="mt-1">• {subCategory}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* Loan Calculator */}
<section id="loan-calculator" className="py-20 bg-blue-50">
  <div className="container mx-auto text-center">
    <h3 className="text-3xl font-bold text-blue-600">Loan Calculator</h3>
    <p className="mt-4 text-gray-700">
      Calculate your loan breakdown by selecting the category, subcategory, deposit, and loan period.
    </p>

    {/* Calculator Form */}
    <div className="mt-10 bg-white p-6 shadow-lg rounded max-w-lg mx-auto">
      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-left text-gray-700 font-semibold mb-2">Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded border"
          placeholder="Enter your name"
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-left text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded border"
          placeholder="Enter your email"
        />
      </div>

      {/* CNIC Input */}
      <div className="mb-4">
        <label className="block text-left text-gray-700 font-semibold mb-2">CNIC Number</label>
        <input
          type="text"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="w-full p-3 rounded border"
          placeholder="Enter your CNIC"
        />
      </div>

      {/* Reason for Loan */}
      <div className="mb-4">
        <label className="block text-left text-gray-700 font-semibold mb-2">Reason for Loan</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full p-3 rounded border"
          placeholder="Enter reason for loan"
          rows="3"
        />
      </div>

      {/* Category Selector */}
      <div className="mb-4">
        <label className="block text-left text-gray-700 font-semibold mb-2">Select Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded border"
        >
          <option value="">-- Select Category --</option>
          {Object.keys(loanCategories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {category && (
        <div className="mb-4">
          <label className="block text-left text-gray-700 font-semibold mb-2">Select Subcategory</label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full p-3 rounded border"
          >
            <option value="">-- Select Subcategory --</option>
            {loanCategories[category].map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Initial Deposit */}
      <div className="mb-4">
        <label className="block text-left text-gray-700 font-semibold mb-2">Initial Deposit (PKR)</label>
        <input
          type="number"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(e.target.value)}
          className="w-full p-3 rounded border"
          placeholder="Enter amount"
        />
      </div>

      {/* Loan Period */}
      <div className="mb-4">
        <label className="block text-left text-gray-700 font-semibold mb-2">Loan Period (Months)</label>
        <input
          type="number"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
          className="w-full p-3 rounded border"
          placeholder="Enter loan period"
        />
      </div>

      <button
        onClick={calculateLoanBreakdown}
        className="bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700 w-full"
      >
        Calculate Breakdown
      </button>
    </div>

    {/* Loan Breakdown */}
    {breakdown && (
      <div className="mt-10 bg-white p-6 shadow-lg rounded max-w-lg mx-auto">
        <h4 className="text-2xl font-bold text-gray-800">Loan Breakdown</h4>
        <p className="mt-4 text-gray-700">
          <strong>Principal Amount:</strong> PKR {breakdown.principal}
        </p>
        <p className="text-gray-700">
          <strong>Loan Period:</strong> {breakdown.months} months
        </p>
        <p className="text-gray-700">
          <strong>Monthly Installment:</strong> PKR {breakdown.monthlyInstallment}
        </p>
      </div>
    )}
  </div>
</section>
</div>
);
};

export default LandingPage;