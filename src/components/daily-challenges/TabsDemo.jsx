import Tabs from './Tabs';

function TabsDemo() {
  const tabs = [
    {
      label: 'Tab 1',
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">First Tab Content</h3>
          <p className="text-gray-600">This is the content of the first tab.</p>
        </div>
      )
    },
    {
      label: 'Tab 2',
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Second Tab Content</h3>
          <p className="text-gray-600">This is the content of the second tab.</p>
        </div>
      )
    },
    {
      label: 'Tab 3',
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Third Tab Content</h3>
          <p className="text-gray-600">This is the content of the third tab.</p>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Tabs Demo Component</h2>
      <Tabs tabs={tabs} className="mb-6" />
    </div>
  );
}

export default TabsDemo;