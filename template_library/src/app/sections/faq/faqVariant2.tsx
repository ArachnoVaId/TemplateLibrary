"use client"
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

interface FaqDropdownProps {
    question: string;
    answer: string;
}

function FaqDropdownCard({ question, answer }: FaqDropdownProps) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="w-[66.667vw] bg-[rgba(245,245,245,1)] p-[1vw] rounded-lg m-[0.8vw] shadow-md" onClick={() => setIsActive(!isActive)}>
            <div className={`font-bold text-[1.042vw] flex items-center justify-between ${isActive ? "mb-[1vw]" : "my-[0.5vw]"}`}>
                <p className="text-[1.25vw]">{question}</p>
                {isActive ? <FaMinus className="text-[0.9vw]" /> : <FaChevronDown className="text-[0.9vw] text-blue-700" />}
            </div>
            <p className={`h-[6.25vw] text-[0.828vw] text-[rgba(116,116,116,1)] ${isActive ? "flex" : "hidden"}`}>
                {answer}
            </p>
        </div>
    );
}

export default function Faq2() {
    const data = [
        {
            question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
            ans: "Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nisl enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu tellus neque est feugiat."

        },
        {
            question: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
            ans: "Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nisl enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu tellus neque est feugiat."

        },
        {
            question: "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
            ans: "Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nisl enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu tellus neque est feugiat."

        },
        {
            question: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
            ans: "Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nisl enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu tellus neque est feugiat."

        },
        {
            question: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
            ans: "Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nisl enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu tellus neque est feugiat."

        },
    ]

    return (
        <section className="w-full aspect-[1920/1080] p-8 flex flex-col items-center bg-gray-100 text-gray-800 relative ">
            {/* title */}
            <h1 className="text-[2.915vw] font-bold text-blue-700">Frequently asked questions</h1>
            <p className="mb-[1vw] text-[rgba(71,85,105,1)] text-[1.042vw] w-[46.875vw] text-center">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
            {/* title */}
            
            {/* content */}
            <div className="my-[1vw]">
                {data.map((d, index) => (
                    <FaqDropdownCard key={index} question={d.question} answer={d.ans} />
                ))}
            </div>
            {/* content */}

        </section>
    )
}