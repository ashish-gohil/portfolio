import Card from "../components/Card";
import Title from "../components/Title";

export default function ProjectsPage() {
  return (
    <Card>
      <div className="content z-10 h-full pt-[30px] align-top text-[#dad5d5] font-[12px] flex w-[60%] ml-[30px] flex-col">
        <Title title="Projects" />
      </div>
    </Card>
  );
}
