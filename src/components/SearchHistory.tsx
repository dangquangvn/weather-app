import React from "react";

interface SearchHistoryProps {
  history: {
    location: string;
    temperature: number;
    date: string;
  }[];
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ history }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Search History</h2>
      <ul className="space-y-2">
        {history.map((item, index) => (
          <li
            key={index}
            className="flex justify-between bg-white p-4 rounded-md shadow-md"
          >
            <span>{item.location}</span>
            <span>{item.temperature}°</span>
            <span className="text-sm text-gray-500">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
