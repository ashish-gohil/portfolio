import Card from "../components/Card";

export default function Home() {
  return (
    <Card>
      <div className="content relative z-10 text-[#dad5d5] font-[12px] flex w-[40%] ml-[30px] flex-col">
        <div className="title font-titleFont font-bold text-6xl">
          <span>Ashish Gohil</span>
        </div>

        <p className="mt-10">
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
      <div className="character relative bottom-7">
        <img src="/portfolio_pic.png" style={{ height: "500px" }} alt="" />
      </div>
    </Card>
  );
}
