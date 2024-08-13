import { IoSparklesSharp } from "react-icons/io5";

interface CardProps {
    feature: {
        title: string;
        subtitle: string;
        price: string;
        features: string[];
    };
}

function Pricing2Card({ feature }: CardProps) {
    return (
        <div className=" w-[15vw]">
            <div className="text-white text-[0.729vw] bg-blue-600 flex items-center p-[0.4vw] rounded-t-lg justify-center gap-x-[0.5vw]">
                <p>Most Popular</p>
                <IoSparklesSharp className="text-[1vw]" />
            </div>
            <div className={`bg-white shadow-md p-6 border-blue-600 border-2 rounded-b-lg`}>
                <h2 className="text-[1.042vw] font-semibold">{feature.title}</h2>
                <p className="text-[0.729vw] text-gray-500 mb-[0.833vw]">{feature.subtitle}</p>
                <div className="flex items-end mb-[0.833vw]">
                    <span className="text-[0.729vw]">Rp.</span><span className="text-[1.042vw] font-bold">{feature.price}</span>
                    <p className="text-[0.729vw] text-gray-500">/month</p>
                </div>
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full mb-4 text-[0.833vw]">
                    Get started
                </button>
                <ul className="text-sm text-gray-500 space-y-2">
                    {feature.features.map((item, index) => (
                        <li key={index} className="flex items-center text-[0.729vw]">
                            <span className="text-blue-600 mr-2">✔️</span> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default function Pricing2() {
    const businessPlan = {
        title: "Business",
        subtitle: "Best for personal use",
        price: "5.000.000",
        features: [
            "Customizable Workflows",
            "Reporting and Analytics",
            "Document Management",
            "Agile Methodology Support",
            "Issue Tracking",
        ]
    };
    return (
        <div className="w-full aspect-[1920/1080] p-8">
            {/* title */}
            <div className="text-center">
                <p className="text-[1.667vw] font-bold">Streamline your teamwork. Start free</p>
                <p className="text-[0.938vw]">Choose the perfect plan for your business needs</p>
            </div>
            {/* title */}
            <div>
                <Pricing2Card feature={businessPlan} />
            </div>
        </div>
    )
}