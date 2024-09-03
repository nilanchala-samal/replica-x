import { CardLayout, Card } from "./Card";
import { MdStars } from "react-icons/md";
import { FaAtlassian } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

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

      {/* Card separate */}
      <div className="flex items-center justify-center p-4 sm:p-8 mb-20">
        <CardLayout />
      </div>

      {/* cards inside another card */}

      <div className="p-4 md:p-6 lg:p-8 mx-auto bg-white shadow-md rounded-2xl max-w-screen-lg mb-20">
        <div className="text-center mb-6">
          <p className="font-bold text-gray-500 mb-4">PRIVATE AI AND SECURE DATA</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">What about security?</h2>
          <p className="text-gray-600">With AutoRFP.ai, you own your data, it is not used to train AI models and the platform meets the most stringent compliance requirements</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <Card
            logo={<MdStars />}
            title="ISO 27001 Certified"
            description="Meet your security team's requirements with an ISO 27001 certified platform."
          />
          <Card
            logo={<FaAtlassian />}
            title="Private AI With Azure"
            description="Keep your data private with AI that doesn't train on your data, leveraging Microsoft Azure AI."
          />
          <Card
            logo={<FiCheckCircle />}
            title="GDPR Compliant"
            description="Meet global compliance requirements with AutoRFP.ai's global privacy approach."
          />
        </div>
      </div>

    </div>
  );
}

export default HomePage;




