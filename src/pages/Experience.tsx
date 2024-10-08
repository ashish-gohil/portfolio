import Card from "../components/Card";

export default function ExperiencePage() {
  return (
    <Card>
      <div className="content relative z-10 text-[#dad5d5] font-[12px] flex w-[40%] ml-[30px] flex-col">
        <div className="title font-titleFont font-bold text-6xl">
          <span>Experience Summery</span>
        </div>

        <h3 className="font-semibold">Frontend Development</h3>
        <p>
          Over 2.5 years of experience in developing responsive, dynamic web
          applications using React at TCS. Strong expertise in TypeScript for
          type-safe code and using Bootstrap and Tailwind CSS for modern,
          scalable UI/UX. Proficient in state management using Redux Toolkit and
          implementing server-side rendering (SSR) with Next.js.
        </p>

        <h3 className="font-semibold mt-4">Backend Development</h3>
        <p>
          1.5+ years of experience working with Node.js and Express in backend
          development. Built and maintained RESTful APIs with a focus on
          scalability and performance. Integrated MongoDB with Mongoose ORM for
          effective data management and applied Prisma ORM for PostgreSQL
          databases, handling complex queries and relations.
        </p>

        <h3 className="font-semibold mt-4">DevOps & Cloud Knowledge</h3>
        <p>
          Knowledgeable in AWS services, cloud deployments, and managing CI/CD
          pipelines for automating deployments. Familiar with Docker concepts
          for containerization and Docker Compose for orchestrating
          multi-container environments.
        </p>
      </div>
    </Card>
  );
}
