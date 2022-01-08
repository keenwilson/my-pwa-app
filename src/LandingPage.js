import React from "react";
import { Link } from "react-router-dom";
import resume from "./files/KeenWilson_SoftwareEngineer_Jan2022.pdf";

function LandingPage() {
  console.log("LandingPage is loaded");
  return (
    <div class="relative bg-stone-100 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Keen Wilson</span>
              <span className="block text-stone-600 xl:inline">...</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Keen has full-stack programming experience designing, writing, and
              deploying full-stack applications with test coverage on a weekly
              sprints CI/CD DevOps basis.
            </p>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Keen enjoys working with the entire application stack,
              collaborating with market-oriented teams to build user-focused
              applications, solving complicated problems, and delivering clean,
              functional, well-documented software in a highly collaborative,
              remote-friendly environment.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="/projects">
                  <span className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 md:py-4 md:text-lg md:px-10">
                    View Current Projects
                  </span>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-stone-700 bg-stone-100 hover:bg-stone-200 md:py-4 md:text-lg md:px-10"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1518112166137-85f9979a43aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default LandingPage;
