import { RiReactjsLine as ReactJs } from "react-icons/ri";
import { FaNodeJs as NodeJs } from "react-icons/fa";
import { BiLogoPostgresql as PostgreSQL } from "react-icons/bi";
import { SiMysql as MySQL } from "react-icons/si";
import { SiMobxstatetree as MST } from "react-icons/si";
import { IoLogoFirebase as Firebase } from "react-icons/io5";
import { SiCircleci as CircleCI } from "react-icons/si";
import { SiGrafana as Grafana } from "react-icons/si";
import { SiGraphite as Graphite } from "react-icons/si";
import { SiTypescript as TS } from "react-icons/si";
import { FaPython as Python } from "react-icons/fa";
import { FaHtml5 as HTML } from "react-icons/fa";

const logoStyles = "text-7xl text-cyan-400";
const logoContainerStyles = "rounded-2xl border-4 border-neutral-800 p-4";

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className={logoContainerStyles}>
          <HTML className="text-7xl text-red-500" />
        </div>
        <div className={logoContainerStyles}>
          <ReactJs className="text-7xl text-cyan-400" />
        </div>
        <div className={logoContainerStyles}>
          <MST className="text-7xl text-orange-400" />
        </div>
        <div className={logoContainerStyles}>
          <NodeJs className="text-7xl text-green-500" />
        </div>
        <div className={logoContainerStyles}>
          <TS className="text-7xl text-blue-600" />
        </div>
        <div className={logoContainerStyles}>
          <Python className={logoStyles} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
        <div className={logoContainerStyles}>
          <PostgreSQL className="text-7xl text-sky-700" />
        </div>
        <div className={logoContainerStyles}>
          <MySQL className={logoStyles} />
        </div>
        <div className={logoContainerStyles}>
          <Firebase className="text-7xl text-yellow-500" />
        </div>
        <div className={logoContainerStyles}>
          <CircleCI className="text-7xl text-white" />
        </div>
        <div className={logoContainerStyles}>
          <Grafana className={logoStyles} />
        </div>
        <div className={logoContainerStyles}>
          <Graphite className={logoStyles} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
