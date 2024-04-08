import Image from "next/image";

export default function Logo() {
  return (
    <>
      <div className="relative inline-block">
        <Image
          src="/Hexagon1.svg"
          alt="Logo"
          className="dark:invert"
          width={50}
          height={10}
          priority
        />

        <div className="logo absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="letterE">E</span>
          {/* <span className="letterJ">J</span> */}
        </div>
      </div>
    </>
  );
}
