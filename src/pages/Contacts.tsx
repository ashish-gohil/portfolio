import Card from "../components/Card";
import Title from "../components/Title";

export default function ContactPage() {
  return (
    <Card>
      <div className="content z-10 h-full pt-[30px] align-top text-[#dad5d5] font-[12px] flex w-[60%] ml-[30px] flex-col">
        <Title title="Contact Me" />
        <div className="text-[#dad5d5] font-[12px] h-full flex flex-col justify-center items-center">
          <div className="text-center mb-6">
            <p className="text-4xl font-bold">Ashish Gohil</p>
            <p className="text-3xl pt-4">
              Email:{" "}
              <a
                href="mailto:ashish@example.com"
                className="text-blue-500 hover:underline"
              >
                ashishgohil148@gmail.com
              </a>
            </p>
            <p className="text-3xl pt-3">
              Phone:{" "}
              <a className="text-blue-500 hover:underline">+91 7048459816</a>
            </p>
            <p className="text-3xl pt-3">Location: Ahmedabad, Gujarat, India</p>
          </div>
          <div className="flex gap-6 mt-6">
            <a
              href="www.linkedin.com/in/ashish-gohil-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-3xl"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/ashish-gohil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-3xl"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
