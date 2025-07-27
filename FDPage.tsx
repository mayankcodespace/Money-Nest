import  { useState } from 'react';
import { ArrowRight, Search, Calculator } from 'lucide-react';
import FDList from '../components/FDList';

const FDPage = () => {
  const [amount, setAmount] = useState(25000);
  const [tenure, setTenure] = useState(1);
  const [interestRate, setInterestRate] = useState(7.0);
  const [userType, setUserType] = useState('regular');

  // Simple FD calculator
  const calculateMaturity = () => {
    const principal = amount;
    const ratePerYear = interestRate / 100;
    const years = tenure;
    
    // Calculate using compound interest formula
    const maturityAmount = principal * Math.pow((1 + ratePerYear), years);
    const interestEarned = maturityAmount - principal;
    
    return {
      maturityAmount: Math.round(maturityAmount),
      interestEarned: Math.round(interestEarned)
    };
  };

  const { maturityAmount, interestEarned } = calculateMaturity();

  return (
    <div>
      <div className="bg-gradient-to-r from-[#f8fafb] to-[#f1f6f7] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-heading mb-6">Fixed Deposits</h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto mb-8">
              High interest rates up to 9% with top banks and companies
            </p>
            <div className="max-w-lg mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by bank name"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-heading">FD Calculator</h2>
            <button className="px-4 py-2 bg-gray-100 rounded-lg text-secondary flex items-center hover:bg-gray-200 mt-2 sm:mt-0">
              <Calculator size={18} className="mr-2" />
              Calculate
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Amount (₹)</label>
                <input 
                  type="number" 
                  className="input-field" 
                  placeholder="25000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Tenure</label>
                <select 
                  className="input-field"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                >
                  <option value={1}>1 Year</option>
                  <option value={2}>2 Years</option>
                  <option value={3}>3 Years</option>
                  <option value={5}>5 Years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Interest Rate (%)</label>
                <input 
                  type="number" 
                  step="0.01"
                  className="input-field" 
                  placeholder="7.0"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-light p-4 rounded-lg">
                <p className="text-sm text-secondary mb-1">Maturity Amount</p>
                <p className="text-2xl font-bold text-heading">₹{maturityAmount.toLocaleString()}</p>
              </div>
              <div className="bg-light p-4 rounded-lg">
                <p className="text-sm text-secondary mb-1">Interest Earned</p>
                <p className="text-2xl font-bold text-primary">₹{interestEarned.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-heading">Best FD Rates</h2>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button 
                className={`px-4 py-2 rounded-lg text-secondary ${userType === 'regular' ? 'bg-primary bg-opacity-10 text-primary' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setUserType('regular')}
              >
                Regular
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-secondary ${userType === 'senior' ? 'bg-primary bg-opacity-10 text-primary' : 'bg-gray-100 hover:bg-gray-200'}`}
                onClick={() => setUserType('senior')}
              >
                Senior Citizen
              </button>
            </div>
          </div>
          
          <FDList />
        </div>
        
        <div className="bg-light p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-heading mb-6">Why invest in Fixed Deposits with Groww?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "High Interest Rates",
                description: "Get the best FD rates from top banks and companies"
              },
              {
                title: "Completely Digital",
                description: "Open and manage your FDs online without any paperwork"
              },
              {
                title: "Easy Withdrawal",
                description: "Premature withdrawal options with transparent charges"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-heading mb-2">{item.title}</h3>
                <p className="text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FDPage;
 