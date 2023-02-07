import { Link } from "react-router-dom";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="px-20 py-8 md:pb-20 flex flex-col items-center md:flex-row md:justify-between opacity-0 animate-fade-in">
      <Link
        to="/"
        className="text-3xl font-black text-black text-center pb-8 md:text-left md:pb-0"
      >
        tad
      </Link>

      <Nav />
    </header>
  );
};
