import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import Title from "../components/Title";

export default function ProjectsPage() {
  return (
    <Card>
      <div className="content z-10 h-full pt-[30px] align-top text-[#dad5d5] font-[12px] flex w-[60%] ml-[30px] flex-col">
        <Title title="Projects" />
        <div className="flex flex-col  pt-8">
          <NavLink
            className="font-semibold mt-4 text-2xl text-blue-500 hover:text-blue-700 transition-all duration-300"
            to="https://github.com/ashish-gohil/paytm"
          >
            Payment App
          </NavLink>
          <p className="mt-2 max-w-full">
            Developed a Next.js-based payment application that allows users to
            create accounts, sign in, view wallet balances, add funds from bank
            accounts, and transfer money to friends seamlessly.
          </p>

          <NavLink
            className="font-semibold mt-4 text-2xl text-blue-500 hover:text-blue-700 transition-all duration-300"
            to="https://github.com/ashish-gohil/medium-app"
          >
            Medium App
          </NavLink>
          <p className="mt-2 max-w-full">
            A Medium Application Clone that offers a robust platform for sharing
            and exploring written content. Users can create accounts, publish
            articles, follow writers, and interact with posts through likes,
            comments, and shares.
          </p>

          <NavLink
            className="font-semibold mt-4 text-2xl text-blue-500 hover:text-blue-700 transition-all duration-300"
            to="https://github.com/ashish-gohil/user-app"
          >
            User App
          </NavLink>
          <p className="mt-2 max-w-full">
            A React application built with TypeScript that interacts with a
            backend API to manage user data. Features include a user list
            display, a form for adding new users, and routing for smooth
            navigation between pages.
          </p>
        </div>
      </div>
    </Card>
  );
}
