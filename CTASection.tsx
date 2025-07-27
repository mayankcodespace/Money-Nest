import  { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#00d09c15] to-[#00d09c05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold text-heading mb-6">Ready to start your investment journey?</h2>
            <p className="text-lg text-secondary mb-8">
              Join 4.5+ million investors & traders on Groww and start investing in just 10 minutes.
            </p>
            
            <div className="space-y-4 mb-8">
              {['Free Demat & Trading Account', 'Zero Commission on Equity Delivery', 'Quick Account Opening'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-primary mr-3" />
                  <span className="text-secondary">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="btn-primary flex items-center justify-center">
              <span>Sign Up Now</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwZGFzaGJvYXJkJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlfGVufDB8fHx8MTc0OTM5MTI0MHww&ixlib=rb-4.1.0&fit=fillmax&h=500&w=600" 
              alt="Groww Mobile App" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
 