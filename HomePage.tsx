import  { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import { Calculator } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      
      {/* Calculator Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Investment Calculators</h2>
            <p className="text-lg text-secondary max-w-3xl mx-auto">
              Use our smart calculators to plan your investments better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/calculators" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                  <Calculator size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-heading">SIP Calculator</h3>
              </div>
              <p className="text-secondary mb-4">Estimate returns on a SIP investment</p>
              <div className="flex items-center text-primary font-medium">
                Calculate now
              </div>
            </Link>
            
            <Link to="/calculators" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                  <Calculator size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-heading">Lumpsum Calculator</h3>
              </div>
              <p className="text-secondary mb-4">Calculate returns on one-time investments</p>
              <div className="flex items-center text-primary font-medium">
                Calculate now
              </div>
            </Link>
            
            <Link to="/calculators" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                  <Calculator size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-heading">SWP Calculator</h3>
              </div>
              <p className="text-secondary mb-4">Plan your systematic withdrawal strategy</p>
              <div className="flex items-center text-primary font-medium">
                Calculate now
              </div>
            </Link>
            
            <Link to="/calculators" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-lg mr-4">
                  <Calculator size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-heading">Brokerage Calculator</h3>
              </div>
              <p className="text-secondary mb-4">Estimate charges for your trades/investments</p>
              <div className="flex items-center text-primary font-medium">
                Calculate now
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
 