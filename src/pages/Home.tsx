import Card from "../components/Card";
import Title from "../components/Title";

export default function Home() {
  return (
    <Card>
      <div className=" content z-10 h-full pt-[30px] align-top text-[#dad5d5] font-[12px] flex w-[60%] ml-[30px] flex-col">
        <Title title="Ashish Gohil" />
        <p className="mt-10 text-xl">
          A software engineer, started with a focus on frontend development
          using React.js and Next.js. Over time, I expanded my skill set,
          gaining backend experience with Node.js and AWS, and mastering
          database management with PostgreSQL.
          <br />
          <br />
          While I began with foundational knowledge, I continuously pushed
          myself to improve, handling full-stack projects and collaborating with
          teams at TCS. Now, with over two years of experience, I've grown into
          a versatile developer, skilled at building scalable web applications.
        </p>
      </div>
      <div className="character relative bottom-5">
        <img
          src="/portfolio_pic.png"
          style={{ height: "85vh", width: "16vw" }}
          alt=""
        />
      </div>
    </Card>
  );
}
