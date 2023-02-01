export interface WorkData {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  linkText?: string;
}

export const workData: WorkData[] = [
  {
    title: "Song Writer Companion",
    description: "December 2022",
    image: "/images/dead-simple-react-calendar.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://songwritercompanion.com",
    linkText: "visit",
  },
  {
    title: "Chart Cake",
    description: "February 2022",
    image: "/images/dead-simple-react-calendar.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://chartcake.com",
    linkText: "visit",
  },
  {
    title: "Money Tracker",
    description: "February 2022",
    image: "/images/dead-simple-react-calendar.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://chartcake.com",
    linkText: "visit",
  },
  {
    title: "Dead Simple React Calendar",
    description: "July 2021",
    image: "/images/dead-simple-react-calendar.jpg",
    video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://github.com/tscritch/dead-simple-react-calendar",
    linkText: "github",
  },
  {
    title: "Rust WebGPU Demo",
    description: "June 2020",
    image: "/images/dead-simple-react-calendar.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://github.com/tscritch/rust-webgpu-renderer",
    linkText: "github",
  },
  {
    title: "AlgeBingo",
    description: "April 2020",
    image: "/images/dead-simple-react-calendar.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://algebingo.com",
    linkText: "visit",
  },
  {
    title: "TestPrep",
    description: "May 2018",
    image: "/images/dead-simple-react-calendar.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://algebingo.com",
    linkText: "visit",
  },
];
