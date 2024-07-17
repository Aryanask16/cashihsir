import GlareCard from "../ui/GlareCard";
import imageOne from "../../assets/real11.jpg";
import imagetwo from "../../assets/real21.jpg";
import imagethree from "../../assets/real31.jpg";
import imagefour from "../../assets/real41.jpg";
import imagefive from "../../assets/real51.jpg";

import "../css/Team.css";

export default function TeamGrid() {
  return (
    <div className="team-new23 grid grid-flow-row grid-cols-3 text-blue-900 gap-10 mq700:flex mq700:flex-col">
      <GlareCard className="team-mem flex flex-col px-2 justify-center  shadow-lg rounded-lg">
        <div className=" overflow-hidden h-[10vh]">
          <img className=" h-[33vh] ml-[-1.1vh] rounded-t-lg " src={imageOne} />
          </div>
        <div className="p-4">
          <p className="pt-4"><b>Name:</b> CA Pawan Kumar Mishra (ACA, M.com. (Marketing & Finance), B.com.)</p>
          <p><b>Designation:</b> Partner</p>
          <p><b>Experience:</b> In Practice Since 2021</p>
          <p><b>Area of Expertise:</b> Direct Taxation, Indian GAAP & Ind AS Consultant, Financial Reporting and Accounting.</p>
        </div>
      </GlareCard>
      <GlareCard className="team-mem flex flex-col px-2 justify-center  shadow-lg rounded-lg">
      <div className=" overflow-hidden h-[10vh]"><img className=" h-[33vh] ml-[-1.1vh] rounded-t-lg" src={imagetwo} /></div>
        <div className=" mt-[7.78vh]">
          <p className="pt-4"><b>Name:</b> CA Shishir Kumar Dubey (FCA, DISA, FAFE, FAFP(ICAI), Forensic Auditor, CPA, ISA(ICAI), Peer Reviewer)</p>
          <p><b>Designation:</b> Managing Partner</p>
          <p><b>Experience:</b> In Practice Since 2010</p>
          <p><b>Area of Expertise:</b> Corporate Assurance and Consulting Services, Digital Forensics, Information System Based Audit, Goods & Services Tax, Direct Taxation, NGO Consulting, Non-Corporate Assurance Services, Compliance Services.</p>
        </div>
      </GlareCard>
      <GlareCard className="team-mem flex flex-col px-2 justify-center  shadow-lg rounded-lg">
      <div className=" overflow-hidden h-[10vh]"> <img className=" h-[33vh] ml-[-1.1vh] rounded-t-lg" src={imagethree} /> </div>
        <div className="mt-[4.78vh]">
          <p className="pt-4"><b>Name:</b> CA Sanjay Mani Tripathi (ACA, M.com.(Finance), B.com.)</p>
          <p><b>Designation:</b> Partner</p>
          <p><b>Experience:</b> More than 14 Years of experience in Service sector.</p>
          <p><b>Area of Expertise:</b> Financial Analysis & Reporting (MIS), Taxation & Statutory Compliance, Costing, Budgeting & Variance Analysis, Auditing, Capex Accounting, Insurance Working</p>
        </div>
      </GlareCard>
      <GlareCard className="team-mem flex flex-col px-2 justify-center  shadow-lg rounded-lg">
      <div className=" overflow-hidden h-[10vh]"><img className="h-[33vh] ml-[-1.1vh] rounded-t-lg " src={imagefour} /> </div>
        <div className="">
          <p className="pt-4"><b>Name:</b> CA Puneet Singh (ACA, M.com. (Finance), B.com.)</p>
          <p><b>Designation:</b> Partner</p>
          <p><b>Experience:</b> In Practice Since 2021</p>
          <p><b>Area of Expertise:</b> Goods & Services Tax, Assessment & Litigation, NGO Consulting, Accounting & Compliance, Non-Corporate Consulting.</p>
        </div>
      </GlareCard>
      <GlareCard className="team-mem flex flex-col px-2 justify-center  shadow-lg rounded-lg">
      <div className=" overflow-hidden h-[10vh]"><img className="h-[33vh] ml-[-1.1vh] rounded-t-lg" src={imagefive} /></div>
        <div className=" mt-[2.2vh]">
          <p className="pt-4"><b>Name:</b> CA Shubham Sureka (ACA, M.com. (Finance), B.com.)</p>
          <p><b>Designation:</b> Partner</p>
          <p><b>Experience:</b> In Practice Since 2021</p>
          <p><b>Area of Expertise:</b> Finance, Audit and Direct Taxation, MIS Reporting, Finance management, Statutory Audit, Corporate assurance consulting, Compliance of Startup, Non-Corporate Assurance Services, Compliance Services.</p>
        </div>
      </GlareCard>

    </div>
  );
}
