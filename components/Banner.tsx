import { motion } from "framer-motion";
import { profileImg } from "@/public/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <div className="flex flex-col lgl:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg font-titleFont tracking-wide text-textGreen"
          >
            Hi, my name is
          </motion.h3>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
          >
            Gerald Cahanza.
            <span className="text-textDark mt-2 lgl:mt-4">
              Web developer!
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base md:max-w-[650px] text-textDark font-medium"
          >
            I am a web developer with a 1 year self experience in React. I have a
            strong foundation in front-end & back-end development and am skilled in
            creating user-friendly and responsive web applications using React and
            its ecosystem.{" "}
            <a href="https://www.geraldcahanza.live/" target="_blank">
              {" "}
              <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
                Learn more
                <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </a>
          </motion.p>
          <a href="https://github.com/noorjsdivs" target="_blank">
            <motion.button
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
            >
              Check out my project!
            </motion.button>
          </a>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
        {/* Diamond Pattern Background */}
        <div className="absolute inset-0 bg-diamond-pattern rounded-lg"></div>
        
        <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
          <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
            <Image
              className="rounded-lg h-full object-cover"
              src={profileImg}
              alt="profileImg"
            />
            <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </div>
        <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
      </div>
      
      </div>
    </section>
  );
};

export default Banner;
