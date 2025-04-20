import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="pb-10">
      <h2 className="my-10 text-center text-4xl ">My Tech Stack</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
        <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
        <TbBrandNodejs className="text-7xl text-green-500" />
        </div>
        <div className="p-4">
        <RiTailwindCssFill className="text-7xl" />
        </div>
        <div className="p-4">
        <SiMongodb className="text-7xl text-green-600" />
        </div>
        <div className="p-4">
        <RiNextjsFill className="text-7xl text-stone-500" />
        </div>
        
      </div>
    </div>
  );
};

export default Technologies;
