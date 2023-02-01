export const Home = () => {
  return (
    <div className="z-0">
      <section className="px-8 md:px-20 py-32 flex items-center justify-between flex-col lg:flex-row">
        <div className="me z-20">
          <h1 className="mb-8 text-sm w-80 text-center lg:text-base lg:text-left">
            Hi I'm Tad! I love creating.
            <br />
            designer - engineer - musician
          </h1>
        </div>
        <div className="bobby-blobby relative flex justify-center z-10">
          <div id="bobby-blobby-canvas">
            <iframe
              className="absolute top-0 left-0 -translate-x-1/2 lg:-translate-x-full -translate-y-1/4"
              src="https://my.spline.design/glasscirclescopy-22357bc11e0276c77b6851679363605f/"
              width="800px"
              height="800px"
            ></iframe>
            <div className="blob-hidder"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
