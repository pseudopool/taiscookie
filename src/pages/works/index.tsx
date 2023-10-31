import {WORKS} from 'consts/works';
import Work from 'components/works/work';

const Works = () => {
  return (
    <section className="p-3">
      <h2 className="text-center text-xl text-gray-text">
        Professional Experiences
      </h2>
      <ul>
        {WORKS.map(work => (
          <Work key={work.name} work={work} />
        ))}
      </ul>
    </section>
  );
};
export default Works;
