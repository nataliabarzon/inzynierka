import React from "react";
import { Spotlight } from "./ui/spotlight-new";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight />
        <div className="container">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-serif font-bold leading-tight ">Exploring the Significance of Mental Health <br></br>Through Data Science</h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-center text-gray-300 font-sans">
                Discover the latest trends and insights in global health statistics. Filter by country, disease, and more to uncover meaningful patterns and gain a deeper understanding of the world's healthcare landscape.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
