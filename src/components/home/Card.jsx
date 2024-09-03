import PropTypes from 'prop-types';
import { PiClockClockwiseFill } from "react-icons/pi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaHeartPulse } from "react-icons/fa6";

function Card({ logo, title, description }) {
    return (
        <div className="bg-white p-7 rounded-xl shadow-xl shadow-blue-200 flex flex-col w-96 max-w-xs md:max-w-sm">
            <div className="text-4xl mb-4">{logo}</div>
            <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{description}</p>
        </div>
    );
}

Card.propTypes = {
    logo: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

function CardLayout() {
    return (
        <div className="flex flex-wrap gap-7 p-2 justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
                <Card
                    logo={<PiClockClockwiseFill />}
                    title="Save 60% of Your Time"
                    description="Automate repetitive requirements and have more time than the competition."
                />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
                <Card
                    logo={<HiMiniArrowTrendingUp />}
                    title="Win 10% More Deals"
                    description="Increased win rates by improving yourresponse quality with the power of AI."
                />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center">
                <Card
                    logo={<FaHeartPulse />}
                    title="Reduce Stress"
                    description="Proactively Manage your RFP process end-to-end in the easiest to use system."
                />
            </div>
        </div>
    );
}

export {CardLayout, Card};