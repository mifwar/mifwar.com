import {
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="text-lg flex justify-center mx-auto text-black dark:text-white mt-20">
      <a
        className="px-3"
        href="mailto:hello@mifwar.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </a>
      <a
        className="px-3"
        href="https://github.com/mifwar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="px-3"
        href="https://hackerrank.com/2210171043_mif"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaHackerrank />
      </a>
      <a
        className="px-3"
        href="https://www.linkedin.com/in/miftahulanwar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="px-3"
        href="https://twitter.com/mif_war"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
      <a
        className="px-3"
        href="https://instagram.com/mif.war"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default Social;