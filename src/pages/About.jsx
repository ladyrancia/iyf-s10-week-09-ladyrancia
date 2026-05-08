function About() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">About CommunityHub</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        CommunityHub is a platform designed to bring people together, share ideas, and foster meaningful connections. 
        Our mission is to create a safe and inclusive space where everyone can express themselves and engage with others.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Our Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Inclusivity: We welcome everyone regardless of background.</li>
          <li>Respect: We treat each other with kindness and consideration.</li>
          <li>Innovation: We embrace new ideas and technologies.</li>
          <li>Integrity: We act with honesty and transparency.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;