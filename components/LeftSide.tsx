import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/ladexcz" target="_blank">
          <span className="w-10 h-10 text-xl bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.youtube.com/channel/UCwp6FkJLxSaEo09g3yokSuw"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialYoutube />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/gerald-cahanza-b0825424b/"
          target="_blank"
        >
          <span className="w-10 h-10 text-xl bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://www.facebook.com/geraldcahanza/" target="_blank">
          <span className="w-10 h-10 text-xl bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/ladexzs/" target="_blank">
          <span className="w-10 h-10 text-xl bg-black rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textBlack"></div>
    </div>
  );
};

export default LeftSide;
