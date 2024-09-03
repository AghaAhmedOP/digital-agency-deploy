import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NAVLINKS = [
  {
    label: "About",
    link: "/#about",
  },
  {
    label: "Services",
    link: "/#services",
  },
  {
    label: "Portfolio",
    link: "/#portfolio",
  },
  {
    label: "Pricing",
    link: "/#pricing",
  },
  {
    label: "Blogs",
    link: "/#blogs",
  },
  {
    label: "Contact",
    link: "/#contact",
  },
];

export const ABOUT_ICONS = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com",
  },
  {
    icon: <FaXTwitter />,
    link: "https://www.x.com",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com",
  },
];

export const SERVICES = [
  {
    img: "services/service-01.webp",
    title: "Website Development",
    desc: "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",
    link: "#services",
  },
  {
    img: "services/service-02.webp",
    title: "Graphic Design",
    desc: "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",
    link: "#services",
  },
  {
    img: "services/service-03.webp",
    title: "App Development",
    desc: "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",
    link: "#services",
  },
];

export const PORTFOLIO_CATEGORIES = [
  {
    title: "All",
    value: "all",
  },
  {
    title: "Web",
    value: "web",
  },
  {
    title: "Design",
    value: "design",
  },
  {
    title: "App",
    value: "app",
  },
  {
    title: "Graphic",
    value: "graphic",
  },
  {
    title: "Web Design",
    value: "webdesign",
  },
];

export const PORTFOLIOITEMS = [
  {
    category: ["all", "web", "design"],
    img: "portfolio/portfolio-01.webp",
    title: "Startup landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
  },
  {
    category: ["all", "app"],
    img: "portfolio/portfolio-02.webp",
    title: "Job portal landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
  },
  {
    category: ["all", "graphic"],
    img: "portfolio/portfolio-03.webp",
    title: "SaaS landing page",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
  },
  {
    category: ["all", "graphic", "webdesign"],
    img: "portfolio/portfolio-04.webp",
    title: "Business & corporate template",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae dolor ultrices libero.",
  },
];

export const CLIENTS = [
  {
    img: "clients/lineicons.svg",
    link: "#",
  },
  {
    img: "clients/formbold.svg",
    link: "#",
  },
  {
    img: "clients/tailadmin.svg",
    link: "#",
  },
  {
    img: "clients/uideck.svg",
    link: "#",
  },
  {
    img: "clients/graygrids.svg",
    link: "#",
  },
];

export const TEAM = [
  {
    tmName: "Coriss Ambady",
    position: "Sales Manager",
    img: "team/image-01.webp",
  },
  {
    tmName: "Glorius Cristian",
    position: "App Developer",
    img: "team/image-02.webp",
  },
  {
    tmName: "Jackie Sanders",
    position: "UI/UX Designer",
    img: "team/image-03.webp",
  },
  {
    tmName: "Nikolas Brooten",
    position: "Sales Manager",
    img: "team/image-04.webp",
  },
];

export const PRICING = [
  {
    subheading: "Personal",
    Price: "59",
    desc: "Perfect for using in a personal website or a client project.",
    features: [
      "1 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 1 (one) project",
      "3 Months support",
    ],
  },
  {
    subheading: "Professional",
    Price: "199",
    desc: "Perfect for using in a personal website or a client project.",
    features: [
      "5 User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on 3 (Three) project",
      "5 Months support",
    ],
  },
  {
    subheading: "Business",
    Price: "256",
    desc: "Perfect for using in a personal website or a client project.",
    features: [
      "Unlimited User",
      "All UI components",
      "Lifetime access",
      "Free updates",
      "Use on unlimited project",
      "Lifetime support",
    ],
  },
];

export const TESTEMONIALS = [
  {
    img: "testemonials/lineicons.svg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    avatar: "testemonials/avatars/image-1.webp",
    name: "Musharof Chy",
    position: "Founder @ LineIcons",
  },
  {
    img: "testemonials/tailgrids.svg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    avatar: "testemonials/avatars/image-2.webp",
    name: "David Sailio",
    position: "Founder @ TailGrids",
  },
  {
    img: "testemonials/formbold.svg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    avatar: "testemonials/avatars/image-3.webp",
    name: "Jenifer Lofeez",
    position: "Founder @ Formbold",
  },
  {
    img: "testemonials/uideck.svg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.",
    avatar: "testemonials/avatars/image-4.webp",
    name: "Justin Harry",
    position: "Founder @ UIdeck",
  },
];

export const BLOGS = [
  {
    image: "blogs/img-1.webp",
    title: "Exploring MERN Stack: Powering Modern Web Development",
    preview:
      "In the world of web development, staying ahead of the curve is crucial. One technology stack that ha",
    link: "#",
  },
  {
    image: "blogs/img-2.webp",
    title: "Test webhook",
    preview:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    link: "#",
  },
  {
    image: "blogs/img-3.webp",
    title: "The Power of UI/UX: Elevating Digital Experiences",
    preview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    link: "#",
  },
];
