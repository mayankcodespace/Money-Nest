import  { useState } from 'react';

const fixedDeposits = [
  { id: 1, bank: "ICICI Bank", interestRate: 7.0, minAmount: 10000, tenure: "1-3 years" },
  { id: 2, bank: "HDFC Bank", interestRate: 6.85, minAmount: 5000, tenure: "1-5 years" },
  { id: 3, bank: "SBI", interestRate: 6.75, minAmount: 1000, tenure: "1-10 years" },
  { id: 4, bank: "Axis Bank", interestRate: 7.10, minAmount: 5000, tenure: "1-5 years" },
  { id: 5, bank: "Kotak Mahindra Bank", interestRate: 7.25, minAmount: 5000, tenure: "1-3 years" }
];

const FDList = () => {
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

  const sortedFDs = [...fixedDeposits].sort((a, b) => {
    if (!sortBy) return 0;
    
    const compareValue = sortBy === 'bank' || sortBy === 'tenure'
      ? a[sortBy].localeCompare(b[sortBy])
      : a[sortBy] - b[sortBy];
    
    return sortOrder === 'asc' ? compareValue : -compareValue;
  });

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-heading">Fixed Deposit Rates</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('bank')}
              >
                Bank
                {sortBy === 'bank' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('interestRate')}
              >
                Interest Rate
                {sortBy === 'interestRate' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('minAmount')}
              >
                Min Amount
                {sortBy === 'minAmount' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('tenure')}
              >
                Tenure
                {sortBy === 'tenure' && (
                  <span className="ml-1">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedFDs.map((fd) => (
              <tr key={fd.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-heading">{fd.bank}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm font-medium text-primary">{fd.interestRate}%</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm text-gray-500">₹{fd.minAmount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm text-gray-500">{fd.tenure}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-gray-200 text-center">
        <button className="btn-ghost text-sm">View All Fixed Deposits</button>
      </div>
    </div>
  );
};

export default FDList;
 