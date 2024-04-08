import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeBtn from "./ThemeBtn";
import Logo from "./Logo";

export default function () {
  console.log("Rendering Header...");
  return (
    <div className="flex bg-transparent justify-between p-4">
      <nav
        className="flex p-2 space-x-4 items-center 
      "
      >
        <Logo />
        <Link href="#" className="hover:text-accent hover">
          Home
        </Link>
        <Link href="#" className="hover:text-accent hover">
          Projects
        </Link>
        <Link href="#" className="hover:text-accent hover">
          Skills
        </Link>
        <Link href="#" className="hover:text-accent hover">
          About Me
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        <Link href="https://github.com/EmelieJohanna">
          <FaGithub />
        </Link>
        <Link href="https://github.com/EmelieJohanna">
          <FaLinkedin />
        </Link>
        <ThemeBtn />
      </div>
    </div>
  );
}

{
  /* Hexagon */
}
{
  /* <svg
          width="70"
          // height="100"
          viewBox="0 0 120 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:invert"
        >
          <path
            d="M60 0L120 30V90L60 120L0 90V30L60 0Z"
            fill="none"
            className="border-2 border-accent"
            stroke="black"
            strokeWidth="2"
          />
        </svg> */
}
