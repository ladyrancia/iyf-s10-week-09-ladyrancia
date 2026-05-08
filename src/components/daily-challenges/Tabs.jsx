import { useState } from 'react';

function Tabs({ tabs, defaultIndex = 0, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className={className}>
      <div className="border-b mb-4">
        <div className="flex">
          {tabs.map((tab, index) => (
            <button
              key={tab.label || index}
              onClick={() => setActiveIndex(index)}
              className={`
                px-4 py-2 text-sm font-medium
                ${activeIndex === index 
                  ? 'border-b-2 border-indigo-500 text-indigo-600' 
                  : 'text-gray-500 hover:text-gray-600'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="pt-2">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}

export default Tabs;