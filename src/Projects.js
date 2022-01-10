import React, { useEffect, useState } from "react";
import { ProjectListItem, ScrollButton } from "./components";

const projectLists = [
  {
    title: "Smoke n Seoul",
    img_url: "https://i.imgur.com/Bcmb4WKh.jpg",
    description: `This Kansas City-based BBQ food truck has its site built using a
template-based website platform. I set up their Squarespace site,
added pages, and integrated calendar and social media function so
that the owners can update their events easily with no coding
experience needed.`,
    source_url: null,
    preview_url: "https://smokenseoul.com/",
  },
  {
    title: "Phikul Thai Bistro",
    img_url: "https://i.imgur.com/bG5XJHyh.jpg",
    description: `The newest Thai restaurant in Kansas City's downtown market
    launched their website with a contacless menu option -- customers
    use their mobile phones to scan QR code and view an online menu.
    There is also integration to a third-party online order/delivery
    service.`,
    source_url: null,
    preview_url: "https://www.phikulthaibistro.com/",
  },
  {
    title: "Baramee Thai Bistro",
    img_url: "https://i.imgur.com/3o2l2Zbh.jpg",
    description: `Since opening in January 2019 ‘Baramee’ - meaning fulfilling
    yourself by making others happy in ‘Thai’ language, a Thai native
    and chef-owner, Nutnisa Hoffman and her partner, co-owner, Doug
    Hoffman, offers a taste of Northeastern Thai dishes and
    from-the-wok Thai-style cooking with the freshest produce from the
    City Market and locally grown ingredients alongside vegetarian
    options in the Kansas City's Crossroads Arts district.`,
    source_url: null,
    preview_url: "https://www.barameethaibistro.com/",
  },
  {
    title: "Playdate Friend Finder Survey",
    img_url: "https://i.imgur.com/IdQNZrxh.png",
    description: `A full-stack compatibility-based Playdate Friend Finder
    application, basically a dating app for mommy friends, that
    utilized a basic survey, implemented Expressto handle routing that
    makes that data and logic accessible, and deployed to Herokuso
    other users can use it.`,
    source_url:
      "https://github.com/keenwilson/FriendFinder-Survey-Node-Express",
    preview_url: null,
  },
  {
    title: "Mali Thai Bistro",
    img_url: "https://i.imgur.com/27hytyT.png",
    description: `This Single Page Application (SPA) is "mobile-first" designed such
    as a collapsible navbar and a responsive menu section making this
    web searchable and easy-to-read on small screens. In order to meet
    the user's expectation when they check the restaurant's website,
    this web app integrates the restaurant's location from Google
    Maps, news and events update from Facebook page, and a floating
    'scroll to top' arrow-up button for easy navigation.`,
    source_url: null,
    preview_url: "https://www.malithaibistro.com/",
  },
  {
    title: "Christmas List",
    img_url: "https://i.imgur.com/vOsrlmA.png",
    description: `A Vue.js/Express.js web application for creating a Christmas list
    by searching items from product catalog and save those items to a
    list on MySQL Database. The user can register their username,
    email address, and password following the validation rules. If the
    account is created, the user can log in to their Christmas
    list,search for items they want to include in their list using the
    search panel. The user can add or remove the item from their saved
    items list.`,
    source_url:
      "https://github.com/keenwilson/ChristmasList-Vue-Express-Passport",
    preview_url: null,
  },
  {
    title: "Google Books Search",
    img_url: "https://i.imgur.com/XnJ9xOU.png",
    description: `A Node/Express/MongoDB web application utilizes React and Google
      Books API to let the user search and save books. This product is a
      SPA (Single Page Application) that uses react-router-dom to
      navigate, hide and show your React components without changing the
      route within Express.`,
    source_url: "https://github.com/keenwilson/react-google-books",
    preview_url: null,
  },
  {
    title: "The New York Times Scraper",
    img_url: "https://i.imgur.com/xgxg2XN.png",
    description: `A web app utilizes mongoDB, Mongoose, cheerio, and express to let
    the user view and leave comments on the latest news. Whenever a
    user visits the site, the user can use a scraping tool to scrape
    stories from a news outlet, which is The New York TImes in this
    app. The user can select which section of NYT that they want to
    review: U.S., Business, Technology, Travel, and Style.`,
    source_url:
      "https://github.com/keenwilson/NYT-Scraper-Node-Express-Mongoose",
    preview_url: null,
  },
  {
    title: "Abacus Class Record",
    img_url: "https://i.imgur.com/VJSc88c.png",
    description: `Abacus is the visual platform that gives teachers perspective on
  class attendances, assignments, and grades. Our product team aims
  to provide teachers with a way to clearly visualize their
  analytics and provide at-a-glance insights into what's going on in
  their classes.`,
    source_url: "https://github.com/keenwilson/Abacus-Class-Record",
    preview_url: null,
  },
  {
    title: "What's For Dinner?",
    img_url: "https://i.imgur.com/7E4oImB.png",
    description: `A meal plan generator browser-based app that allows the user to
save searched recipes to weekly meal planner. This app is
developed because busy parents often run out of ideas what to feed
their children for dinner, and other caregivers have no clue what
the meal plan is. In addition, keywords about kid-friendly dinner
ideas and meal planning are frequently searched for in google.`,
    source_url:
      "https://github.com/keenwilson/WhatsForDinner-WeeklyMealPlanner",
    preview_url: null,
  },
  {
    title: "Eat the Burger!",
    img_url: "https://i.imgur.com/ZAMrbw4.png",
    description: `A burger logger utilizes MySQL, Express, and Handlebars to allow
users to create, update, and read burgers from the database.`,
    source_url:
      "https://github.com/keenwilson/BurgerLogger-Node-Express-Handlebars",
    preview_url: null,
  },
  {
    title: "Rock-Paper-Scissors Multiplayer",
    img_url: "https://i.imgur.com/gG14z3p.png",
    description: `An online two-player Rock-Paper-Scissors game with the help of
Firebase to store and sync data between users and devices in
realtime using a cloud-hosted, NoSQL database.`,
    source_url: "https://github.com/keenwilson/RPS-Multiplayer",
    preview_url: null,
  },
  {
    title: "Movies GIF-Tastic",
    img_url: "https://i.imgur.com/MFXn2D1.png",
    description: `A browser-based app shows the user GIPHY and OMDb results based on
their search term and make a dynamic web page that popultes with
gifs and snippets of information about the movie of their choice.`,
    source_url: "https://github.com/keenwilson/giftastic",
    preview_url: null,
  },
  {
    title: "Dog Trivia Game",
    img_url: "https://i.imgur.com/TZlqs07.png",
    description: `A dog-themed trivia game shows only one question until the player
answers it or their time runs out`,
    source_url: "https://github.com/keenwilson/TriviaGame",
    preview_url: "https://keenwilson.github.io/TriviaGame/",
  },
  {
    title: "Travel Destination Word Guess Game",
    img_url: "https://i.imgur.com/fK3h3o6.png",
    description: `A word guess game with a travel destination theme that the user
has to guess country names of destinations around the world`,
    source_url: "https://github.com/keenwilson/Word-Guess-Game",
    preview_url: "https://keenwilson.github.io/Word-Guess-Game/",
  },
  {
    title: "Harry Potter Role-Playing Game (RPG)",
    img_url: "https://i.imgur.com/C0L5qbt.png",
    description: `A fully functional browser-based role playing game that involved
interface design, state management -- keeping track of winning and
losing stats, determining win paths, and fun!`,
    source_url: "https://github.com/keenwilson/unit-4-game",
    preview_url: "https://keenwilson.github.io/unit-4-game/",
  },
  {
    title: "Bamazon Amazon Storefront Meme",
    img_url: "https://i.imgur.com/QK0IE24.gif",
    description: `An Amazon-like storefront node app taking in orders from customers
and deplete stock from the store's inventory and allowing managers
to view low inventory and add new product to the SQL database`,
    source_url: "https://github.com/keenwilson/Backend-Amazon-CLI-Node-MySQL",
    preview_url: null,
  },
  {
    title: "Constructor Word Guess",
    img_url: "https://i.imgur.com/oyBgX8Q.gif",
    description: `A command-line (CLI) word guess game using constructor functions
to create objects representing each word to guess as well as each
letter in each word, and using the inquirer package to prompt the
user to guess a letter`,
    source_url: "https://github.com/keenwilson/Constructor-Word-Guess",
    preview_url: null,
  },
  {
    title: "LIRI Node Application",
    img_url: "https://i.imgur.com/7wyATKm.gif",
    description: `An interactive Node-based command-line (CLI) application that will
search Spotify for songs, Bands in Town for concerts, and OMDB for
movies`,
    source_url: "https://github.com/keenwilson/liri-node-app",
    preview_url: null,
  },
];

let arrayForHoldingPosts = [];

function Projects(params) {
  const [projectsToShow, setProjectsToShow] = useState([]);
  const [next, setNext] = useState(4);
  const postsPerPage = 4;

  const loopWithSlice = (start, end) => {
    const slicedPosts = projectLists.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setProjectsToShow(arrayForHoldingPosts);
  };

  const handleShowMorePosts = () => {
    const thisEnd = next + postsPerPage;
    loopWithSlice(next, thisEnd);

    if (thisEnd < projectLists.length) {
      setNext(thisEnd);
    } else {
      setNext(null);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    arrayForHoldingPosts = [];
    loopWithSlice(0, postsPerPage);
  }, []);

  return (
    <div className="relative py-12 bg-stone-100">
      <ScrollButton />
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
          {projectsToShow.map((item, i) => {
            return (
              <ProjectListItem
                key={`product-list-item-${item.title}-${i}`}
                title={item.title}
                img_url={item.img_url}
                description={item.description}
                source_url={item.source_url}
                preview_url={item.preview_url}
              />
            );
          })}
        </div>
        {next && (
          <div className="flex items-center justify-center space-x-1">
            <button
              onClick={handleShowMorePosts}
              className="px-4 py-2 text-stone-700 bg-stone-200 rounded-md hover:bg-stone-400 hover:text-white"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Projects;
