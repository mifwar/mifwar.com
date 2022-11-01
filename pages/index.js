import Head from "next/head";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import Image from "next/image";
import profile from "../public/MiftahulAnwarCropped.jpg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function changeDarkMode(status) {
    setDarkMode(status);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Miftahul Anwar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="flex items-center max-w-3xl mx-auto">
            <div className="ml-auto">
              <a className="text-sm rounded-md py-2 px-7 hover:bg-gray-200 ease-in duration-150 dark:text-white dark:hover:bg-gray-700">
                Home
              </a>
              <a className="text-sm rounded-md py-2 px-7 hover:bg-gray-200 ease-in duration-150 dark:text-white dark:hover:bg-gray-700">
                About
              </a>
              <a className="text-sm rounded-md py-2 px-7 hover:bg-gray-200 ease-in duration-150 dark:text-white dark:hover:bg-gray-700">
                Projects
              </a>
              <a className="text-sm rounded-md py-2 px-7 hover:bg-gray-200 ease-in duration-150 dark:text-white dark:hover:bg-gray-700">
                Achievements
              </a>
            </div>
            <div className="text-sm px-2 py-2 ml-auto mr-10 my-5 rounded-md hover:bg-gray-200 ease-in duration-150 dark:hover:bg-gray-700">
              {darkMode ? (
                <BsSunFill
                  className="text-white"
                  onClick={() => changeDarkMode(!darkMode)}
                />
              ) : (
                <BsFillMoonFill onClick={() => changeDarkMode(!darkMode)} />
              )}
            </div>
          </nav>
          {/* <div className="mx-auto rounded-full w-60 h-60 mt-20 overflow-hidden border-radius bg-blue-50"> */}
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full mx-auto w-48 h-48 overflow-auto my-20">
            <Image src={profile} width={1000} />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-burtons dark:text-white">
              Hi, I am Miftahul Anwar
            </h1>
          </div>
        </section>
      </main>
    </div>
  );
}
