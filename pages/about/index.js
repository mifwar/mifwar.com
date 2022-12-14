import Head from "next/head";
import Image from "next/image";
import about from "../../public/MiftahulAnwarAbout.jpeg";
import React, { useEffect } from "react";

import { useThemeContext } from "../../utils/darkMode";
import { useMobileModeContext } from "../../utils/mobileMode";
import Navbar from "../../components/Navbar";
import Social from "../../components/Social";
import Footer from "../../components/Footer";

const customLink = (href, text) => (
  <a
    className="
          text-blue-600
          hover:text-blue-400
          dark:text-blue-400
          dark:hover:text-blue-300"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

const About = () => {
  const [darkMode, setDarkMode] = useThemeContext();
  const isMobile = useMobileModeContext();

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
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>About</title>
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar
            isMobile={isMobile}
            darkMode={darkMode}
            changeDarkMode={setDarkMode}
            path="about"
          />
          <p className="text-3xl font-Lato mt-5 xs:mr-7 text-center dark:text-gray-100">
            About Me
          </p>
          <div className="flex justify-center items-start xs:items-center dark:text-white mt-5 mb-10 xs:flex-col-reverse">
            <div className="ml-10 mr-5 max-w-lg text-justify font-Poppins text-sm">
              <p className="mb-3 xs:mr-7">
                Hello! My name is Miftahul Anwar and you can call me Miftah.
              </p>
              <p className="my-3 xs:mr-7">
                My programming journey is started when i became a Computer
                Engineering student at
                {customLink(
                  "https://www.pens.ac.id/",
                  " PENS (Politeknik Elektronika Negeri Surabaya)"
                )}
                .
              </p>
              <p className="my-3 xs:mr-7">
                During my college life, i spent my first 3 years in
                {customLink("https://erosrobotic.id/", " EROS ")} as a
                programmer. EROS is a Humanoid Robot Soccer Team under the
                management of PENS Robotics Team. EROS is developed to compete
                in Humanoid Robot Soccer League in
                {customLink(
                  "https://kontesrobotindonesia.id",
                  " Kontes Robot Indonesia "
                )}
                and
                {customLink(
                  "https://humanoid.robocup.org/",
                  " Robocup Humanoid League"
                )}
                .
              </p>
              <p className="my-3 xs:mr-7">
                While at EROS, i created and involved in some projects. My first
                project is creating an app that able to wirelessly track the
                robot states while robot in the field. I also involved to
                develop an object detection system using computer vision and
                some algorithm such as decision making, teamwork, and
                localization.
              </p>
              <p className="my-3 xs:mr-7">
                In my last year at college, i became a freelance software
                engineer and handled some projects that mostly about Desktop
                App, Computer Vision, and IoT.
              </p>
              <p className="my-3 xs:mr-7">
                Fast forward to today, I am currently working for
                {customLink("https://www.zenius.net/", " Zenius Education ")}
                as a Clojure Developer. I created a Clojure app to speed up the
                tutor in Zenius to create a school exercise problems.
              </p>
            </div>
            <Image
              className="rounded-lg ml-5 mr-10 mb-10 w-56 xs:w-48"
              src={about}
              alt="Miftahul Anwar"
              placeholder="blur"
            />
          </div>
          <Social />
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default About;
