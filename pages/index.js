import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Head from "next/head";
import { useTheme } from "@/components/ThemeContext";
import SkillDisplay from "@/components/SkillDisplay";
import Cube from "@/components/Cube";

export default function Home() {
  const { state } = useTheme();
  return (
    <div
      className={`
       min-h-screen  ${
         state.userPreferences.theme === "dark"
           ? "dark"
           : state.userPreferences.theme === "pink"
           ? "pink"
           : ""
       }`}
    >
      <Head>
        <title>My Coding Portfolio</title>
        <meta
          name="description"
          content="My coding portfolio build with Next.js, React, and Tailwind CSS"
        />
        {/* icon? */}
        <link />
      </Head>

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-10`}
      >
        <Hero />
        <SkillDisplay />
        <Projects />
        <div className="m-28">
          <Cube />
        </div>
      </main>
    </div>
  );
}
