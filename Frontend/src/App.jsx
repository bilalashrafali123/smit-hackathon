import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [breakdown, setBreakdown] = useState(null);
  const [cnic, setCnic] = useState("");
  const [reason, setReason] = useState("");

  const loanCategories = {
    "Wedding Loans": {
      subCategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      maxPeriod: 36,
    },
    "Home Construction Loans": {
      subCategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      maxPeriod: 60,
    },
    "Business Startup Loans": {
      subCategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
      maxLoan: 1000000,
      maxPeriod: 60,
    },
    "Education Loans": {
      subCategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      maxPeriod: 48,
    },
  };

  const calculateLoanBreakdown = () => {
    if (!category || !subCategory || !initialDeposit || !loanPeriod || !cnic || !reason) {
      toast.error("Please fill in all fields.");
      return;
    }

    const principal = parseFloat(initialDeposit);
    const months = parseInt(loanPeriod, 10);

    const selectedCategory = loanCategories[category];
    if (selectedCategory.maxLoan !== "Based on requirement" && principal > selectedCategory.maxLoan) {
      toast.error(`Maximum loan amount for ${category} is PKR ${selectedCategory.maxLoan}`);
      return;
    }
    if (months > selectedCategory.maxPeriod) {
      toast.error(`Maximum loan period for ${category} is ${selectedCategory.maxPeriod / 12} years.`);
      return;
    }

    const monthlyInstallment = (principal / months).toFixed(2);

    setBreakdown({
      principal,
      months,
      monthlyInstallment,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Loan Categories Display */}
      <section id="categories" className="py-10 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-600">Loan Categories</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.keys(loanCategories).map((cat) => (
              <div
                key={cat}
                className={`p-6 rounded shadow-lg cursor-pointer ${
                  category === cat ? "bg-blue-200" : "bg-gray-50"
                } hover:bg-blue-100`}
                onClick={() => {
                  setCategory(cat);
                  setSubCategory("");
                }}
              >
                <h4 className="text-xl font-semibold text-blue-600">{cat}</h4>
                <p className="mt-2 text-gray-700">
                  Max Loan:{" "}
                  {loanCategories[cat].maxLoan === "Based on requirement"
                    ? loanCategories[cat].maxLoan
                    : `PKR ${loanCategories[cat].maxLoan}`}
                </p>
                <p className="text-gray-700">
                  Loan Period: {loanCategories[cat].maxPeriod / 12} years
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section id="loan-calculator" className="py-20 bg-blue-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-600">Loan Calculator</h3>
          <p className="mt-4 text-gray-700">
            Calculate your loan breakdown by selecting the category, subcategory, deposit, and loan period.
          </p>

          <div className="mt-10 bg-white p-6 shadow-lg rounded max-w-lg mx-auto">
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

            <div className="mb-4">
              <label className="block text-left text-gray-700 font-semibold mb-2">Select Category</label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setSubCategory(""); // Reset subcategory on category change
                }}
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
                  {loanCategories[category].subCategories.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}

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

      <ToastContainer />
    </div>
  );
};

export default LandingPage;
