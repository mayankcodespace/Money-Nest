import  { DollarSign, FileText, Shield, BarChart3, Layout, Award } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-3xl font-bold text-heading mb-4">The MoneyNest Advantage</h2>
          <p className="text-lg text-secondary max-w-2xl lg:mx-auto">
            We're on a mission to make investing simple, accessible and transparent for millions of Indians
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-light p-6 rounded-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 mb-4">
              <DollarSign size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-heading mb-3">Zero Commission</h3>
            <p className="text-secondary">
              Invest in direct mutual funds with zero commission and maximize your returns.
            </p>
          </div>
          
          <div className="bg-light p-6 rounded-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 mb-4">
              <FileText size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-heading mb-3">Paperless Investing</h3>
            <p className="text-secondary">
              Open an account within minutes with completely paperless e-KYC process.
            </p>
          </div>
          
          <div className="bg-light p-6 rounded-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 mb-4">
              <Shield size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-heading mb-3">High Security</h3>
            <p className="text-secondary">
              Your investments are secured with 128-bit encryption and multiple security layers.
            </p>
          </div>
          
          <div className="bg-light p-6 rounded-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 mb-4">
              <BarChart3 size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-heading mb-3">Advanced Charts</h3>
            <p className="text-secondary">
              Track your investments with detailed charts and performance metrics.
            </p>
          </div>
          
          <div className="bg-light p-6 rounded-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 mb-4">
              <Layout size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-heading mb-3">Seamless Experience</h3>
            <p className="text-secondary">
              Intuitive interface designed to make investing easy for everyone.
            </p>
          </div>
          
          <div className="bg-light p-6 rounded-xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary bg-opacity-10 mb-4">
              <Award size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-heading mb-3">Expert Insights</h3>
            <p className="text-secondary">
              Get research-backed recommendations and market analysis from experts.
            </p>
          </div>
        </div>
 
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary bg-opacity-10 rounded-full text-primary text-sm font-medium">
            <span>Trusted by 4.5+ Million Indians</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
 