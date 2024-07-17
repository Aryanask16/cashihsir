import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[92px] pb-[9px] gap-[394px] top-[0] z-[99] sticky border-b-[2px] border-solid border-gray mq700:gap-[98px] mq700:pl-[23px] mq700:pr-[23px] mq700:box-border mq975:gap-[197px] mq975:pl-[46px] mq975:pr-[46px] mq975:box-border ${className}`}
    >
      <img
        className="h-[49px] w-[83px] relative object-contain"
        loading="lazy"
        alt=""
        src="/pngwingcom2-1@2x.png"
      />
      <nav className="m-0 w-[301px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
        <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[20px] text-left mq450:ml-[-13vw] text-xl text-midnightblue font-satoshi-variable">
          <a className="[text-decoration:none] h-[27px] relative tracking-[0.08em] font-medium text-[inherit] inline-block min-w-[100px] whitespace-nowrap">
            Our Team
          </a>
          <a className="[text-decoration:none] h-[27px] relative tracking-[0.08em] font-medium text-[inherit] inline-block min-w-[43px]">
            GST
          </a>
          <a className="[text-decoration:none] h-[27px] relative tracking-[0.08em] font-medium text-[inherit] inline-block min-w-[87px]">
            Services
          </a>
        </nav>
      </nav>
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
