import { IoSparklesSharp } from "react-icons/io5";

interface CardProps {
    feature: {
        title: string;
        subtitle: string;
        price: string;
        features: string[];
        isPopular?: boolean;
    };
}

function Pricing2Card({ feature }: CardProps) {
    return (
        <div className={"w-[15vw]"}>
            <div className={`text-white text-[0.729vw] h-[2vw] ${feature.isPopular ? "bg-blue-600" : ""} flex items-center rounded-t-lg justify-center gap-x-[0.5vw]`}>
                {feature.isPopular && (
                    <div className="flex items-center rounded-t-lg justify-center gap-x-[0.5vw]">
                        <p>Most Popular</p>
                        <IoSparklesSharp className="text-[1vw]" />
                    </div>
                )}
            </div>
            <div className={`bg-white shadow-md p-6 ${feature.isPopular ? "rounded-b-lg" : "rounded-lg"}`}>
                <h2 className="text-[1.042vw] font-semibold">{feature.title}</h2>
                <p className="text-[0.729vw] text-gray-500 mb-[0.833vw]">{feature.subtitle}</p>
                <div className="flex items-end mb-[0.833vw]">
                    {feature.price !== "Free" ? <span className="text-[0.729vw]">Rp.</span> : null}
                    <span className="text-[1.042vw] font-bold">{feature.price}</span>
                    {feature.price !== "Free" ? <p className="text-[0.729vw] text-gray-500">/month</p> : null}
                </div>
                <button className="bg-blue-600 text-white font-semibold py-[0.417vw] px-[0.833vw] rounded-lg w-full mb-4 text-[0.833vw]">
                    Get started
                </button>
                <p className="text-[0.833vw] font-bold">{feature.price !== "What you get:" ? `All free ${feature.title}, plus:` : feature.price}</p>
                <ul className="text-sm text-gray-500 space-y-[0.729vw]">
                    {feature.features.map((item, index) => (
                        <li key={index} className="flex items-center text-[0.729vw]">
                            <span className="text-blue-600 mr-2">✔️</span> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Pricing2() {
    const data = [
        {
            title: "Free",
            subtitle: "Best for personal use",
            price: "Free",
            isPopular: false,
            features: [
                "Task Management",
                "Project Planning",
                "Team Collaboration",
                "Notifications and Reminders",
            ],
        },
        {
            title: "Starter",
            subtitle: "Best for personal use",
            price: "500.000",
            isPopular: false,
            features: [
                "Kanban Boards",
                "Gantt Charts",
                "Resource Allocation",
                "Calendar Integration",
                "Progress Tracking",
            ],
        },
        {
            title: "Business",
            subtitle: "Best for personal use",
            price: "5.000.000",
            isPopular: true,
            features: [
                "Customizable Workflows",
                "Reporting and Analytics",
                "Document Management",
                "Agile Methodology Support",
                "Issue Tracking",
            ],
        },
        {
            title: "Enterprise",
            subtitle: "Best for personal use",
            price: "Custom",
            isPopular: false,
            features: [
                "SSO",
                "All integrations",
                "Client Collaboration with 2FA",
                "Advanced Project Planning",
                "Mobile App Integration",
            ],
        },
    ];

    return (
        <div className="w-full p-8">
            {/* Title */}
            <div className="text-center mb-8">
                <p className="text-[1.667vw] font-bold">Streamline your teamwork. Start free</p>
                <p className="text-[0.938vw]">Choose the perfect plan for your business needs</p>
                <div className="flex gap-x-[1vw] justify-end items-center">
                    <p className="text-[0.9vw] font-medium text-gray-900 dark:text-gray-300">Monthly</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="relative w-[2.864vw] h-[1.563vw] bg-gray-200 rounded-full peer peer-focus:ring-[0.208vw] peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.130vw] after:start-[0.10vw] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[1.302vw] after:w-[1.302vw] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        {/* <div className="relative w-[2.95vw] h-[1.74vw] bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
                    </label>
                    <p className="text-[0.9vw] font-medium text-gray-900 dark:text-gray-300">Yearly</p>
                </div>
            </div>
            {/* Plan Cards */}
            <div className="flex justify-center gap-x-[1.042vw]">
                {data.map((plan, index) => (
                    <Pricing2Card key={index} feature={plan} />
                ))}
            </div>
        </div>
    );
}
