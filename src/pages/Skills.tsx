import Card from "../components/Card";
import Title from "../components/Title";

export default function SkillsPage() {
  return (
    <Card>
      <div className="content z-10 h-full pt-[30px] align-top text-[#dad5d5] font-[12px] flex w-[60%] ml-[30px] flex-col">
        <Title title="Skills Overview" />
        <div className="h-full w-full justify-center flex flex-col">
          <div>
            <h3 className="font-semibold">Frontend Expertise</h3>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>React.js & TypeScript</li>
              <li>Next.js (SSR, SSG)</li>
              <li>Redux Toolkit & Context API</li>
              <li>Tailwind CSS & Material UI</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Backend & RESTful API Development</h3>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>Node.js & Express.js</li>
              <li>MongoDB & Mongoose ORM</li>
              <li>PostgreSQL & Prisma ORM</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">DevOps & Cloud Infrastructure</h3>
            <ul className="list-disc list-inside ml-4 mb-4">
              <li>AWS </li>
              <li>CI/CD pipelines</li>
              <li>Docker & Docker Compose</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
