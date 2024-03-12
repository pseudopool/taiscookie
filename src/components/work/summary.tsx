import { Job } from "@/consts/works";
import Image from "next/image";
import Link from "next/link";

type Props = {
  job: Job;
};

const Summary = ({ job }: Props) => (
  <div className="flex justify-center items-center gap-6 p-6">
    <Image
      src="/ktown4u.ico"
      alt="ktown4u"
      width={70}
      height={70}
      className="grayscale"
    />
    <div className="flex h-full flex-col gap-1 justify-between">
      <h2 className="text-xl font-bold">{job.name}</h2>
      <h3 className="text-gray-500 mb-1 text-sm">{job.role}</h3>
      <Link href="https://www.ktown4u.com" target="_blank">
        <span className="text-sm border-b border-black pb-1 pr-2">
          {job.link}
        </span>
      </Link>
    </div>
  </div>
);

export default Summary;
