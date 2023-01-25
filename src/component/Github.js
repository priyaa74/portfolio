import React from "react";
import {BsFillBarChartFill} from 'react-icons/bs'

export default function Github() {
  return (
  <section id="github" className="container px-5 py-10 mx-auto text-center lg:px-40">
    <BsFillBarChartFill className="w-10 inline-block mb-4 h-10"/>
    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">GitHub Statistics</h1>
    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-20">
           Days I worked
          </p>
  <div className="">
    <img
    className=" m-auto mb-10 border-4 border-green-400 rounded"
    alt="gitImage1"
    src="./gitStat.png"
    />
    </div>
    <div>
    <img
    className="m-auto mb-1 border-4 border-green-400 rounded "
    alt="gitImage2"
    src="git2.png"
    />
      <figcaption className="text-lg title-font font-medium text-green-400 mb-10">Activity overview</figcaption>
  
    </div>
    <div>
    <img
     className=" m-auto mb-1 border-4 border-green-400 rounded  "
    alt="gitImage3"
    src="git3.png"
    />
    <figcaption className="text-lg title-font font-medium text-green-400 ">149 contributions in the last year</figcaption>
  </div>
  </section>
  )
   
}
