import React from "react";




function Footer(){
    return (
        <div className="bg-black text-center">
        <div className="inline-flex space-x-4 justify-center text-center h-20 w-full bg-black mt-4">
            <a href="https://github.com/priyaa74">
                <img alt="github"
                src="./images.png"
                className="w-6 h-8 rounded"/>
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/priya-varshney-7b9b551b1/">
                <img alt="linked"
                src="./linkedIn.png"
                className="w-6 h-8 rounded"
                />
                LinkedIn
            </a>
            <a href="https://twitter.com/PriyaVa22310248">
                <img alt="twitter"
                src="./twitter.png"
                className="w-6 h-8"
                />
                Twitter
            </a>
        </div>
        <h3 className="inline-flex ">Created By Priya </h3>
             
        </div>
    )
}

export default Footer;