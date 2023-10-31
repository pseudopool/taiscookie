const Tag = ({skill}: {skill: string}) => (
  <li
    key={skill}
    className="bg-gray-bg py-0.5 px-3 rounded-lg text-gray-text mr-2"
  >
    {skill}
  </li>
);

export default Tag;
