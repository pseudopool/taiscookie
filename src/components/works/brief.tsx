const Brief = ({
  period,
  name,
  role,
  location,
}: {
  period: string;
  name: string;
  role: string;
  location: string;
}) => (
  <div>
    <h3 className="text-xl font-semibold text-main">{name}</h3>
    <p>{role}</p>
    <span className="text-gray-span font-semibold">{period}</span>
    <span className="text-gray-span">{location}</span>
  </div>
);

export default Brief;
