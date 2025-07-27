import  { ArrowRight, Search, Filter, TrendingUp } from 'lucide-react';
import MutualFundList from '../components/MutualFundList';

const MutualFundsPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#f8fafb] to-[#f1f6f7] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-heading mb-6">Mutual Funds</h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto mb-8">
              Invest in 4500+ direct mutual funds at 0% commission
            </p>
            <div className="max-w-lg mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search mutual funds by name or AMC"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-heading">Top Categories</h2>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-secondary flex items-center hover:bg-gray-200">
                <Filter size={18} className="mr-2" />
                Filter
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-secondary flex items-center hover:bg-gray-200">
                <TrendingUp size={18} className="mr-2" />
                Top Performers
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              'High Return', 
              'Tax Saving', 
              'Low Risk', 
              'SIP Investments'
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-heading mb-4">{category}</h3>
                <button className="btn-ghost flex items-center text-sm">
                  <span>View All</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
          
          <MutualFundList />
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-heading mb-4">Start a SIP with just ₹500</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <img
                  src="https://images.unsplash.com/photo-1521931961826-fe48677230a5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwY2FsY3VsYXRvciUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NDkzOTE4NDF8MA&ixlib=rb-4.1.0&fit=fillmax&h=200&w=200"
                  alt="SIP Investment App Interface"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <p className="text-secondary mb-4">
                    Start your investment journey with small SIPs and build wealth over time.
                  </p>
                  <button className="btn-primary">Start SIP Now</button>
                </div>
              </div>
              
              <div className="bg-light p-4 rounded-lg">
                <p className="font-medium text-heading mb-2">SIP Calculator</p>
                <p className="text-sm text-secondary mb-4">
                  Monthly Investment: ₹500 for 10 years
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-secondary">Returns at 12% p.a.</p>
                    <p className="text-lg font-semibold text-primary">₹1,16,731</p>
                  </div>
                  <a href="/calculators" className="btn-ghost text-sm flex items-center">
                    <span>Calculate</span>
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-light p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-heading mb-6">Why invest in Mutual Funds with Groww?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Zero Commission",
                description: "Invest in direct mutual funds with zero commission charges"
              },
              {
                title: "Regular SIPs",
                description: "Set up automated SIPs with just a few clicks and never miss an investment"
              },
              {
                title: "Expert Recommendations",
                description: "Get research-backed fund recommendations tailored for your goals"
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

export default MutualFundsPage;
 