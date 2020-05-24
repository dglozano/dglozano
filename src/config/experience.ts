import { GiTeacher } from "react-icons/gi";
import {
  DiDotnet,
  DiTerminal,
  DiAngularSimple,
  DiAndroid,
} from "react-icons/di";
import { FaUniversity, FaCanadianMapleLeaf } from "react-icons/fa";

export type ExperienceDetails = {
  position: string;
  company: string;
  location: string;
  tags: string[];
  description: string;
  date: string;
  Icon: React.FunctionComponent;
};

export const experiences: ExperienceDetails[] = [
  {
    position: "Software Consultant",
    company: "Miles AS",
    location: "Stavanger, Norway",
    tags: [".NET", "C#", "React", "Azure", "SqlServer", "EF 6"],
    description:
      "Hired out to Altus Intervention since October 2019, where we have been developing multiple digital solutions for the HR department using ReactJs, .NET Framework and Azure.",
    date: "October 2019 - Present",
    Icon: DiDotnet,
  },
  {
    position: "Information Systems Engineering",
    company: "Universidad Tecnológica Nacional",
    location: "Santa Fe, Argentina",
    tags: ["Bachelor degree"],
    description: `Five years long bachelor degree. Overall GPA 9.13 out of 10`,
    date: "March 2013 – June 2019",
    Icon: FaUniversity,
  },
  {
    position:
      "Escale – a mobile telemedicine platform for the follow-up of patients in a diet plan",
    company: "Universidad Tecnológica Nacional",
    location: "Santa Fe, Argentina",
    tags: [
      "Android",
      "Spring Boot",
      "Java",
      "RxJava",
      "Bluetooth LE",
      "Docker",
      "JWT",
    ],
    description: `Information Systems Engineering final project. I designed, developed and implemented a mobile platform called Escale, that aims to be the digital support of a new diet plan with remote monitoring, which allows patients to measure their body composition data from the comfort of home , see statistics and forecasts about its evolution, get their diet on their phones and communicate with the doctor through a  private chat. In turn, all data collected locally by patients is immediately uploaded to a private server in the cloud, so that the doctor can see, evaluate and react accordingly if necessary.`,
    date: "September 2018 – May 2019",
    Icon: DiAndroid,
  },
  {
    position: "Teaching Assistant",
    company: "Universidad Tecnológica Nacional",
    location: "Santa Fe, Argentina",
    tags: ["Teaching", "Communicational Skills"],
    description:
      "I assisted the main professor during the laboratory classes and prepared and graded assignments of the Algorithms and Data Structures course, in which freshmen students learn several basic programming skills and concepts: from variables, functions and iterative structures, up to files and dynamic structures management.",
    date: "August 2014 - May 2019",
    Icon: GiTeacher,
  },
  {
    position: "SAP Basis Intern",
    company: "Carsa S.A.",
    location: "Santa Fe, Argentina",
    tags: ["SAP", "SysAdmin"],
    description:
      "I monitored, maintained, gave support and administrated the SAP Systems installed in Musimundo, one of the biggest retailers in Argentina.",
    date: "September 2017 – July 2018",
    Icon: DiTerminal,
  },
  {
    position: "Exchange Student",
    company: "Ontario Tech University",
    location: "Oshawa, Canada",
    tags: ["Collaborative Leadership", "Security Analysis"],
    description:
      "Due to having obtained the Canadian scholarship “Emerging Leaders in the Americas Program”, I was able to study one semester at the Ontario Tech University as an exchange student. I took the courses Collaborative Leadership and Security Analysis. I also collaborated in a research project alongside two local professors.",
    date: "January 2017 – May 2017",
    Icon: FaCanadianMapleLeaf,
  },
  {
    position: "Frontend Developer Intern",
    company: "Asserits LTD",
    location: "Gdansk, Poland",
    tags: ["AngularJs", "HTML5", "CSS3", "Javascript", "ProtractorTest"],
    description:
      "I joined the Caledonian Sleeper team, in which I developed some front-end functionality for the website https://www.sleeper.scot/ using HTML5, CSS3, JavaScript, AngularJS and Protractor Test.",
    date: "August 2016 – December 2016",
    Icon: DiAngularSimple,
  },
];
