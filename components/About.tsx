import { AiFillThunderbolt } from "react-icons/ai";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            A meticulous professional with well-versed in providing quality administrative and customer service support through effectively handling remote office procedures and calls. Effectively able to meet set deadlines and process information through well-honed research skills.
          </p>
          <p>Skills and Expertise</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              E-mail handling and Email inbox optimization
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Calendar & Meeting Scheduling
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Research, Data Collection and Data Entry
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              SMM (scheduling posts)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Website post management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Web Development (Front-end, React, NextJS, Laravel)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Google Suite: Drive, Docs, Sheets, Forms, Mail, Calendar, Slides
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MS Office (Word, Excel, PowerPoint, Outlook)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Bookkeeping
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Other administrative support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
