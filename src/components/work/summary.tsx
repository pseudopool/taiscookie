import { Job } from "@/consts/works";
import Link from "next/link";

type Props = {
  job: Job;
};

const Summary = ({ job }: Props) => (
  <div className="py-4 w-full flex flex-col items-center border-b-2 border-black gap-2">
    <Link
      href="https://kr.ktown4u.com"
      target="_blank"
      className="text-xl font-medium pb-1 border-b-2 border-highlight"
    >
      {job.name}{" "}
      <span className=" font-azeret text-base">{job.globalName}</span>{" "}
    </Link>
    <span className="text-xs text-gray-500 font-azeret">
      {job.enterDate} ~ {job.leaveDate ?? "Present"}
    </span>
    <h3 className="text-xs font-azeret text-gray-500">{job.role}</h3>
  </div>
);

export default Summary;
