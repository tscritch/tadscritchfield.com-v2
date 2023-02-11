export const CrazyButton = () => {
  return (
    <a className="button" href="/work">
      <div className="mask">
        <div className="flex w-full justify-center">
          <video
            id="video"
            src="/blob2.mp4"
            autoPlay
            muted
            loop
            height="32"
            width="340"
          ></video>
          <p>Ok, let's see it!</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </a>
  );
};
