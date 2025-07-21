import React from "react";
import { FaHtml5, FaCss3,} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 />,
    percentage: 62.67,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3/>,
    percentage: 12.21,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <IoLogoJavascript/>,
    percentage: 12.93,
  }
];

export default function Habilidades() {
  return (
    <section
      id="habilidades"
      className="
        bg-[rgb(65,90,119)]
        p-8
        mx-auto max-w-4xl
        rounded-xl
        mt-8
        pb-24
      "
    >
      <h2 className="text-3xl font-serif text-[rgb(224,225,221)] mb-6 text-center">
        Habilidades
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map(({ id, name, icon, percentage }) => (
          <div
            key={id}
            className="
              flex flex-col items-center
              bg-[rgb(26,40,56)]
              p-4 rounded-lg
            "
          >
            <h3
              className="
                flex items-center       
                space-x-2               
              text-[rgb(224,225,221)] 
                font-medium 
                mb-2
                "
            >
              {icon}
              <span>{name}</span>
            </h3>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-[rgb(65,90,119)] h-3 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <span className="mt-1 text-sm text-[rgb(224,225,221)]">
              {percentage}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
