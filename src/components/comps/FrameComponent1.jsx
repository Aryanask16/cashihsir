import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start max-w-full text-center text-3xl text-white  mq450:gap-[25px] mq950:gap-[50px] ${className}`}
    >
      <div className="self-stretch bg-mediumblue overflow-hidden flex flex-col items-start justify-start py-[68px] px-[92px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq950:pl-[46px] mq950:pr-[46px] mq950:box-border">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-0 box-border gap-[28px] max-w-full">
          <h1 className="m-0 w-[1283px] h-[49px] relative text-inherit font-black font-inherit inline-block max-w-[103%] shrink-0 mq450:text-3xl mq950:text-10xl">
            Chartered accountants committed to your financial growth and
            prosperity
          </h1>
          <button className="cursor-pointer [border:none] py-3 px-14 bg-white rounded-6xs flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro">
            <a
              className="relative text-base [text-decoration:underline] leading-[150%] font-bold font-dm-sans text-darkblue text-left inline-block min-w-[103px]"
              href="mailto:Shishirandco01@gmail.com"
              target="_blank"
            >
              Contact Now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
