export default function Title({ title }: { title: string }) {
  return (
    <div className="title font-titleFont font-bold text-6xl relative top-0 ">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-400">
        {title}
      </span>
    </div>
  );
}
