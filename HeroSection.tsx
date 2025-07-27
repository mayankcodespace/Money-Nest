import  { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#f8fafb] to-[#f1f6f7] pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading leading-tight mb-4">
              Invest in Stocks, Mutual Funds & More
            </h1>
            <p className="text-lg text-secondary mb-8">
              Zero commission delivery equity investments, Lowest cost direct mutual funds, and more.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary flex items-center justify-center">
                <span>Get Started</span>
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-500">4.5+ million investors trust MoneyNest</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwc3RvY2slMjBtYXJrZXQlMjBtb25leSUyMG11dHVhbCUyMGZ1bmRzJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc0OTM5Mjk3MXww&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800" 
              alt="Investment Map with Currency" 
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
 