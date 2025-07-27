import  { ArrowUp, ArrowDown } from 'lucide-react';
import { useState } from 'react';

const stocks = [
  { id: 1, name: "HDFC Bank", symbol: "HDFCBANK", price: 1455.75, change: 2.5 },
  { id: 2, name: "Reliance Industries", symbol: "RELIANCE", price: 2367.80, change: 1.2 },
  { id: 3, name: "Infosys", symbol: "INFY", price: 1345.25, change: -0.8 },
  { id: 4, name: "TCS", symbol: "TCS", price: 3211.50, change: 0.5 },
  { id: 5, name: "Bharti Airtel", symbol: "BHARTIARTL", price: 745.90, change: -1.2 },
  { id: 6, name: "ITC", symbol: "ITC", price: 394.25, change: 2.1 },
  { id: 7, name: "Tata Motors", symbol: "TATAMOTORS", price: 425.15, change: 3.4 },
  { id: 8, name: "State Bank of India", symbol: "SBIN", price: 522.75, change: -0.3 }
];

const StockList = () => {
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedStocks = [...stocks].sort((a, b) => {
    if (!sortBy) return 0;
    
    const compareValue = sortBy === 'name' || sortBy === 'symbol'
      ? a[sortBy].localeCompare(b[sortBy])
      : a[sortBy] - b[sortBy];
    
    return sortOrder === 'asc' ? compareValue : -compareValue;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-heading">Top Stocks</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Company
                {sortBy === 'name' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('symbol')}
              >
                Symbol
                {sortBy === 'symbol' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('price')}
              >
                Price
                {sortBy === 'price' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('change')}
              >
                24h Change
                {sortBy === 'change' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedStocks.map((stock) => (
              <tr key={stock.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-heading">{stock.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{stock.symbol}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm font-medium text-heading">₹{stock.price.toFixed(2)}</div>
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
        <button className="btn-ghost text-sm">View All Stocks</button>
      </div>
    </div>
  );
};

export default StockList;
 