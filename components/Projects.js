import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "Apple Quiz",
    description: "This is a quiz app made with my crew.",
    href: "https://github.com/EmelieJohanna",
  },
  {
    id: 1,
    title: "Apple Quiz",
    description: "This is a quiz app made with my crew.",
    href: "https://github.com/EmelieJohanna",
  },
  {
    id: 1,
    title: "Apple Quiz",
    description: "This is a quiz app made with my crew.",
    href: "https://github.com/EmelieJohanna",
  },
  {
    id: 1,
    title: "Apple Quiz",
    description: "This is a quiz app made with my crew.",
    href: "https://github.com/EmelieJohanna",
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          href={project.href}
        />
      ))}
    </div>
  );
}
