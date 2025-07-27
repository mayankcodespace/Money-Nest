import  { ArrowRight, Search, Filter, TrendingUp } from 'lucide-react';
import StockList from '../components/StockList';

const StocksPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#f8fafb] to-[#f1f6f7] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-heading mb-6">Stocks</h1>
            <p className="text-lg text-secondary max-w-3xl mx-auto mb-8">
              Invest in 5000+ stocks listed on NSE & BSE at zero brokerage
            </p>
            <div className="max-w-lg mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search stocks by name or symbol"
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-heading">Top Trending</h2>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-secondary flex items-center hover:bg-gray-200">
                <Filter size={18} className="mr-2" />
                Filter
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-secondary flex items-center hover:bg-gray-200">
                <TrendingUp size={18} className="mr-2" />
                Top Gainers
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {['Nifty 50', 'Sensex', 'IT', 'Banking'].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-heading mb-4">{category}</h3>
                <button className="btn-ghost flex items-center text-sm">
                  <span>View All</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
          
          <StockList />
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-heading mb-4">IPO Investments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <img
                  src="https://images.unsplash.com/photo-1444653389962-8149286c578a?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwY2FsY3VsYXRvciUyMGFwcCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NDkzOTE4NDF8MA&ixlib=rb-4.1.0&fit=fillmax&h=200&w=200"
                  alt="IPO Investment News"
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <p className="text-secondary mb-4">
                    Apply for upcoming IPOs through UPI. Fast and paperless process with instant allotment status.
                  </p>
                  <button className="btn-primary">Explore IPOs</button>
                </div>
              </div>
              
              <div className="bg-light p-4 rounded-lg">
                <p className="font-medium text-heading mb-2">Upcoming IPOs</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-secondary text-sm">ABC Technologies</span>
                    <span className="text-primary text-sm font-medium">Opens: 12 Aug</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary text-sm">XYZ Fintech</span>
                    <span className="text-primary text-sm font-medium">Opens: 18 Aug</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary text-sm">PQR Pharma</span>
                    <span className="text-primary text-sm font-medium">Opens: 25 Aug</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-light p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-heading mb-6">Why invest in Stocks with Groww?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Zero Brokerage",
                description: "Pay 0 brokerage on equity delivery trades and maximize your returns"
              },
              {
                title: "Advanced Charts",
                description: "Make informed decisions with technical indicators and advanced charts"
              },
              {
                title: "Fast Execution",
                description: "Lightning fast trade execution to help you seize market opportunities"
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

export default StocksPage;
 