import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-lavender overflow-hidden flex flex-row items-start justify-center py-[43px] px-5 box-border max-w-full text-left text-9xl text-darkslateblue font-satoshi-variable mq700:pt-7 mq700:pb-7 mq700:box-border ${className}`}
    >
      <div className="w-[1257px] flex flex-col items-start justify-start gap-[50px] max-w-full mq700:gap-[25px]">
        <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[7px] pl-0 box-border max-w-full gap-[20px] mq700:flex-wrap">
          <div className="w-[417px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] max-w-full">
            <div className="w-[260px] flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <h2 className="m-0 self-stretch relative text-inherit leading-[22px] font-bold font-inherit mq450:text-3xl mq450:leading-[18px]">{`SHISHIR & Co.`}</h2>
                <h3 className="m-0 self-stretch relative text-5xl leading-[22px] font-bold font-inherit mq450:text-lgi mq450:leading-[18px]">
                  Chartered Accountants
                </h3>
              </div>
              <b className="self-stretch relative text-xl leading-[22px] mq450:text-base mq450:leading-[18px]">
                Financial Advisors
              </b>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch h-9 relative font-medium flex items-center shrink-0">
                    <span>
                      <p className="m-0">SHOP NO. 01, KBC TOWER, PAIDLEGANJ</p>
                    </span>
                  </div>
                  <div className="h-9 relative font-medium flex items-center shrink-0 mt-[-8px]">
                    <span>
                      <p className="m-0">
                        CHOWRAHA, OPP RAJBANSI HOSPITAL, GORAKHPUR
                      </p>
                    </span>
                  </div>
                </div>
                <div className="self-stretch h-9 relative flex items-center shrink-0">
                  <span>
                    <b>Branches:</b>
                    <span className="font-medium">{` Lucknow, Maharajganj & Deoria`}</span>
                  </span>
                </div>
              </div>
              <div className="self-stretch relative text-xs leading-[22px] font-medium">
                <p className="m-0 whitespace-pre-wrap">
                  Shishirandco01@gmail.com | +91-7499264357, 0551-3561840
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[24px] text-base">
            <b className="h-[27px] relative text-xl tracking-[-0.03em] flex items-center min-w-[81px] mq450:text-base">
              Solutions
            </b>
            <div className="relative tracking-[-0.03em] inline-block min-w-[97px]">
              Direct Taxation
            </div>
            <div className="relative tracking-[-0.03em] inline-block min-w-[118px]">
              Business Advisory
            </div>
            <div className="relative tracking-[-0.03em] inline-block min-w-[72px]">
              GST Filling
            </div>
            <div className="relative tracking-[-0.03em] inline-block min-w-[128px]">
              Corporate Advisory
            </div>
            <div className="relative tracking-[-0.03em] inline-block min-w-[72px]">
              Consulting
            </div>
            <div className="relative tracking-[-0.03em] font-dm-sans">{`Audit & Assurance`}</div>
          </div>
        </div>
        <div className="self-stretch h-[34px] flex flex-col items-start justify-start gap-[12px] text-base">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/vector-9.svg"
          />
          <div className="self-stretch relative leading-[22px]">{`© 2024 Shishit & Co. All rights reserved.`}</div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
