import { FiArrowRight } from "react-icons/fi";
import { FaCheck, FaTimes } from "react-icons/fa";

interface CardProps {
    feature: {
        title: string;
        time: string;
        price: string;
        features: {
            name: string;
            available: boolean;
        }[];
        isPopular?: boolean;
    };
}

function Pricing3Card({ feature }: CardProps) {
    return (
        <div className="w-[21.8125vw] bg-white rounded-lg shadow-md p-8">
            <h2 className="text-[0.9375vw] font-bold text-[#6236FF] mb-2">{feature.title}</h2>
            <div className="text-[#2B2F48]">
                <div className="flex items-baseline space-x-1">
                    {feature.price !== "Free" && <span className="text-[0.875vw]">Rp</span>}
                    <span className="text-[2.8125vw] font-bold">{feature.price}</span>
                </div>
                <p className="text-[0.875vw] text-gray-500">build {feature.time}</p>
            </div>
            <ul className="mt-6 mb-6 space-y-2 text-[0.875vw] text-[#2B2F48]">
                {feature.features.map((item, index) => (
                    <li key={index} className="flex items-center gap-x-[0.3vw]">
                        {item.available ? (
                            <FaCheck className="text-green-600" />

                        ) : (
                            <FaTimes className="text-gray-400" />
                        )}
                        {item.name}
                    </li>
                ))}
            </ul>
            <button className="flex items-center justify-center w-full py-3 bg-[#F3F7FE] text-[#246BFD] font-medium rounded-lg hover:bg-[#E0ECFD] transition duration-300 ease-in-out text-[0.885vw]">
                Start Free Trial
                <FiArrowRight className="ml-2" />
            </button>
            <p className="mt-4 text-center text-[0.8125vw] text-gray-500">No credit card required</p>
        </div>
    );
}

export default function Pricing3() {
    const data = [
        {
            title: "Free",
            time: "monthly",
            price: "Free",
            isPopular: false,
            features: [
                { name: "Commercial License", available: true },
                { name: "100+ HTML UI Elements", available: true },
                { name: "01 Domain Support", available: true },
                { name: "6 Month Premium", available: false },
                { name: "Lifetime Updates", available: false }
            ],
        },
        {
            title: "Starter",
            time: "monthly",
            price: "500.000",
            isPopular: false,
            features: [
                { name: "Commercial License", available: true },
                { name: "100+ HTML UI Elements", available: true },
                { name: "01 Domain Support", available: true },
                { name: "6 Month Premium", available: true },
                { name: "Lifetime Updates", available: false },
            ],
        },
        {
            title: "Business",
            time: "monthly",
            price: "5.000.000",
            isPopular: true,
            features: [
                { name: "Commercial License", available: true },
                { name: "100+ HTML UI Elements", available: true },
                { name: "01 Domain Support", available: true },
                { name: "6 Month Premium", available: true },
                { name: "Lifetime Updates", available: true }
            ],
        },
    ];

    return (
        <div className="w-full p-8 aspect-[1920/1080]">
            {/* Title */}
            <div className="text-center mb-8 flex flex-col justify-center items-center">
                <p className="text-[1.667vw] font-bold">Pricing & Plans</p>
                <p className="text-[0.9895vw] w-[36.8125vw]">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            </div>
            {/* Plan Cards */}
            <div className="flex justify-center gap-x-[1.042vw]">
                {data.map((plan, index) => (
                    <Pricing3Card key={index} feature={plan} />
                ))}
            </div>
        </div>
    );
}
