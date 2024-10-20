import Card from "../components/Card";
import Title from "../components/Title";

export default function ExperiencePage() {
  return (
    <Card>
      <div className="content z-10 h-full pt-[30px] align-top text-[#dad5d5] font-[12px] flex w-[60%] ml-[30px] flex-col">
        <Title title="Experience Summery" />
        <div>
          <h3 className="font-semibold mt-4 text-2xl text-blue-500 ">
            Frontend Development
          </h3>
          <p className="mt-2 max-w-full">
            Over 2.5 years of experience in developing responsive, dynamic web
            applications using React at TCS. Strong expertise in TypeScript for
            type-safe code and using Bootstrap and Tailwind CSS for modern,
            scalable UI/UX. Proficient in state management using Redux Toolkit
            and implementing server-side rendering (SSR) with Next.js.
          </p>

          <h3 className="font-semibold mt-4 text-2xl text-blue-500 ">
            Backend Development
          </h3>
          <p className="mt-2 max-w-full">
            1.5+ years of experience working with Node.js and Express in backend
            development. Built and maintained RESTful APIs with a focus on
            scalability and performance. Integrated MongoDB with Mongoose ORM
            for effective data management and applied Prisma ORM for PostgreSQL
            databases, handling complex queries and relations.
          </p>

          <h3 className="font-semibold mt-4 text-2xl text-blue-500 ">
            DevOps & Cloud Knowledge
          </h3>
          <p className="mt-2 max-w-full">
            Knowledgeable in AWS services, cloud deployments, and managing CI/CD
            pipelines for automating deployments. Familiar with Docker concepts
            for containerization and Docker Compose for orchestrating
            multi-container environments.
          </p>
        </div>
      </div>
    </Card>
  );
}
