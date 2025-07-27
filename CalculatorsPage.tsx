import   { useState } from 'react';
import { Calculator, TrendingUp, PieChart, DollarSign, BarChart3, Layout, Clock, Percent, CreditCard } from 'lucide-react';
 

const CalculatorsPage = () => {
  // Active calculator state
  const [activeCalculator, setActiveCalculator] = useState('sip');
  
  // SIP Calculator
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipYears, setSipYears] = useState(10);
  const [sipReturn, setSipReturn] = useState(12);
  
  // Lumpsum Calculator
  const [lumpsumAmount, setLumpsumAmount] = useState(100000);
  const [lumpsumYears, setLumpsumYears] = useState(5);
  const [lumpsumReturn, setLumpsumReturn] = useState(10);
  
  // SWP Calculator
  const [swpAmount, setSwpAmount] = useState(100000);
  const [swpWithdrawal, setSwpWithdrawal] = useState(5000);
  const [swpYears, setSwpYears] = useState(10);
  const [swpReturn, setSwpReturn] = useState(8);
  
  // Brokerage Calculator
  const [tradeType, setTradeType] = useState('delivery');
  const [brokerageAmount, setBrokerageAmount] = useState(100000);
  const [brokerageQuantity, setBrokerageQuantity] = useState(10);
  
  // Margin Calculator
  const [stockPrice, setStockPrice] = useState(1000);
  const [quantity, setQuantity] = useState(10);
  const [marginPercentage, setMarginPercentage] = useState(20);

  // SIP Calculator
  const calculateSIP = () => {
    const monthlyRate = sipReturn / 12 / 100;
    const months = sipYears * 12;
    const futureValue = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvestment = sipAmount * months;
    const estimatedReturns = futureValue - totalInvestment;
    
    return {
      futureValue: Math.round(futureValue),
      totalInvestment,
      estimatedReturns: Math.round(estimatedReturns),
      wealthGained: Math.round(estimatedReturns)
    };
  };
  
  // Lumpsum Calculator
  const calculateLumpsum = () => {
    const futureValue = lumpsumAmount * Math.pow(1 + lumpsumReturn / 100, lumpsumYears);
    const estimatedReturns = futureValue - lumpsumAmount;
    
    return {
      futureValue: Math.round(futureValue),
      totalInvestment: lumpsumAmount,
      estimatedReturns: Math.round(estimatedReturns)
    };
  };
  
  // SWP Calculator
  const calculateSWP = () => {
    let principal = swpAmount;
    const monthlyRate = swpReturn / 12 / 100;
    const months = swpYears * 12;
    let totalWithdrawal = 0;
    
    for (let i = 0; i < months; i++) {
      principal = principal * (1 + monthlyRate) - swpWithdrawal;
      totalWithdrawal += swpWithdrawal;
      
      if (principal <= 0) {
        return {
          remainingAmount: 0,
          totalWithdrawal: totalWithdrawal,
          monthsLasted: i + 1,
          yearsLasted: Math.floor(i / 12) + " years " + (i % 12) + " months"
        };
      }
    }
    
    return {
      remainingAmount: Math.round(principal),
      totalWithdrawal: totalWithdrawal,
      monthsLasted: months,
      yearsLasted: swpYears + " years"
    };
  };
  
  // Brokerage Calculator
  const calculateBrokerage = () => {
    const totalValue = brokerageAmount * brokerageQuantity;
    let brokerageFee = 0;
    let stt = 0;
    let exchangeCharges = 0;
    let sebi = 0;
    let stampDuty = 0;
    let gst = 0;
    
    if (tradeType === 'delivery') {
      brokerageFee = 0; // MoneyNest has 0 brokerage
      stt = totalValue * 0.001; // 0.1% STT for delivery
      exchangeCharges = totalValue * 0.0000325; // 0.00325% exchange charges
      sebi = totalValue * 0.000001; // 0.0001% SEBI charges
      stampDuty = totalValue * 0.00015; // 0.015% stamp duty
      gst = (brokerageFee + exchangeCharges + sebi) * 0.18; // 18% GST on brokerage, exchange charges and SEBI charges
    } else if (tradeType === 'intraday') {
      brokerageFee = 0; // MoneyNest has 0 brokerage
      stt = totalValue * 0.00025; // 0.025% STT for intraday
      exchangeCharges = totalValue * 0.0000325; // 0.00325% exchange charges
      sebi = totalValue * 0.000001; // 0.0001% SEBI charges
      stampDuty = totalValue * 0.00002; // 0.002% stamp duty
      gst = (brokerageFee + exchangeCharges + sebi) * 0.18; // 18% GST on brokerage, exchange charges and SEBI charges
    }
    
    const totalCharges = brokerageFee + stt + exchangeCharges + sebi + stampDuty + gst;
    
    return {
      totalValue,
      brokerageFee: Math.round(brokerageFee * 100) / 100,
      stt: Math.round(stt * 100) / 100,
      exchangeCharges: Math.round(exchangeCharges * 100) / 100,
      sebi: Math.round(sebi * 100) / 100,
      stampDuty: Math.round(stampDuty * 100) / 100,
      gst: Math.round(gst * 100) / 100,
      totalCharges: Math.round(totalCharges * 100) / 100,
      netAmount: Math.round((totalValue - totalCharges) * 100) / 100
    };
  };
  
  // Margin Calculator
  const calculateMargin = () => {
    const totalValue = stockPrice * quantity;
    const requiredMargin = totalValue * (marginPercentage / 100);
    const leverage = totalValue / requiredMargin;
    
    return {
      totalValue,
      requiredMargin: Math.round(requiredMargin),
      leverage: leverage.toFixed(2)
    };
  };
  
  const sipResults = calculateSIP();
  const lumpsumResults = calculateLumpsum();
  const swpResults = calculateSWP();
  const brokerageResults = calculateBrokerage();
  const marginResults = calculateMargin();
  
   // Calculator tabs
  const calculatorTabs = [
    { id: 'sip', label: 'SIP Calculator', icon: Calculator },
    { id: 'lumpsum', label: 'Lumpsum Calculator', icon: PieChart },
    { id: 'swp', label: 'SWP Calculator', icon: Clock },
    { id: 'brokerage', label: 'Brokerage Calculator', icon: DollarSign },
    { id: 'margin', label: 'Margin Calculator', icon: CreditCard }
  ];
 

  return (
    <div>
      <div className="bg-gradient-to-r from-[#f8fafb] to-[#f1f6f7] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-heading mb-6">Investment Calculators</h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto mb-8">
              Plan your investments better with our easy-to-use financial calculators
            </p>
            
            {/* Calculator tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {calculatorTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeCalculator === tab.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-secondary hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveCalculator(tab.id)}
                >
                  <tab.icon size={16} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* SIP Calculator */}
        {activeCalculator === 'sip' && (
          <div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center">
                <Calculator size={28} className="text-primary mr-3" />
                <h2 className="text-2xl font-bold text-heading">SIP Calculator</h2>
              </div>
              <p className="text-secondary mt-2 sm:mt-0">Estimate returns on your SIP investments</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Monthly Investment (₹)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={sipAmount}
                    onChange={(e) => setSipAmount(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipAmount(1000)}
                    >
                      ₹1,000
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipAmount(5000)}
                    >
                      ₹5,000
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipAmount(10000)}
                    >
                      ₹10,000
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipAmount(25000)}
                    >
                      ₹25,000
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Time Period (years)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipYears(5)}
                    >
                      5 yrs
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipYears(10)}
                    >
                      10 yrs
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipYears(15)}
                    >
                      15 yrs
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipYears(20)}
                    >
                      20 yrs
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Expected Return Rate (%)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    className="input-field" 
                    value={sipReturn}
                    onChange={(e) => setSipReturn(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipReturn(8)}
                    >
                      8%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipReturn(10)}
                    >
                      10%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipReturn(12)}
                    >
                      12%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSipReturn(15)}
                    >
                      15%
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Invested Amount</p>
                  <p className="text-2xl font-bold text-heading">₹{sipResults.totalInvestment.toLocaleString()}</p>
                </div>
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Est. Returns</p>
                  <p className="text-2xl font-bold text-primary">₹{sipResults.estimatedReturns.toLocaleString()}</p>
                </div>
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Total Value</p>
                  <p className="text-2xl font-bold text-heading">₹{sipResults.futureValue.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full" 
                    style={{ width: `${(sipResults.totalInvestment / sipResults.futureValue) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-secondary">Principal: {Math.round((sipResults.totalInvestment / sipResults.futureValue) * 100)}%</span>
                  <span className="text-primary">Returns: {Math.round((sipResults.estimatedReturns / sipResults.futureValue) * 100)}%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-light p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-heading mb-4">How SIP Calculator Works</h3>
              <p className="text-secondary mb-4">
                The SIP calculator uses the following formula to calculate the future value of your SIP investments:
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="font-medium">M × (((1 + r)^n - 1) / r) × (1 + r)</p>
                <p className="mt-2 text-sm text-secondary">
                  Where:<br />
                  M = Monthly investment amount<br />
                  r = Monthly rate of return (annual rate / 12 / 100)<br />
                  n = Number of months (years × 12)
                </p>
              </div>
              <p className="text-secondary">
                This formula calculates the future value of a series of periodic payments, accounting for compounding returns.
              </p>
            </div>
          </div>
        )}
        
        {/* Lumpsum Calculator */}
        {activeCalculator === 'lumpsum' && (
          <div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center">
                <PieChart size={28} className="text-primary mr-3" />
                <h2 className="text-2xl font-bold text-heading">Lumpsum Calculator</h2>
              </div>
              <p className="text-secondary mt-2 sm:mt-0">Calculate one-time investment returns</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Total Investment (₹)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={lumpsumAmount}
                    onChange={(e) => setLumpsumAmount(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumAmount(10000)}
                    >
                      ₹10k
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumAmount(100000)}
                    >
                      ₹1L
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumAmount(500000)}
                    >
                      ₹5L
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumAmount(1000000)}
                    >
                      ₹10L
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Time Period (years)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={lumpsumYears}
                    onChange={(e) => setLumpsumYears(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumYears(1)}
                    >
                      1 yr
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumYears(3)}
                    >
                      3 yrs
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumYears(5)}
                    >
                      5 yrs
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumYears(10)}
                    >
                      10 yrs
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Expected Return Rate (%)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    className="input-field" 
                    value={lumpsumReturn}
                    onChange={(e) => setLumpsumReturn(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumReturn(8)}
                    >
                      8%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumReturn(10)}
                    >
                      10%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumReturn(12)}
                    >
                      12%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setLumpsumReturn(15)}
                    >
                      15%
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Invested Amount</p>
                  <p className="text-2xl font-bold text-heading">₹{lumpsumResults.totalInvestment.toLocaleString()}</p>
                </div>
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Est. Returns</p>
                  <p className="text-2xl font-bold text-primary">₹{lumpsumResults.estimatedReturns.toLocaleString()}</p>
                </div>
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Total Value</p>
                  <p className="text-2xl font-bold text-heading">₹{lumpsumResults.futureValue.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full" 
                    style={{ width: `${(lumpsumResults.totalInvestment / lumpsumResults.futureValue) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-secondary">Principal: {Math.round((lumpsumResults.totalInvestment / lumpsumResults.futureValue) * 100)}%</span>
                  <span className="text-primary">Returns: {Math.round((lumpsumResults.estimatedReturns / lumpsumResults.futureValue) * 100)}%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-light p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-heading mb-4">How Lumpsum Calculator Works</h3>
              <p className="text-secondary mb-4">
                The Lumpsum calculator uses the compound interest formula to calculate the future value of your one-time investment:
              </p>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="font-medium">A = P × (1 + r)^t</p>
                <p className="mt-2 text-sm text-secondary">
                  Where:<br />
                  A = Final amount<br />
                  P = Principal investment amount<br />
                  r = Rate of interest (in decimal)<br />
                  t = Time period (in years)
                </p>
              </div>
              <p className="text-secondary">
                This formula calculates how your one-time investment grows over time with compound interest.
              </p>
            </div>
          </div>
        )}
        
        {/* SWP Calculator */}
        {activeCalculator === 'swp' && (
          <div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center">
                <Clock size={28} className="text-primary mr-3" />
                <h2 className="text-2xl font-bold text-heading">SWP Calculator</h2>
              </div>
              <p className="text-secondary mt-2 sm:mt-0">Plan your systematic withdrawals</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Initial Investment (₹)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={swpAmount}
                    onChange={(e) => setSwpAmount(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpAmount(100000)}
                    >
                      ₹1L
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpAmount(500000)}
                    >
                      ₹5L
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpAmount(1000000)}
                    >
                      ₹10L
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Monthly Withdrawal (₹)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={swpWithdrawal}
                    onChange={(e) => setSwpWithdrawal(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpWithdrawal(5000)}
                    >
                      ₹5k
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpWithdrawal(10000)}
                    >
                      ₹10k
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpWithdrawal(25000)}
                    >
                      ₹25k
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Time Period (years)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={swpYears}
                    onChange={(e) => setSwpYears(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpYears(5)}
                    >
                      5 yrs
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpYears(10)}
                    >
                      10 yrs
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpYears(15)}
                    >
                      15 yrs
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Expected Return Rate (%)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    className="input-field" 
                    value={swpReturn}
                    onChange={(e) => setSwpReturn(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpReturn(6)}
                    >
                      6%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpReturn(8)}
                    >
                      8%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setSwpReturn(10)}
                    >
                      10%
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Total Withdrawal</p>
                  <p className="text-2xl font-bold text-heading">₹{swpResults.totalWithdrawal.toLocaleString()}</p>
                </div>
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Remaining Amount</p>
                  <p className="text-2xl font-bold text-primary">₹{swpResults.remainingAmount.toLocaleString()}</p>
                </div>
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Withdrawal Period</p>
                  <p className="text-2xl font-bold text-heading">
                    {swpResults.yearsLasted}
                    {swpResults.monthsLasted < swpYears * 12 && " (Fund depleted)"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-light p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-heading mb-4">How SWP Calculator Works</h3>
              <p className="text-secondary mb-4">
                The SWP calculator simulates monthly withdrawals from your investment while accounting for returns on the remaining amount.
              </p>
              <p className="text-secondary">
                For each month, it calculates:<br />
                New Balance = Previous Balance × (1 + Monthly Return Rate) - Monthly Withdrawal
              </p>
            </div>
          </div>
        )}
        
        {/* Brokerage Calculator */}
        {activeCalculator === 'brokerage' && (
          <div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center">
                <DollarSign size={28} className="text-primary mr-3" />
                <h2 className="text-2xl font-bold text-heading">Brokerage Calculator</h2>
              </div>
              <p className="text-secondary mt-2 sm:mt-0">Estimate charges for your trades</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Trade Type</label>
                  <div className="flex rounded-lg overflow-hidden border border-gray-300">
                    <button 
                      className={`flex-1 py-2 text-sm font-medium transition-colors ${
                        tradeType === 'delivery' ? 'bg-primary text-white' : 'bg-white text-secondary'
                      }`}
                      onClick={() => setTradeType('delivery')}
                    >
                      Delivery
                    </button>
                    <button 
                      className={`flex-1 py-2 text-sm font-medium transition-colors ${
                        tradeType === 'intraday' ? 'bg-primary text-white' : 'bg-white text-secondary'
                      }`}
                      onClick={() => setTradeType('intraday')}
                    >
                      Intraday
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Stock Price (₹)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={brokerageAmount}
                    onChange={(e) => setBrokerageAmount(Number(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Quantity</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={brokerageQuantity}
                    onChange={(e) => setBrokerageQuantity(Number(e.target.value) || 0)}
                  />
                </div>
              </div>
              
              <div className="bg-light p-4 rounded-lg mb-6">
                <div className="flex justify-between mb-1">
                  <p className="text-secondary">Total Value</p>
                  <p className="font-medium">₹{brokerageResults.totalValue.toLocaleString()}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-heading mb-4">Charges Breakdown</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <p className="text-secondary">Brokerage</p>
                  <p className="font-medium">₹{brokerageResults.brokerageFee.toLocaleString()}</p>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <p className="text-secondary">STT</p>
                  <p className="font-medium">₹{brokerageResults.stt.toLocaleString()}</p>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <p className="text-secondary">Exchange Charges</p>
                  <p className="font-medium">₹{brokerageResults.exchangeCharges.toLocaleString()}</p>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <p className="text-secondary">SEBI Charges</p>
                  <p className="font-medium">₹{brokerageResults.sebi.toLocaleString()}</p>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <p className="text-secondary">Stamp Duty</p>
                  <p className="font-medium">₹{brokerageResults.stampDuty.toLocaleString()}</p>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <p className="text-secondary">GST</p>
                  <p className="font-medium">₹{brokerageResults.gst.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Total Charges</p>
                  <p className="text-2xl font-bold text-primary">₹{brokerageResults.totalCharges.toLocaleString()}</p>
                </div>
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Net Amount</p>
                  <p className="text-2xl font-bold text-heading">₹{brokerageResults.netAmount.toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-light p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-heading mb-4">Why MoneyNest Has Lower Charges</h3>
              <p className="text-secondary mb-4">
                MoneyNest offers zero brokerage for all equity delivery investments, making it more cost-effective compared to traditional brokers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-heading mb-2">MoneyNest</h4>
                  <p className="text-green-600 font-bold">₹0 Brokerage</p>
                  <p className="text-sm text-secondary mt-2">Only statutory charges apply</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-heading mb-2">Traditional Brokers</h4>
                  <p className="text-red-500 font-bold">0.3-0.5% Brokerage</p>
                  <p className="text-sm text-secondary mt-2">Plus all statutory charges</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Margin Calculator */}
        {activeCalculator === 'margin' && (
          <div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center">
                <CreditCard size={28} className="text-primary mr-3" />
                <h2 className="text-2xl font-bold text-heading">Margin Calculator</h2>
              </div>
              <p className="text-secondary mt-2 sm:mt-0">Estimate margin required for your trades</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Stock Price (₹)</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={stockPrice}
                    onChange={(e) => setStockPrice(Number(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Quantity</label>
                  <input 
                    type="number" 
                    className="input-field" 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value) || 0)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Margin Percentage (%)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    className="input-field" 
                    value={marginPercentage}
                    onChange={(e) => setMarginPercentage(Number(e.target.value) || 0)}
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setMarginPercentage(20)}
                    >
                      20%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setMarginPercentage(40)}
                    >
                      40%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setMarginPercentage(60)}
                    >
                      60%
                    </button>
                    <button 
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                      onClick={() => setMarginPercentage(80)}
                    >
                      80%
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Total Position Value</p>
                  <p className="text-2xl font-bold text-heading">₹{marginResults.totalValue.toLocaleString()}</p>
                </div>
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Required Margin</p>
                  <p className="text-2xl font-bold text-primary">₹{marginResults.requiredMargin.toLocaleString()}</p>
                </div>
                <div className="bg-light p-4 rounded-lg">
                  <p className="text-sm text-secondary mb-1">Leverage</p>
                  <p className="text-2xl font-bold text-heading">{marginResults.leverage}x</p>
                </div>
              </div>
            </div>
            
            <div className="bg-light p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold text-heading mb-4">Understanding Margin Trading</h3>
              <p className="text-secondary mb-4">
                Margin trading allows you to buy securities with funds borrowed from your broker. This calculator helps you understand:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary">
                <li>How much capital you need to deploy for a particular trade</li>
                <li>The leverage you get based on the margin percentage</li>
                <li>The total position value you can control with your margin</li>
              </ul>
            </div>
          </div>
        )}
        
        <div className="bg-light p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-heading mb-6">Why use MoneyNest's Calculators?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Accurate Estimates",
                description: "Get precise calculations based on latest market data and rates",
                icon: "BarChart3"
              },
              {
                title: "Easy to Use",
                description: "Simple interface designed for both beginners and experienced investors",
                icon: "Layout"
              },
              {
                title: "Plan Better",
                description: "Make informed decisions with detailed breakdowns and projections",
                icon: "TrendingUp"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-3">
                  {item.icon === "BarChart3" && <BarChart3 size={24} className="text-primary mr-2" />}
                  {item.icon === "Layout" && <Layout size={24} className="text-primary mr-2" />}
                  {item.icon === "TrendingUp" && <TrendingUp size={24} className="text-primary mr-2" />}
                  <h3 className="text-xl font-semibold text-heading">{item.title}</h3>
                </div>
                <p className="text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorsPage;
 