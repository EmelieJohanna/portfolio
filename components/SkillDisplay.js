import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function SkillItem({ skillName, iconSrc }) {
  return (
    <div className="flex flex-col mt-4 text-3xl mx-4 items-center  transition-transform duration-200 hover:scale-125 border border-shadow w-20 rounded-lg p-2 shadow-inner shadow-shadow hover:shadow-xl">
      {iconSrc}
      <span className="mt-4 text-sm">{skillName}</span>
    </div>
  );
}

export default function SkillDisplay() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-accent" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-accent" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-accent" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-accent" /> },
    { name: "React", icon: <FaReact className="text-accent" /> },
    { name: "Nextjs", icon: <TbBrandNextjs className="text-accent" /> },
    { name: "Figma", icon: <FaFigma className="text-accent" /> },
  ];

  return (
    <>
      {/* <h2 className="underline">Technical Skills</h2> */}
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            skillName={skill.name}
            iconSrc={skill.icon}
          />
        ))}
      </div>
    </>
  );
}
