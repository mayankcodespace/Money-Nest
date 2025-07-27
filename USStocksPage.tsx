import  { ArrowRight, Search, Globe, Filter } from 'lucide-react';
import USStockList from '../components/USStockList';

const USStocksPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#f8fafb] to-[#f1f6f7] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-heading mb-6">US Stocks</h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto mb-8">
              Invest in Apple, Google, Tesla and 4000+ US stocks
            </p>
            <div className="max-w-lg mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search US stocks by name or symbol"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-heading">Popular US Stocks</h2>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-secondary flex items-center hover:bg-gray-200">
                <Filter size={18} className="mr-2" />
                Filter
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-secondary flex items-center hover:bg-gray-200">
                <Globe size={18} className="mr-2" />
                All Markets
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {['FAANG', 'Technology', 'Electric Vehicles', 'Healthcare'].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-heading mb-4">{category}</h3>
                <button className="btn-ghost flex items-center text-sm">
                  <span>View All</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
          
          <USStockList />
        </div>
        
        <div className="bg-light p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-heading mb-6">Why invest in US Stocks with Groww?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Zero Commission",
                description: "Pay 0 commission on US stock investments"
              },
              {
                title: "Fractional Investing",
                description: "Invest in fractional shares with as low as $1"
              },
              {
                title: "Diversify Globally",
                description: "Reduce risk by investing in global markets"
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

export default USStocksPage;
 