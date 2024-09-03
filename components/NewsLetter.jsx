const NewsLetter = () => {
  return (
    <div className="mt-[-200px] relative">
      <div className="absolute z-10 overflow-hidden rounded-md bg-primary py-[70px] text-center w-full">
        <div className="relative z-10 mx-auto max-w-[770px] px-6">
          <h2 className="mb-10 text-2xl font-bold leading-tight text-white md:text-[40px]">
            Subscribe our newsletter to receive future updates
          </h2>
          <form class="relative mx-auto max-w-[480px]">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              class="mb-5 w-full rounded-full border border-white border-opacity-[13%] bg-white bg-opacity-[15%] px-8 py-4 text-center text-white placeholder-white placeholder-opacity-70 outline-none transition focus:border-opacity-100 focus-visible:shadow-none sm:mb-0 sm:text-left"
              name="email"
              value=""
            />
            <button class="right-2 top-2 w-full rounded-full bg-white px-5 py-4 text-base font-semibold text-primary sm:absolute sm:w-auto sm:py-[10px]">
              Subscribe Now
            </button>
          </form>
        </div>
        <div class="absolute bottom-0 left-0 right-0 -z-10 w-full">
          <DecorativeSVG />
        </div>
      </div>
    </div>
  );
};

const DecorativeSVG = ({ props }) => (
  <svg
    width="818"
    height="286"
    viewBox="0 0 818 286"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="mx-auto"
  >
    <circle
      cx="409"
      cy="409"
      r="408.5"
      stroke="url(#paint0_linear_0:1)"
    ></circle>
    <circle
      cx="409"
      cy="409"
      r="349.5"
      stroke="url(#paint1_linear_0:1)"
    ></circle>
    <defs>
      <linearGradient
        id="paint0_linear_0:1"
        x1="-34.5"
        y1="291.5"
        x2="851"
        y2="291.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.35"></stop>
        <stop offset="0.218415" stopColor="white" stopOpacity="0"></stop>
        <stop offset="0.728079" stopColor="white" stopOpacity="0"></stop>
        <stop offset="1" stopColor="white" stopOpacity="0.35"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_0:1"
        x1="29.4768"
        y1="308.45"
        x2="787.24"
        y2="308.45"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0.35"></stop>
        <stop offset="0.218415" stopColor="white" stopOpacity="0"></stop>
        <stop offset="0.777261" stopColor="white" stopOpacity="0"></stop>
        <stop offset="1" stopColor="white" stopOpacity="0.35"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default NewsLetter;
