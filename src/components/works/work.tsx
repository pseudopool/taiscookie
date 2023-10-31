import Brief from './brief';
import Tag from './tag';
import {Work} from 'interfaces/work';

const Work = ({work}: {work: Work}) => (
  <li key={work.name} className="flex flex-col p-4">
    <Brief
      period={work.period}
      name={work.name}
      location={work.location}
      role={work.role}
    />
    <div className="text-gray-text py-2 break-keep">{work.description}</div>
    <ul className="my-2 p-2 flex flex-wrap gap-y-3">
      {work.tech.map((skill: string) => (
        <Tag skill={skill} />
      ))}
    </ul>
    <ul className="flex flex-col gap-2 p-2 pl-0">
      {work.projects.map(project => (
        <li key={project.name}>
          <h4 className="text-gray-text font-semibold">
            {project.description}
          </h4>
          <span className="text-gray-span text-sm">{project.period}</span>
          <ul className="flex flex-col gap-2 p-2">
            {project.features.map(f => (
              <li className="text-gray-text text-sm ml-4">* {f}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </li>
);

export default Work;
