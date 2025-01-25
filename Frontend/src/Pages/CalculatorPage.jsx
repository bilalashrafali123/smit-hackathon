import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CalculatorPage = () => {
  const [loanDetails, setLoanDetails] = useState({
    guarantors: [
      { name: "", email: "", location: "", cnic: "" },
      { name: "", email: "", location: "", cnic: "" },
    ],
  });

  // Handle changes for the guarantor form
  const handleLoanDetailsChange = (e, index, field) => {
    const updatedGuarantors = [...loanDetails.guarantors];
    updatedGuarantors[index][field] = e.target.value;
    setLoanDetails({ ...loanDetails, guarantors: updatedGuarantors });
  };

  // Submit loan request
  const submitLoanRequest = () => {
    // Validate all guarantor details
    const isValid = loanDetails.guarantors.every(
      (guarantor) =>
        guarantor.name && guarantor.email && guarantor.location && guarantor.cnic
    );

    if (!isValid) {
      toast.error("Please fill out all guarantor fields.");
      return;
    }

    // If validation passes
    toast.success("Loan request successfully submitted! Check your email.");
    console.log("Loan Details Submitted:", loanDetails);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <h1 className="text-4xl font-bold text-center text-gray-800">Loan Request</h1>

      {/* Loan Details Form */}
      <section className="mt-8 max-w-3xl mx-auto bg-white shadow-lg rounded p-6">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
          Guarantor Information
        </h2>

        {/* Guarantor 1 Form */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
            Guarantor 1
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                value={loanDetails.guarantors[0].name}
                onChange={(e) => handleLoanDetailsChange(e, 0, "name")}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                value={loanDetails.guarantors[0].email}
                onChange={(e) => handleLoanDetailsChange(e, 0, "email")}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Location</label>
              <input
                type="text"
                value={loanDetails.guarantors[0].location}
                onChange={(e) => handleLoanDetailsChange(e, 0, "location")}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">CNIC</label>
              <input
                type="text"
                value={loanDetails.guarantors[0].cnic}
                onChange={(e) => handleLoanDetailsChange(e, 0, "cnic")}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        </div>

        {/* Guarantor 2 Form */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
            Guarantor 2
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                value={loanDetails.guarantors[1].name}
                onChange={(e) => handleLoanDetailsChange(e, 1, "name")}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                value={loanDetails.guarantors[1].email}
                onChange={(e) => handleLoanDetailsChange(e, 1, "email")}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Location</label>
              <input
                type="text"
                value={loanDetails.guarantors[1].location}
                onChange={(e) => handleLoanDetailsChange(e, 1, "location")}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">CNIC</label>
              <input
                type="text"
                value={loanDetails.guarantors[1].cnic}
                onChange={(e) => handleLoanDetailsChange(e, 1, "cnic")}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={submitLoanRequest}
          className="bg-blue-600 text-white py-2 px-4 rounded w-full"
        >
          Submit Loan Request
        </button>
      </section>
    </div>
  );
};

export default CalculatorPage;