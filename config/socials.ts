import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@astralis12",
    icon: Icons.gitHub,
    link: "https://github.com/astralis12",
  },
  {
    name: "LinkedIn",
    username: "Aristo Davino",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/aristo-davino-4562a3219/",
  },
  {
    name: "Gmail",
    username: "Aristo Davino",
    icon: Icons.gmail,
    link: "mailto:albertusdavino@gmail.com",
  },
];
