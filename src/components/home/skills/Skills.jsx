import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiDaisyui,
  SiBootstrap,
  SiMongodb,
  SiFigma,
  SiAntdesign,
  SiExpress,
  SiFirebase,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  { icon: <SiReact />, name: "React.js", brandColor: "#61DBFB" },
  { icon: <TbBrandNextjs />, name: "Next.js", brandColor: "#0070F3" },
  { icon: <SiRedux />, name: "React Redux", brandColor: "#764ABC" },
  { icon: <SiBootstrap />, name: "Bootstrap 5", brandColor: "#7952B3" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", brandColor: "#38B2AC" },
  { icon: <SiDaisyui />, name: "Daisy UI", brandColor: "#A161FF" },
  { icon: <SiAntdesign />, name: "Ant Design", brandColor: "#0170FE" },
  { icon: <SiNodedotjs />, name: "Node.js", brandColor: "#339933" },
  { icon: <SiExpress />, name: "Express.js", brandColor: "#61DAFB" },
  { icon: <SiMongodb />, name: "MongoDB", brandColor: "#47A248" },
  { icon: <SiFigma />, name: "Figma", brandColor: "#F24E1E" },
  { icon: <SiFirebase />, name: "Firebase", brandColor: "#FFCA28" },
];

const Skills = () => {
  return (
    <>
      <section className="my-24">
        <div className="container">
          <h2 className="text-4xl text-end font-preahvihear mb-8">
            Technologies and Frameworks
          </h2>

          <div className="grid lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                style={{
                  background:
                    "linear-gradient(163deg, #130428 7.29%, #251043 34.38%, #38126D 56.77%, #261045 84.90%, #190634 100%)",
                  boxShadow: "4px 7px 26px 0px rgba(0, 0, 0, 0.12)",
                }}
                className="rounded-xl flex flex-col justify-center items-center p-8 border-t border-primaryLight2"
              >
                <div style={{ color: skill?.brandColor || "#fff" }} className="text-5xl mb-4">
                  {skill?.icon}
                </div>
                <p className="text-white text-lg font-medium">{skill?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
