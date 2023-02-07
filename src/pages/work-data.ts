export interface WorkData {
  title: string;
  description: string;
  date: string;
  image: string;
  video?: string;
  link: string;
  linkText?: string;
  dark?: boolean;
}

export const workData: WorkData[] = [
  {
    title: "Song Writer Companion",
    description: "AI songwriting assistant. Write songs faster and better.",
    date: "December 2022",
    image: "/images/song-writer-companion.jpg",
    link: "https://songwritercompanion.com",
    linkText: "visit",
  },
  {
    title: "Trove",
    description: "An elixir library for simplifying Ecto search queiries.",
    date: "February 2023",
    image: "/images/song-writer-companion.jpg",
    link: "https://github.com/smartrent/trove",
    linkText: "visit",
  },
  {
    title: "Chart Cake",
    description: "Good looking charts for your website or emails.",
    date: "February 2022",
    image: "/images/chartcake.jpg",
    video: "/videos/chartcake.mp4",
    link: "https://chartcake.com",
    linkText: "visit",
  },
  {
    title: "Money Tracker",
    description:
      "Personal finance tracker based on the envelope method. Linked to my budget spreadsheet.",
    date: "February 2022",
    image: "/images/money-tracker.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://money-tracker-henna.vercel.app/",
    linkText: "visit",
  },
  {
    title: "Dead Simple React Calendar",
    description: "A simple calendar component with no dependencies for React.",
    date: "July 2021",
    image: "/images/dead-simple-react-calendar.jpg",
    video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://github.com/tscritch/dead-simple-react-calendar",
    linkText: "github",
  },
  {
    title: "Rust WebGPU Demo",
    description: "A demo of the WebGPU API in Rust.",
    date: "June 2020",
    image: "/images/cube_move.gif",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://github.com/tscritch/rust-webgpu-renderer",
    linkText: "github",
    dark: true,
  },
  {
    title: "AlgeBingo",
    description:
      "A bingo game for practicing algebraic expressions. Written in Swift.",
    date: "April 2020",
    image: "/images/algebingo.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://algebingo.com",
    linkText: "visit",
  },
  {
    title: "TestPrep",
    description:
      "A test prep app for CLEP tests when I was in college. Written in Objective-C.",
    date: "August 2015",
    image: "/images/test-prep.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://github.com/tscritch/TestPrep",
    linkText: "github",
    dark: true,
  },
  {
    title: "The Beauty of the Greater Things",
    description: "Single I wrote and recorded in 2014.",
    date: "October 2014",
    image: "/images/tboftgt.jpg",
    // video: "/videos/dead-simple-react-calendar.mp4",
    link: "https://www.amazon.com/Beauty-Greater-Things-Tad-Scritchfield/dp/B00OC2GGM8",
    linkText: "listen",
    dark: true,
  },
];
