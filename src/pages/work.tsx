import Masonry from "react-masonry-css";
import { WorkData, workData } from "./work-data";

export const Work = () => {
  // const firstColData = getEveryThirdElement(workData, 0);
  // const secondColData = getEveryThirdElement(workData, 1);
  // const thirdColData = getEveryThirdElement(workData, 2);

  // const firstCol = firstColData.map((data) => {
  //   return <WorkItem key={data.title} data={data} />;
  // });
  // const secondCol = secondColData.map((data) => {
  //   return <WorkItem key={data.title} data={data} />;
  // });
  // const thirdCol = thirdColData.map((data) => {
  //   return <WorkItem key={data.title} data={data} />;
  // });
  const items = workData.map((data) => {
    return <WorkItem key={data.title} data={data} />;
  });

  return (
    <section className="px-8 md:px-20 pt-4 pb-16">
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
        {items}
      </Masonry>
      {/* <div className="flex-grow flex flex-col items-center justify-start gap-y-2">
        {firstCol}
      </div>
      <div className="flex-grow flex flex-col items-center justify-start gap-y-2">
        {secondCol}
      </div>
      <div className="flex-grow flex flex-col items-center justify-start gap-y-2">
        {thirdCol}
      </div> */}
    </section>
  );
};

function getEveryThirdElement(array: WorkData[], offset: number) {
  return array.filter((element, index) => (index + offset) % 3 === 0);
}

const WorkItem = ({ data }: { data: WorkData }) => {
  return (
    <a href={data.link} target="_blank">
      <div className="text-black bg-white border rounded-lg p-1 shadow-sm min-w-[16rem] mb-2 opacity-0 animate-fade-in">
        <div className="relative">
          <div className="rounded overflow-hidden border mb-1 flex justify-center">
            <div className="absolute w-full h-full bg-transparent hover:bg-slate-100 hover:bg-opacity-80 transition-all duration-500 z-10 group flex justify-center items-center">
              <p className="text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 text-slate-600 text-center px-8">
                {data.description}
              </p>
            </div>
            {data.video ? (
              <video
                src={data.video}
                playsInline
                autoPlay
                muted
                loop
                className="z-0"
              />
            ) : (
              <img src={data.image} alt={data.title} className="z-0" />
            )}
          </div>
          <div
            className={`rounded w-[calc(100%-2px)] flex justify-between items-center p-4 py-5 mb-[1px] ml-[1px] absolute bottom-0 text-xs bg-gradient-to-t ${
              data.dark ? "from-slate-800" : "from-white"
            } to-transparent`}
          >
            <h3 className={data.dark ? "text-white" : "text-current"}>
              {data.title}
            </h3>
            <p className={data.dark ? "text-slate-100" : "text-slate-600"}>
              {data.date}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-slate-100 text-slate-800 text-base rounded px-2 py-1 text-center transition-colors duration-500 hover:bg-slate-200">
          {data.linkText} <span className="text-md pl-1">↗</span>
        </div>
      </div>
    </a>
  );
};
