import { MacbookScroll } from "./ui/macbook-scroll";
import aboutImage from "../assets/heroPic.png";

export default function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F]">
      <MacbookScroll
        title={<span></span>}
        src={aboutImage}
        showGradient={false}
      />
    </div>
  );
}
