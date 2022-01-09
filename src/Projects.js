import React from "react";
import { IconCode, IconDesktop } from "./components";

function Projects(params) {
  return (
    <div className="py-12 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-stone-600 font-semibold tracking-wide uppercase">
            Featured Projects
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Put Knowledge and Expertise to
            Test
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A combination of both unique and real-world software development projects to hone my programming and development skills
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* Smoke n Seoul */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/Bcmb4WKh.jpgg"
                alt="Smoke n Seoul"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Smoke n Seoul
            </h3>
            <p className="mt-1 text-sm text-stone-800">
            This Kansas City-based BBQ food truck has its site built using a template-based website platform. I set up their Squarespace site, added pages, and integrated calendar and social media function so that the owners can update their events easily with no coding experience needed.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://smokenseoul.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Smoke n Seoul Homepage"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Mali Thai Bistro */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/27hytyT.png"
                alt="Mali Thai Bistro"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Mali Thai Bistro
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              This Single Page Application (SPA) is "mobile-first" designed such
              as a collapsible navbar and a responsive menu section making this
              web searchable and easy-to-read on small screens. In order to meet
              the user's expectation when they check the restaurant's website,
              this web app integrates the restaurant's location from Google
              Maps, news and events update from Facebook page, and a floating
              'scroll to top' arrow-up button for easy navigation.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://www.malithaibistro.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Mali Thai Bistro Homepage"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Abacus Class Record */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/VJSc88c.png"
                alt="Abacus Class Record"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Abacus Class Record
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              Abacus is the visual platform that gives teachers perspective on
              class attendances, assignments, and grades. Our product team aims
              to provide teachers with a way to clearly visualize their
              analytics and provide at-a-glance insights into what's going on in
              their classes.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/Abacus-Class-Record"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Abacus Class Record"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
            </div>
          </div>
           {/* Christmas List */}
           <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/vOsrlmA.png"
                alt="Christmas List "
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Christmas List 
            </h3>
            <p className="mt-1 text-sm text-stone-800">
            A Vue.js/Express.js web application for creating a Christmas list by searching items from product catalog and save those items to a list on MySQL Database. The user can register their username, email address, and password following the validation rules. If the account is created, the user can log in to their Christmas list,search for items they want to include in their list using the search panel. The user can add or remove the item from their saved items list.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/ChristmasList-Vue-Express-Passport"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Christmas List "
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
            <div className="rounded-md shadow">
            <a
                  href="https://tbl-christmas-wishlist.herokuapp.com/#/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Smoke n Seoul Homepage"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                  </span>
                </a>
            </div>
            </div>
            </div>
           
          </div>

          {/* More products... */}
        </div>
      </div>
    </div>
  );
}
export default Projects;
