import React from "react";

import {HiHeart} from 'react-icons/hi'


export default function Footer(){
    return (
        <div className="bg-black text-center">
        <div className="inline-flex space-x-4 justify-center text-center h-20 w-full bg-black mt-4">
            <a href="https://github.com/priyaa74" target="_blank">
                <img  alt="github"
                src="./images.png"
                className="w-6 h-8 rounded ml-3"/>
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/07-priya-varshney/" target="_blank">
                <img alt="linked"
                src="./linkedIn.png"
                className="w-6 h-8 rounded ml-3"
                />
                LinkedIn
            </a>
            <a href="https://twitter.com/PriyaVa22310248" target="_blank">
                <img alt="twitter"
                src="./twitter.png"
                className="w-6 h-8 ml-3"
                />
                Twitter
            </a>
        </div>
        <h3 className="inline-flex ">Created By Priya <HiHeart className="text-green-500 w-6 h-6 mr-4" /></h3>
             
        </div>
    )
};
