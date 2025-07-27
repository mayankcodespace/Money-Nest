import  { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: "stocks",
    title: "Stocks",
    description: "Invest in 5000+ stocks listed on NSE & BSE",
    image: "https://images.unsplash.com/photo-1593672715438-d88a70629abe?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwc3RvY2slMjBtYXJrZXQlMjBtb25leSUyMG11dHVhbCUyMGZ1bmRzJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc0OTM5Mjk3MXww&ixlib=rb-4.1.0&fit=fillmax&h=100&w=100",
    path: "/stocks"
  },
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    description: "4500+ direct mutual funds with zero commission",
    image: "https://images.unsplash.com/photo-1515180711443-f8685c6d6a74?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw2fHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwc3RvY2slMjBtYXJrZXQlMjBtb25leSUyMG11dHVhbCUyMGZ1bmRzJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc0OTM5Mjk3MXww&ixlib=rb-4.1.0&fit=fillmax&h=100&w=100",
    path: "/mutual-funds"
  },
  {
    id: "fd",
    title: "Fixed Deposits",
    description: "High interest rates up to 9% with top banks",
    image: "https://images.unsplash.com/photo-1518183214770-9cffbec72538?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwc3RvY2slMjBtYXJrZXQlMjBtb25leSUyMG11dHVhbCUyMGZ1bmRzJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc0OTM5Mjk3MXww&ixlib=rb-4.1.0&fit=fillmax&h=100&w=100",
    path: "/fd"
  },
  {
    id: "us-stocks",
    title: "US Stocks",
    description: "Invest in Apple, Google, Netflix and 4000+ US stocks",
    image: "https://images.unsplash.com/photo-1500496733680-167c3db69389?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxmaW5hbmNpYWwlMjBpbnZlc3RtZW50JTIwc3RvY2slMjBtYXJrZXQlMjBtb25leSUyMG11dHVhbCUyMGZ1bmRzJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc0OTM5Mjk3MXww&ixlib=rb-4.1.0&fit=fillmax&h=100&w=100",
    path: "/us-stocks"
  }
];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading mb-4">Start Your Investment Journey</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Choose from a wide range of investment options tailored for every investor
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={product.path} key={product.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center h-16 mb-4">
                <img src={product.image} alt={product.title} className="h-16 w-16 object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-semibold text-heading mb-2 text-center">{product.title}</h3>
              <p className="text-secondary text-center mb-4">{product.description}</p>
              <div className="flex justify-center">
                <button className="btn-ghost flex items-center text-sm">
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
 