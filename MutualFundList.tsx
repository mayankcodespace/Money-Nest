import  { Star } from 'lucide-react';
import { useState } from 'react';

const mutualFunds = [
  { id: 1, name: "ICICI Prudential Technology Fund", category: "Sectoral", returns: 15.2, rating: 5 },
  { id: 2, name: "Axis Bluechip Fund", category: "Large Cap", returns: 12.8, rating: 4 },
  { id: 3, name: "Mirae Asset Emerging Bluechip Fund", category: "Large & Mid Cap", returns: 18.5, rating: 5 },
  { id: 4, name: "SBI Small Cap Fund", category: "Small Cap", returns: 19.7, rating: 4 },
  { id: 5, name: "Parag Parikh Flexi Cap Fund", category: "Flexi Cap", returns: 16.3, rating: 5 },
  { id: 6, name: "HDFC Mid-Cap Opportunities Fund", category: "Mid Cap", returns: 14.9, rating: 4 }
];

const MutualFundList = () => {
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

  const sortedFunds = [...mutualFunds].sort((a, b) => {
    if (!sortBy) return 0;
    
    const compareValue = sortBy === 'name' || sortBy === 'category'
      ? a[sortBy].localeCompare(b[sortBy])
      : a[sortBy] - b[sortBy];
    
    return sortOrder === 'asc' ? compareValue : -compareValue;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-heading">Top Mutual Funds</h3>
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
                Fund Name
                {sortBy === 'name' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('category')}
              >
                Category
                {sortBy === 'category' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('returns')}
              >
                3Y Returns
                {sortBy === 'returns' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('rating')}
              >
                Rating
                {sortBy === 'rating' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedFunds.map((fund) => (
              <tr key={fund.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-heading">{fund.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{fund.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm font-medium text-green-600">{fund.returns}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex items-center justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < fund.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-gray-200 text-center">
        <button className="btn-ghost text-sm">View All Mutual Funds</button>
      </div>
    </div>
  );
};

export default MutualFundList;
 