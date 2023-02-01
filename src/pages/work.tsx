import { WorkData, workData } from "./work-data";

export const Work = () => {
  const firstColData = getEveryThirdElement(workData, 0);
  const secondColData = getEveryThirdElement(workData, 1);
  const thirdColData = getEveryThirdElement(workData, 2);

  const firstCol = firstColData.map((data) => {
    return <WorkItem key={data.title} data={data} />;
  });
  const secondCol = secondColData.map((data) => {
    return <WorkItem key={data.title} data={data} />;
  });
  const thirdCol = thirdColData.map((data) => {
    return <WorkItem key={data.title} data={data} />;
  });

  return (
    <section className="px-8 md:px-20 py-32 flex gap-x-2">
      <div className="flex flex-col items-center justify-start gap-y-2">
        {firstCol}
      </div>
      <div className="flex flex-col items-center justify-start gap-y-2">
        {secondCol}
      </div>
      <div className="flex flex-col items-center justify-start gap-y-2">
        {thirdCol}
      </div>
    </section>
  );
};

function getEveryThirdElement(array: WorkData[], offset: number) {
  return array.filter((element, index) => (index + offset) % 3 === 0);
}

const WorkItem = ({ data }: { data: WorkData }) => {
  return (
    <a href={data.link} target="_blank">
      <div className="text-black border rounded-lg p-1 shadow-sm">
        <div className="relative">
          <div className="rounded overflow-hidden border mb-1">
            {data.video ? (
              <video
                src={data.video}
                playsInline
                autoPlay
                muted
                loop
                className="w-80 md:w-[420px]"
              />
            ) : (
              <img
                src={data.image}
                alt={data.title}
                className="w-80 md:w-[420px]"
              />
            )}
          </div>
          <div className="w-full flex justify-between items-center p-4 absolute bottom-0 text-xs">
            <h3 className="">{data.title}</h3>
            <p className="text-neutral-600">{data.description}</p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-neutral-100 text-neutral-800 text-base rounded px-2 py-1 text-center transition-colors duration-500 hover:bg-neutral-200">
          {data.linkText} <span className="text-md pl-1">↗</span>
        </div>
      </div>
    </a>
  );
};
