import React, { useState, useEffect } from "react";
import TechList from "./components/TechList";

function TechStack({ title }) {
  const frontEndtechStackData = [
    {
      key: "frontend1",
      title: "HTML",
      category: "Front End",
    },
    {
      key: "frontend2",
      title: "CSS",
      category: "Front End",
    },
    {
      key: "frontend3",
      title: "LESS",
      category: "Front End",
    },
    {
      key: "frontend4",
      title: "SASS",
      category: "Front End",
    },
    {
      key: "frontend5",
      title: "JavaScript",
      category: "Front End",
    },
    {
      key: "frontend6",
      title: "React Js",
      category: "Front End",
    },
    {
      key: "frontend7",
      title: "Jest",
      category: "Front End",
    },
    {
      key: "frontend8",
      title: "Enzyme",
      category: "Front End",
    },
  ];

  const backEndTechStackData = [
    {
      key: "backend1",
      title: "Node Js",
      category: "Back End",
    },
    {
      key: "Backend2",
      title: "Express Js",
      category: "Back End",
    },
    {
      key: "Backend3",
      title: "Flask - Python Web Framework",
      category: "Back End",
    },
    {
      key: "Backend4",
      title: "Unittest - Python Standard Library",
      category: "Back End",
    },
    {
      key: "Backend5",
      title: "Pandas - Python DataFrames",
      category: "Back End",
    },
    {
      key: "Backend6",
      title: "Python Testing",
      category: "Back End",
    },
    {
      key: "Backend7",
      title: "Python Web Scraping",
      category: "Back End",
    },
    {
      key: "Backend9",
      title: "AWS Serverless",
      category: "Event-driven Integration",
    },
    {
      key: "Backend11",
      title: "AWS API Gateway",
      category: "API Management with Custom Authorizer",
    },
    {
      key: "Backend12",
      title: "AWS Lambda",
      category: "Event-driven Compute",
    },
    {
      key: "Backend13",
      title: "AWS SES",
      category: "Email Service",
    },
    {
      key: "Backend14",
      title: "AWS SQS",
      category: "App Integration",
    },
    {
      key: "Backend15",
      title: "AWS SNS",
      category: "App Integration",
    },
    {
      key: "Backend16",
      title: "AWS CloudWatch",
      category: "Monitoring",
    },
  ];

  const databaseTechStackData = [
    {
      key: "database0",
      title: "AWS S3",
      category: "Cloud Storage",
    },
    {
      key: "database1",
      title: "AWS DynamoDB",
      category: "NoSQL Database",
    },
    {
      key: "database2",
      title: "AWS RDS",
      category: "Relational Database",
    },
    {
      key: "database3",
      title: "Aws Athena",
      category: "Data ETL - extract, transform, load",
    },
    {
      key: "database4",
      title: "Aws Glue",
      category: "Data ETL - extract, transform, load",
    },
    {
      key: "database5",
      title: "AWS Quicksight",
      category: "Business Intelligence ",
    },
    {
      key: "database6",
      title: "PySpark",
      category: "Big Data Processor",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filterText, setFilterText] = useState("");
  const [filteredFrontEnd, setFilteredFrontEnd] = useState(
    frontEndtechStackData
  );
  const [filteredBackEnd, setFilteredBackEnd] = useState(backEndTechStackData);
  const [filteredDatabase, setFilteredDatabase] = useState(
    databaseTechStackData
  );

  const handleFilterTextChange = (e) => {
    const newFilterText = e.target.value.toLocaleLowerCase();
    console.log("newFilterText", newFilterText);
    setFilterText(newFilterText);

    const filteredFrontEndItems = frontEndtechStackData.filter(
      (item) =>
        item.title.toLocaleLowerCase().includes(newFilterText) ||
        item.category.toLocaleLowerCase().includes(newFilterText)
    );
    setFilteredFrontEnd(filteredFrontEndItems);

    const filteredBackEndItems = backEndTechStackData.filter(
      (item) =>
        item.title.toLocaleLowerCase().includes(newFilterText) ||
        item.category.toLocaleLowerCase().includes(newFilterText)
    );
    setFilteredBackEnd(filteredBackEndItems);

    const filteredDatabaseItems = databaseTechStackData.filter(
      (item) =>
        item.title.toLocaleLowerCase().includes(newFilterText) ||
        item.category.toLocaleLowerCase().includes(newFilterText)
    );
    setFilteredDatabase(filteredDatabaseItems);

    // if (newFilterText === "" || newFilterText.length === 0) {
    //   setFilteredFrontEnd(frontEndtechStackData)
    //   setFilteredBackEnd(backEndTechStackData)
    //   setFilteredDatabase(databaseTechStackData)
    // }
  };
  return (
    <div className="py-12 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-stone-600 font-semibold tracking-wide uppercase">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tools I Have Been Working With
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            The combination of technologies I have used in a team setting to
            build, run, and monitor production-level applications.
          </p>
        </div>

        <div className="bg-stone-100 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
          <form className="group relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-stone-500"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="focus:ring-2 focus:ring-stone-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm"
              type="text"
              aria-label="Filter tools"
              placeholder="Filter tools..."
              onChange={handleFilterTextChange}
            />
          </form>
          <div class="grid md:grid lg:grid-cols-4 md:grid-cols-3 md:gap-x-8 md:gap-y-10 xs:grid-cols-1 sm:grid-cols-1 gap-4">
            <div class="...">
              <p className="text-center my-2 text-white font-semibold text-stone-900 leading-8 tracking-tight text-base sm:text-xl">
                Front End
              </p>
              <dl className="space-y-10 md:space-y-0 md:grid lg:grid-cols-2 md:gap-x-8 md:gap-y-10 sm:grid sm:grid-cols-1">
                {filteredFrontEnd.map((item, i) => {
                  return (
                    <TechList
                      key={item.key}
                      title={item.title}
                      category={item.category}
                    />
                  );
                })}
              </dl>
            </div>
            <div class="... lg:col-span-2">
              <p className="text-center my-2 text-white font-semibold text-stone-900 leading-8 tracking-tight text-base sm:text-xl">
                Back End
              </p>
              <dl className="space-y-10 md:space-y-0 md:grid lg:grid-cols-3 lg:gap-x-8 md:gap-y-10 sm:grid sm:grid-cols-1">
                {filteredBackEnd.map((item, i) => {
                  return (
                    <TechList
                      key={item.key}
                      title={item.title}
                      category={item.category}
                    />
                  );
                })}
              </dl>
            </div>
            <div class="...">
              <p className="text-center my-2 text-white font-semibold text-stone-900 leading-8 tracking-tight text-base sm:text-xl">
                Data Management
              </p>
              <dl className="space-y-10 md:space-y-0 md:grid lg:grid-cols-2 lg:gap-x-8 md:gap-y-10 sm:grid sm:grid-cols-1">
                {filteredDatabase.map((item, i) => {
                  return (
                    <TechList
                      key={item.key}
                      title={item.title}
                      category={item.category}
                    />
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
