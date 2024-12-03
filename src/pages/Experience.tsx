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
            Over 3 years of experience in developing responsive, dynamic web
            applications using React at TCS. Strong expertise in TypeScript for
            type-safe code and using Material UI and Tailwind CSS for modern,
            scalable UI/UX. Proficient in state management using Redux Toolkit
            and implementing server-side rendering (SSR) with Next.js.
          </p>

          <h3 className="font-semibold mt-4 text-2xl text-blue-500">
            Backend Development
          </h3>
          <p className="mt-2 max-w-full">
            2.5 years of experience in backend development using Node.js and
            Express, focusing on building scalable and high-performance RESTful
            APIs. Skilled in integrating MongoDB with Mongoose and PostgreSQL
            with Prisma ORM for managing complex data relationships. Hands-on
            experience deploying backend services on AWS, utilizing Lambda, SQS,
            Secrets Manager, Parameter Store, CloudFormation, and CloudWatch.
          </p>

          <h3 className="font-semibold mt-4 text-2xl text-blue-500">
            DevOps & Cloud Knowledge
          </h3>
          <p className="mt-2 max-w-full">
            Familiar with deploying projects on AWS, with both recent projects
            hosted on the platform. Experienced with CloudFront, CloudFormation,
            and CloudWatch for infrastructure and monitoring. Have basic
            knowledge of CI/CD pipelines and Docker, applied during a learning
            project.
          </p>
        </div>
      </div>
    </Card>
  );
}
