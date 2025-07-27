import  { Star } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative h-8 w-8">
        {/* Nest (brown) */}
        <div className="absolute inset-0 bg-[#8B623E] rounded-full">
          <div className="absolute bottom-1/2 left-1/2 w-6 h-6 bg-[#5A3D2F] rounded-t-full transform -translate-x-1/2 translate-y-1"></div>
        </div>
        {/* Coins (yellow) */}
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#FFC107] rounded-full"></div>
        <div className="absolute bottom-2 left-1 w-3 h-3 bg-[#FFD22A] rounded-full"></div>
        <div className="absolute top-2 left-1/2 w-2.5 h-2.5 bg-[#FFE03B] rounded-full transform -translate-x-1/2"></div>
      </div>
      <span className="ml-2 text-xl font-bold text-heading font-nunito">MoneyNest</span>
    </div>
  );
};

export default Logo;
 