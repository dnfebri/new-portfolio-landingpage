import { WORK_PROJECT } from "@/constant/main";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main
      className={`${inter.className} min-h-screen relative dark:bg-AAprimary mx-auto w-full max-w-8xl`}
    >
      <Head>
        <title>Dwi Nofebri - Project</title>
      </Head>
      <div className="bg-gray-300 dark:bg-AAtertiary flex items-center justify-between px-8 py-6 dark:text-slate-200">
        <Link href={"https://dnfebri-profile.vercel.app/"} target="_blank">
          <h1 className="text-2xl font-extrabold">
            Dwi No
            <span className="text-blue-800 dark:text-AAsecondary">febri</span>
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <p>Drack Mode</p>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-500 w-16 cursor-pointer rounded-3xl toggler dark:bg-green-500"
          >
            <div
              className={`bg-white w-8 h-8 scale-75 rounded-3xl transition-transform dark:bg-black ${
                darkMode && "translate-x-8"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="px-4 pt-4 pb-28 flex flex-wrap gap-y-8 gap-x-2 justify-evenly">
        {WORK_PROJECT.map((row, idx) => (
          <Tilt
            key={idx}
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <a
              href={row.linkApp}
              className="block max-w-sm relative overflow-hidden bg-white border border-blue-800 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              target="_blank"
            >
              <img
                src={row.image}
                alt="Projek Dwi Nofebri"
                className="w-full h-full object-cover object-center"
              />
            </a>
          </Tilt>
        ))}
      </div>
      <div className="bg-gray-300 absolute bottom-0 w-full dark:bg-AAtertiary flex items-center justify-center px-8 py-6 dark:text-slate-200">
        <p>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a href="https://github.com/dnfebri" target="_blank">
            <span className="font-bold">Dwi NoFebri</span>
          </a>
        </p>
      </div>
    </main>
  );
}
