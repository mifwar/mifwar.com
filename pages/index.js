import Head from "next/head";
import Image from "next/image";
import profile from "../public/MiftahulAnwarCropped.jpg";
import React, { useState, useContext, useEffect } from "react";

import { useThemeContext } from "../utils/darkMode";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import Footer from "../components/Footer";

const Home = () => {
  const [darkMode, setDarkMode] = useThemeContext();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    const resizeW = () => setIsMobile(window.innerWidth <= 640);
    resizeW();
    window.addEventListener("resize", resizeW); // Update the width on resize
    return () => window.removeEventListener("resize", resizeW);
  });

  useEffect(() => {
    {
      darkMode
        ? document.body.classList.add("bg-gray-900")
        : document.body.classList.add("bg-white");
    }

    return () => {
      {
        darkMode
          ? document.body.classList.remove("bg-gray-900")
          : document.body.classList.remove("bg-white");
      }
    };
  });

  return (
    <div className={darkMode ? "dark " : ""}>
      <Head>
        <title>Miftahul Anwar</title>
        <meta name="description" content="Miftahul Anwar's personal site" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar
            isMobile={isMobile}
            darkMode={darkMode}
            changeDarkMode={setDarkMode}
            path="home"
          />
          <div className="relative rounded-full mx-auto w-48 h-48 overflow-auto mt-14 mb-10">
            <Image src={profile} alt="Miftahul Anwar" placeholder="blur" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-burtons dark:text-white font-Lato py-5">
              Hi, I am Miftahul Anwar
            </h1>
            <h2 className="text-md font-burtons dark:text-white font-Poppins py-1">
              I am a software engineer based in Jakarta, Indonesia.
            </h2>
            <h2 className="text-md font-burtons dark:text-white font-Poppins py-1">
              Currently working as a{" "}
              <a
                className="text-green-600 dark:text-green-400"
                href="https://clojure.org/"
                target="_blank"
              >
                Clojure
              </a>{" "}
              Developer at{" "}
              <a
                className="text-purple-600 dark:text-purple-400"
                href="https://zenius.net"
                target="_blank"
              >
                Zenius
              </a>
            </h2>
            <Social />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
