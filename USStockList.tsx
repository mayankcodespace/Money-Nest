import  { ArrowUp, ArrowDown } from 'lucide-react';

const usStocks = [
  { id: 1, name: "Apple Inc.", symbol: "AAPL", price: 148.32, change: 1.2 },
  { id: 2, name: "Microsoft Corporation", symbol: "MSFT", price: 245.67, change: 0.8 },
  { id: 3, name: "Tesla, Inc.", symbol: "TSLA", price: 687.45, change: -2.3 },
  { id: 4, name: "Amazon.com, Inc.", symbol: "AMZN", price: 121.35, change: 0.5 },
  { id: 5, name: "Alphabet Inc.", symbol: "GOOGL", price: 124.67, change: -0.7 },
  { id: 6, name: "Meta Platforms, Inc.", symbol: "META", price: 291.32, change: 2.1 }
];

const USStockList = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-heading">US Stocks</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Symbol</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {usStocks.map((stock) => (
              <tr key={stock.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-heading">{stock.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{stock.symbol}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm font-medium text-heading">${stock.price.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className={`text-sm font-medium flex items-center justify-end ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.change >= 0 ? <ArrowUp size={16} className="mr-1" /> : <ArrowDown size={16} className="mr-1" />}
                    {Math.abs(stock.change)}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-gray-200 text-center">
        <button className="btn-ghost text-sm">View All US Stocks</button>
      </div>
    </div>
  );
};

export default USStockList;
 