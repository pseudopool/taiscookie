import ToggleGroup from "@/components/toggle-group";
import Image from "next/image";
import Link from "next/link";

const skills = ["Features", "UI/UX", "Performance"];

const WorksPage = () => (
  <section className="w-full max-w-screen-sm items-center flex flex-col p-8">
    <div className="flex w-full items-center gap-6 font-mono p-6">
      <Image src="/ktown4u.ico" alt="ktown4u" width={80} height={80} />
      <div className="flex h-full flex-col gap-2 justify-between">
        <h2 className="text-xl font-bold">케이타운포유</h2>
        <h3 className="text-gray-500 mb-1 text-sm">
          Software Engineer, Front-end
        </h3>
        <Link href="https://www.ktown4u.com" target="_blank">
          <span className="bg-gray-100 text-sm px-2 py-1 rounded-lg text-gray-500">
            ktown4u.com
          </span>
        </Link>
      </div>
    </div>
    <ToggleGroup groups={skills} />
  </section>
);

export default WorksPage;
