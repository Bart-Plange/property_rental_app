import { useState } from 'react';
import { FaDollarSign, FaCalendar, FaPercent } from 'react-icons/fa';
import backgroundImage from '../../assets/homeImages/mortgageintro.jpg';

const MortgageCalculator = () => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [propertyTax, setPropertyTax] = useState('');
  const [homeInsurance, setHomeInsurance] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [yearlyPayment, setYearlyPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);
  const [message, setMessage] = useState('');

  const calculateMortgage = () => {
    const principal = parseFloat(amount) - parseFloat(downPayment || 0);
    const interestRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseFloat(term) * 12;

    if (principal <= 0) {
      setMessage('Down payment is equal to or greater than the loan amount. No mortgage needed.');
      clearResults();
      return;
    } else {
      setMessage('');
    }

    if (principal && interestRate && numberOfPayments) {
      const mortgagePayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -numberOfPayments));

      const escrow = (parseFloat(propertyTax || 0) + parseFloat(homeInsurance || 0)) / 12;
      const totalMonthlyPayment = mortgagePayment + escrow;

      setMonthlyPayment(totalMonthlyPayment.toFixed(2));
      setYearlyPayment((totalMonthlyPayment * 12).toFixed(2));

      const totalAmountPaid = mortgagePayment * numberOfPayments;
      setTotalInterest((totalAmountPaid - principal).toFixed(2));

      let balance = principal;
      let schedule = [];
      for (let i = 0; i < numberOfPayments; i++) {
        const interest = balance * interestRate;
        const principalPayment = mortgagePayment - interest;
        balance -= principalPayment;

        schedule.push({
          month: i + 1,
          principalPayment: principalPayment.toFixed(2),
          interestPayment: interest.toFixed(2),
          balance: balance.toFixed(2),
        });
      }
      setAmortizationSchedule(schedule);
    }
  };

  const clearResults = () => {
    setMonthlyPayment(null);
    setYearlyPayment(null);
    setTotalInterest(null);
    setAmortizationSchedule([]);
  };

  const clearFields = () => {
    setAmount('');
    setRate('');
    setTerm('');
    setDownPayment('');
    setPropertyTax('');
    setHomeInsurance('');
    clearResults();
    setMessage('');
  };

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center relative"
         style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex max-w-4xl w-full">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full mr-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Mortgage Calculator</h1>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 mb-4">
              <FaDollarSign className="text-red-500 text-2xl" />
              <input
                type="number"
                placeholder="Loan Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-2 rounded-md border text-blue-500 font-bold border-gray-300"
              />
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaPercent className="text-red-500 text-2xl" />
              <input
                type="number"
                placeholder="Interest Rate (%)"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
              />
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaDollarSign className="text-red-500 text-2xl" />
              <input
                type="number"
                placeholder="Down Payment"
                value={downPayment}
                onChange={(e) => setDownPayment(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
              />
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaDollarSign className="text-red-500 text-2xl" />
              <input
                type="number"
                placeholder="Property Tax (Yearly, Optional)"
                value={propertyTax}
                onChange={(e) => setPropertyTax(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
              />
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <FaDollarSign className="text-red-500 text-2xl" />
              <input
                type="number"
                placeholder="Homeowner's Insurance (Yearly, Optional)"
                value={homeInsurance}
                onChange={(e) => setHomeInsurance(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
              />
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <FaCalendar className="text-red-500 text-2xl" />
              <input
                type="number"
                placeholder="Loan Term (Years)"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-300 text-blue-500 font-bold"
              />
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={calculateMortgage}
                className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
              >
                Calculate
              </button>
              <button
                onClick={clearFields}
                className="w-full py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-center text-white underline">Calculation Results</h2>
          {message && <p className="text-red-500 mb-4">{message}</p>}
          {monthlyPayment !== null && (
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">Monthly Payment</h3>
                <p className="text-lg text-green-600 font-bold">${monthlyPayment}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">Yearly Payment</h3>
                <p className="text-lg text-green-600 font-bold">${yearlyPayment}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">Total Interest</h3>
                <p className="text-lg text-green-600 font-bold">${totalInterest}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white">Amortization Schedule</h3>
                <div className="overflow-y-auto max-h-64">
                  {amortizationSchedule.map((item, index) => (
                    <div key={index} className="mb-2 border-b border-gray-600 pb-2">
                      <p className="text-sm text-white">Month {item.month}</p>
                      <p className="text-sm text-white">Principal Payment: ${item.principalPayment}</p>
                      <p className="text-sm text-white">Interest Payment: ${item.interestPayment}</p>
                      <p className="text-sm text-white">Remaining Balance: ${item.balance}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
