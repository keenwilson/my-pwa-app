import React from "react";
import { ScrollButton } from ".";

function TechList({ componentKey, title, category }) {
  return (
    <div key={`${componentKey}-${title}`} className="relative">
      <ScrollButton />
      <div className="hover:bg-stone-500 hover:ring-stone-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-gray-200 shadow-sm">
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Title</dt>
            <dd className="group-hover:text-white font-semibold text-gray-900">
              {title}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Category</dt>
            <dd className="group-hover:text-stone-200">{category}</dd>
          </div>
          <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4"></div>
        </dl>
      </div>
    </div>
  );
}

export default TechList;
