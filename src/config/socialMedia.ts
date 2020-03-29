import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

type SocialMediaLinkDetails = {
  title: string;
  accountName: string;
  href: string;
  Icon: React.FunctionComponent;
};

export const socialMediaAccountsDetails: {
  [id: string]: SocialMediaLinkDetails;
} = {
  linkedin: {
    title: "Linkedin",
    accountName: "diegogarcialozano",
    href: "https://www.linkedin.com/in/diegogarcialozano/",
    Icon: FaLinkedinIn
  },
  github: {
    title: "Github",
    accountName: "dglozano",
    href: "https://github.com/dglozano",
    Icon: FaGithub
  },
  stackoverflow: {
    title: "StackOverflow",
    accountName: "dglozano",
    href: "https://stackoverflow.com/users/10648865/dglozano",
    Icon: FaStackOverflow
  },
  twitter: {
    title: "Twitter",
    accountName: "dglozano95",
    href: "https://twitter.com/dglozano95",
    Icon: FaTwitter
  },
  instagram: {
    title: "Instagram",
    accountName: "diegogarcialozano",
    href: "https://instagram.com/diegogarcialozano",
    Icon: FaInstagram
  }
};
