import Summary from "@/components/work/summary";
import Works from "@/components/work/works";
import { jobs } from "@/consts/works";
import { Fragment } from "react";

const WorksPage = () => (
  <section className="w-full max-w-screen-md">
    <ul className="flex flex-col w-full items-center">
      {jobs.map((job) => (
        <Fragment key={job.name}>
          <Summary job={job} />
          <Works works={job.works} />
        </Fragment>
      ))}
    </ul>
  </section>
);

export default WorksPage;
