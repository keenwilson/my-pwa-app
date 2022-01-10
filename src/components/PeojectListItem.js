import React from "react";
import { IconCode, IconDesktop } from "../components";

function ProjectListItem({
  title,
  img_url,
  description,
  source_url,
  preview_url,
}) {
  return (
    <div className="group">
      <div className="w-full aspect-w-1 aspect-h-1 bg-stone-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={img_url}
          alt={title}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-stone-700">{title}</h3>
      <p className="mt-1 text-sm text-stone-800">{description}</p>
      <div className="mt-5 mb-5 sm:mt-8 sm:mb-8 sm:flex sm:justify-start lg:justify-center">
        {source_url && (
          <div className="rounded-md shadow">
            <a
              href={source_url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Github ${{ title }}`}
            >
              <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                <IconCode className="h-5 w-5 mr-2" /> View Source
              </span>
            </a>
          </div>
        )}
        <div className="mt-3 sm:mt-0 sm:ml-3">
          {preview_url && (
            <div className="rounded-md shadow">
              <a
                href={preview_url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${{ title }} Page`}
              >
                <span className="w-full flex items-center justify-center px-1 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-stone-500 hover:bg-stone-400 md:py-1 md:text-base md:px-2">
                  <IconDesktop className="h-5 w-5 mr-2" /> Live Preview
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectListItem;
