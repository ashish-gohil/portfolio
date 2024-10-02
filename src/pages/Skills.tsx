import Card from "../components/Card";

export default function SkillsPage() {
  return (
    <Card>
      <div className="content relative z-10 text-[#dad5d5] font-[12px] flex w-[40%] ml-[30px] flex-col">
        <div className="title font-titleFont font-bold text-6xl">
          <span>Skills Overview</span>
        </div>

        <h3 className="font-semibold">Frontend Expertise</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>React.js & TypeScript</li>
          <li>Next.js (SSR, SSG)</li>
          <li>Redux Toolkit & Context API</li>
          <li>Tailwind CSS & Material UI</li>
        </ul>

        <h3 className="font-semibold">Backend & RESTful API Development</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Node.js & Express.js</li>
          <li>MongoDB & Mongoose ORM</li>
          <li>PostgreSQL & Prisma ORM</li>
        </ul>

        <h3 className="font-semibold">DevOps & Cloud Infrastructure</h3>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>AWS </li>
          <li>CI/CD pipelines</li>
          <li>Docker & Docker Compose</li>
        </ul>
      </div>
    </Card>
  );
}
