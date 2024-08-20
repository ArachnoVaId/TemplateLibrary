import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

interface CardContent {
    type: string;
    desc: string;
    fee: number;
    pages: {
        numPages: number;
        desc: string;
    };
    usersPerPage: {
        numUserPages: number;
        userDesc: string;
    };
    features: {
        essential: boolean;
        advanced: boolean;
        development: boolean;
        customizable: boolean;
        secureStorage: boolean;
        emailSupport: boolean;
        customerSupport: boolean;
        analytics: boolean;
        accountManagement: boolean;
        domain : boolean;
    };
}

interface CardTitleProps {
    feature: {
        page: string;
        userPage: string;
        essential: string;
        advanced: string;
        development: string;
        customizable: string;
        secureStorage: string;
        emailSupport: string;
        customerSupport: string;
        analytics: string;
        accountManagement: string;
        domain: string;
    };
}

function CardTitle({ feature }: CardTitleProps) {
    const featureEntries = Object.entries(feature);

    return (
        <div className="w-[18.75vw]">
            {/* content head */}
            <div className="h-[14.21875vw] p-[1vw] flex flex-col items-start justify-center">
                <p className="font-bold text-[1.25vw]">Compare plans</p>
                <p className="text-[rgba(133,139,160,1)] text-[0.78125vw]">
                    Choose your workspace plan according to your organisational plan
                </p>
            </div>
            {/* content head */}

            {/* properties content */}
            <div className="flex flex-col justify-center items-center">
                {featureEntries.map(([key, value]) => (
                    <div
                        className="h-[4.166vw] border border-b-black w-full flex flex-col justify-center items-center"
                        key={key}
                    >
                        <p className="font-bold text-[0.9375vw]">{value}</p>
                    </div>
                ))}
            </div>
            {/* properties content */}
        </div>
    );
}

function CardPricing({ type, desc, fee, pages, usersPerPage, features }: CardContent) {
    return (
        <div className="text-center w-[18.75vw]">
            {/* content head */}
            <div className="h-[14.21875vw] p-[1vw] flex flex-col justify-center items-center">
                <p className="font-bold text-[1.25vw]">{type}</p>
                {fee === 0 ? (
                    <p className="font-bold text-[rgba(66,115,206,1)] text-[2.083vw]">Free</p>
                ) : (
                    <p className="font-bold text-[rgba(66,115,206,1)] text-[0.89vw]">
                        Rp{" "}
                        <span className="font-bold text-[rgba(66,115,206,1)] text-[2.083vw]">
                            {fee.toLocaleString()}
                        </span>
                    </p>
                )}
                <p className="text-[0.729vw]">{desc}</p>
                <button className="bg-[rgba(66,115,206,1)] text-white py-[0.5vw] px-[1vw] rounded-md mt-[1vw] w-[15.83vw] text-[0.833vw]">
                    Choose This Plan
                </button>
            </div>
            {/* content head */}

            {/* pricing content */}
            <div className="flex flex-col justify-center items-center">
                <div className="h-[4.166vw] border border-b-black w-full flex flex-col justify-center items-center">
                    <p className="font-bold text-[0.8375vw]">
                        {pages.numPages === -1 ? "Unlimited" : pages.numPages.toLocaleString()} Pages
                    </p>
                    <p className="text-gray-600 text-[0.9375vw]">{pages.desc}</p>
                </div>
                <div className="h-[4.166vw] border border-b-black w-full flex flex-col justify-center items-center">
                    <p className="font-bold text-[0.9375vw]">
                        {usersPerPage.numUserPages === -1
                            ? "Unlimited"
                            : usersPerPage.numUserPages.toLocaleString()}{" "}
                        Pages
                    </p>
                    <p className="text-gray-600 text-[0.9375vw]">{usersPerPage.userDesc}</p>
                </div>
                {Object.keys(features).map((featureKey) => (
                    <div
                        className="h-[4.166vw] border border-b-black w-full flex justify-center items-center"
                        key={featureKey}
                    >
                        {(features[featureKey as keyof typeof features]) ? (
                            <CiCircleCheck className="text-green-600 text-[2vw]" />
                        ) : (
                            <CiCircleRemove className="text-red-600 text-[2vw]" />
                        )}
                    </div>
                ))}
            </div>
            {/* pricing content */}
        </div>
    );
}

export default function Pricing1() {
    const plans: CardContent[] = [
        {
            type: "Basic",
            desc: "Lifetime",
            fee: 0,
            pages: {
                numPages: 20,
                desc: "",
            },
            usersPerPage: {
                numUserPages: 5,
                userDesc: "",
            },
            features: {
                essential: true,
                advanced: true,
                development: true,
                customizable: false,
                secureStorage: false,
                emailSupport: false,
                customerSupport: false,
                analytics: false,
                accountManagement: true,
                domain: true
            },
        },
        {
            type: "Standard",
            desc: "per-Bulan",
            fee: 500000,
            pages: {
                numPages: 600,
                desc: "Pages Add-ons on Demand",
            },
            usersPerPage: {
                numUserPages: 50,
                userDesc: "",
            },
            features: {
                essential: true,
                advanced: true,
                development: true,
                customizable: true,
                secureStorage: true,
                emailSupport: true,
                customerSupport: false,
                analytics: false,
                accountManagement: true,
                domain: false,
            },
        },
        {
            type: "Advanced",
            desc: "per-Bulan",
            fee: 1000000,
            pages: {
                numPages: -1,
                desc: "Pages Add-ons on Demand",
            },
            usersPerPage: {
                numUserPages: -1,
                userDesc: "Pages Add-ons on Demand",
            },
            features: {
                essential: true,
                advanced: true,
                development: true,
                customizable: true,
                secureStorage: true,
                emailSupport: true,
                customerSupport: true,
                analytics: true,
                accountManagement: true,
                domain: false
            },
        },
    ];

    const featureData: CardTitleProps["feature"] = {
        page: "Basic",
        userPage: "User Page Feature",
        essential: "Essential Feature",
        advanced: "Advanced Feature",
        development: "Development Tools",
        customizable: "Customizable Options",
        secureStorage: "Secure Storage",
        emailSupport: "Email Support",
        customerSupport: "24/7 Customer Support",
        analytics: "Analytics Dashboard",
        accountManagement: "Account Management Tools",
        domain: "Provided Domain "
        

    };

    return (
        <div className="w-full py-[2vw]">
            {/* title */}
            <div className="text-center">
                <p className="text-[1.25vw] font-bold text-[rgba(66,115,206,1)]">PRICING</p>
                <p className="font-bold text-black text-[1.875vw]">
                    We provide great and affordable pricing plans
                </p>
            </div>
            {/* title */}

            {/* content */}
            <div className="flex justify-center mt-[2vw]">
                <CardTitle feature={featureData} />
                {plans.map((plan, index) => (
                    <CardPricing
                        key={index}
                        type={plan.type}
                        desc={plan.desc}
                        fee={plan.fee}
                        pages={plan.pages}
                        usersPerPage={plan.usersPerPage}
                        features={plan.features}
                    />
                ))}
            </div>
            {/* content */}
        </div>
    );
}
