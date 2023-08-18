import { ILinks } from "./typeHelper";
import { ICertificate } from "./typeHelper";

export const links: ILinks[] = [
  {
    title: "Home",
    link: "home",
    offset: -1,
  },
  {
    title: "Profile",
    link: "profile",
    offset: 5,
  },
  {
    title: "My Projects",
    link: "projects",
    offset: 10,
  },
  {
    title: "Contact",
    link: "contact",
    offset: 20,
  },
];

export const tags: string[] = ["All", "FullStack", "Backend", "Frontend", "Mobile"];

export const certificates: ICertificate[] = [
  {
    cerName: "React Real-World Projects",
    cerDescription: "Kong Ruksiam (Udemy)",
  },
  {
    cerName: "TypeScript from Basic to Advanced",
    cerDescription: "Kong Ruksiam (Udemy)",
  },
];
