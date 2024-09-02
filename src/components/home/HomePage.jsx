import CardLayout from "./Card";

function HomePage() {
  return (
    <div className="flex-col justify-center">
      <div className="flex justify-center mt-16">
        <div className="w-full max-w-2xl p-8">
          <div className="mb-4 text-center">
            <p className="text-xl text-gray-600 font-medium mb-3">RFP Software, REIMAGINED with AI</p>
            <p className="text-4xl text-gray-700 font-bold mb-6">Your Co-pilot for Response</p>
            <p className="text-xl text-gray-500 mb-9">Win more, faster with the Leading RFP AI</p>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="name@gmail.com"
              className="flex-grow px-4 py-2 mr-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Book Demo
            </button>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-center mt-24">
        <div className="p-6 rounded-lg w-full max-w-2xl text-center">
          <h2 className="text-lg text-gray-500 font-bold mb-4">THE PROBLEM WITH LEGACY RPF SOFTWARE</h2>
          <p className="text-5xl font-bold">Responses overwhelming your team?</p>
        </div>
      </div>

      {/* Card */}
      <div className="flex items-center justify-center p-4 sm:p-8">
        <CardLayout />
      </div>
    </div>
  );
}

export default HomePage;




