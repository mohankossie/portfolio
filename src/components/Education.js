//src/components/Education.js
import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { education } from "../data";

export default function Education() {
    return (
        <section id="education">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <AcademicCapIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4" >
                        Education
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {education.map((education) => (
                        <div key={education} className="p-2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <AcademicCapIcon className="text-red-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {education}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}