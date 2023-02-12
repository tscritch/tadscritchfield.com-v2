import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Icon, IconName } from "../components/icons";
import { getInspoData, InspoItem } from "./inspo-data";

export const Inspo = () => {
  // get data from getInspoData() and put it in state
  const [inspoData, setInspoData] = useState<InspoItem[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getInspoData();
      setInspoData(data);
    })();
  }, []);

  // render the data
  const inspoItems = inspoData.map((item) => <InspoItem data={item} />);

  return (
    <section className="px-8 md:px-20 py-2">
      <p className="py-8">
        A collection of media that has accumulatively changed my life.
      </p>
      <Masonry
        breakpointCols={{
          default: 3,
          // 1200: 3,
          1200: 2,
          786: 1,
        }}
        className="flex w-auto gap-x-2 -ml-2"
        columnClassName="my-masonry-grid_column"
      >
        {inspoItems}
      </Masonry>
    </section>
  );
};

const InspoItem = ({ data }: { data: InspoItem }) => {
  return (
    <div className="text-black bg-white border rounded-lg p-1 shadow-sm min-w-[16rem] mb-2 opacity-0 animate-fade-in">
      <div className="relative">
        <div className="rounded overflow-hidden border flex justify-center">
          <div className="absolute w-full h-full bg-transparent hover:bg-slate-100 hover:bg-opacity-80 transition-all duration-500 z-10 group flex justify-center items-center">
            <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 text-slate-600 text-center px-8">
              <h3 className="pb-2 font-bold">{data.title}</h3>
              <p className="pb-2">{data.date.getFullYear()}</p>
              <p>{data.description}</p>
              {/* svg icons as links to matching item link */}
              <div className="flex items-center justify-center gap-x-4 pt-2">
                {data.links && (
                  <>
                    {Object.keys(data.links).map((lk) => {
                      const l = data.links[lk];
                      if (!l) return null;

                      return (
                        <a
                          href={l}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-800"
                        >
                          <Icon name={lk as IconName} size={24} />
                        </a>
                      );
                    })}
                  </>
                )}
              </div>
            </p>
          </div>
          <img src={data.image} alt={data.title} className="z-0" />
        </div>
      </div>
    </div>
  );
};
