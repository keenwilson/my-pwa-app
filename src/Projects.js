import React, { useEffect } from "react";
import { IconCode, IconDesktop } from "./components";

function Projects(params) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-12 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-stone-600 font-semibold tracking-wide uppercase">
            Featured Projects
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Put Knowledge and Expertise to Test
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A combination of both unique and real-world software development
            projects to hone my programming and development skills
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
              This Kansas City-based BBQ food truck has its site built using a
              template-based website platform. I set up their Squarespace site,
              added pages, and integrated calendar and social media function so
              that the owners can update their events easily with no coding
              experience needed.
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
          {/* Phikul Thai Bistro */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/bG5XJHyh.jpg"
                alt="Phikul Thai Bistro"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Phikul Thai Bistro
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              The newest Thai restaurant in Kansas City's downtown market
              launched their website with a contacless menu option -- customers
              use their mobile phones to scan QR code and view an online menu.
              There is also integration to a third-party online order/delivery
              service.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://www.phikulthaibistro.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Phikul Thai Bistro Homepage"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Baramee Thai Bistro */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/3o2l2Zbh.jpg"
                alt="Baramee Thai Bistro"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Baramee Thai Bistro
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              Since opening in January 2019 ‘Baramee’ - meaning fulfilling
              yourself by making others happy in ‘Thai’ language, a Thai native
              and chef-owner, Nutnisa Hoffman and her partner, co-owner, Doug
              Hoffman, offers a taste of Northeastern Thai dishes and
              from-the-wok Thai-style cooking with the freshest produce from the
              City Market and locally grown ingredients alongside vegetarian
              options in the Kansas City's Crossroads Arts district.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://www.barameethaibistro.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Baramee Thai Bistro Homepage"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Playdate Friend Finder */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/IdQNZrxh.png"
                alt="Playdate Friend Finder"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Playdate Friend Finder Survey
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A full-stack compatibility-based Playdate Friend Finder
              application, basically a dating app for mommy friends, that
              utilized a basic survey, implemented Expressto handle routing that
              makes that data and logic accessible, and deployed to Herokuso
              other users can use it
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/FriendFinder-Survey-Node-Express"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Playdate Friend Finder Survey"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <div className="rounded-md shadow">
                  <a
                    href="https://guarded-fortress-95261.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Playdate Friend Finder Survey Homepage"
                  >
                    <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                      <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                    </span>
                  </a>
                </div>
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
              A Vue.js/Express.js web application for creating a Christmas list
              by searching items from product catalog and save those items to a
              list on MySQL Database. The user can register their username,
              email address, and password following the validation rules. If the
              account is created, the user can log in to their Christmas
              list,search for items they want to include in their list using the
              search panel. The user can add or remove the item from their saved
              items list.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/ChristmasList-Vue-Express-Passport"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Christmas List"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <div className="rounded-md shadow">
                  <a
                    href="https://tbl-christmas-wishlist.herokuapp.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Christmas List Homepage"
                  >
                    <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                      <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Google Books Search */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/XnJ9xOU.png"
                alt="Google Books Search"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Google Books Search
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A Node/Express/MongoDB web application utilizes React and Google
              Books API to let the user search and save books. This product is a
              SPA (Single Page Application) that uses react-router-dom to
              navigate, hide and show your React components without changing the
              route within Express.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/react-google-books"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Google Books Search"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* The New York Times Scraper */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/xgxg2XN.png"
                alt="The New York Times Scraper"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              The New York Times Scraper
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A web app utilizes mongoDB, Mongoose, cheerio, and express to let
              the user view and leave comments on the latest news. Whenever a
              user visits the site, the user can use a scraping tool to scrape
              stories from a news outlet, which is The New York TImes in this
              app. The user can select which section of NYT that they want to
              review: U.S., Business, Technology, Travel, and Style.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/NYT-Scraper-Node-Express-Mongoose"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github The New York Times Scraper"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
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
          {/* Eat the Burger! */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/ZAMrbw4.png"
                alt="Eat the Burger!"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Eat the Burger!
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A burger logger utilizes MySQL, Express, and Handlebars to allow
              users to create, update, and read burgers from the database.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/BurgerLogger-Node-Express-Handlebars"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Eat the Burger!"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* What's For Dinner? */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/7E4oImB.png"
                alt="What's For Dinner?"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              What's For Dinner?
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A meal plan generator browser-based app that allows the user to
              save searched recipes to weekly meal planner. This app is
              developed because busy parents often run out of ideas what to feed
              their children for dinner, and other caregivers have no clue what
              the meal plan is. In addition, keywords about kid-friendly dinner
              ideas and meal planning are frequently searched for in google.
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/WhatsForDinner-WeeklyMealPlanner"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github What's For Dinner?"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Rock-Paper-Scissors Multiplayer */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/gG14z3p.png"
                alt="Rock-Paper-Scissors Multiplayer"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Rock-Paper-Scissors Multiplayer
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              An online two-player Rock-Paper-Scissors game with the help of
              Firebase to store and sync data between users and devices in
              realtime using a cloud-hosted, NoSQL database
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/RPS-Multiplayer"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Rock-Paper-Scissors Multiplayer"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Movies GIF-Tastic */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/MFXn2D1.png"
                alt="Movies GIF-Tastic"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Movies GIF-Tastic
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A browser-based app shows the user GIPHY and OMDb results based on
              their search term and make a dynamic web page that popultes with
              gifs and snippets of information about the movie of their choice
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/giftastic"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Movies GIF-Tastic"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <div className="rounded-md shadow">
                  <a
                    href="https://keenwilson.github.io/giftastic/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Movies GIF-Tastic Homepage"
                  >
                    <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                      <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Dog Trivia Game */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/TZlqs07.png"
                alt="Dog Trivia Game"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Dog Trivia Game
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A dog-themed trivia game shows only one question until the player
              answers it or their time runs out
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/TriviaGame"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Dog Trivia Game"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <div className="rounded-md shadow">
                  <a
                    href="https://keenwilson.github.io/TriviaGame/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Dog Trivia Game Homepage"
                  >
                    <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                      <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Destination Word Guess Game */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/fK3h3o6.png"
                alt="Travel Destination Word Guess Game"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Travel Destination Word Guess Game
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A word guess game with a travel destination theme that the user
              has to guess country names of destinations around the world
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/Word-Guess-Game"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Travel Destination Word Guess Game"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <div className="rounded-md shadow">
                  <a
                    href="https://keenwilson.github.io/Word-Guess-Game/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Travel Destination Word Guess Game Homepage"
                  >
                    <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                      <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Harry Potter RPG */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/C0L5qbt.png"
                alt="Harry Potter RPG"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Harry Potter RPG
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A fully functional browser-based role playing game that involved
              interface design, state management -- keeping track of winning and
              losing stats, determining win paths, and fun!
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/unit-4-game"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Harry Potter RPG"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <div className="rounded-md shadow">
                  <a
                    href="https://keenwilson.github.io/unit-4-game/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Harry Potter RPG Homepage"
                  >
                    <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                      <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Bamazon Amazon Storefront Meme */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/QK0IE24.gif"
                alt="Bamazon Amazon Storefront Meme"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Bamazon Amazon Storefront Meme
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              An Amazon-like storefront node app taking in orders from customers
              and deplete stock from the store's inventory and allowing managers
              to view low inventory and add new product to the SQL database
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/Backend-Amazon-CLI-Node-MySQL"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Bamazon Amazon Storefront Meme"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Constructor Word Guess */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/oyBgX8Q.gif"
                alt="Constructor Word Guess"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              Constructor Word Guess
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              A command-line (CLI) word guess game using constructor functions
              to create objects representing each word to guess as well as each
              letter in each word, and using the inquirer package to prompt the
              user to guess a letter
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/Constructor-Word-Guess"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github Constructor Word Guess"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* LIRI Node Application */}
          <div className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src="https://i.imgur.com/7wyATKm.gif"
                alt="LIRI Node Application"
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-base font-semibold text-stone-700">
              LIRI Node Application
            </h3>
            <p className="mt-1 text-sm text-stone-800">
              An interactive Node-based command-line (CLI) application that will
              search Spotify for songs, Bands in Town for concerts, and OMDB for
              movies
            </p>
            <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/keenwilson/liri-node-app"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github LIRI Node Application"
                >
                  <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                    <IconCode className="h-5 w-5 mr-2" /> View Source
                  </span>
                </a>
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
