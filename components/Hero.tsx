import React from "react";
import { Spotlight } from "./ui/spotlight-new";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MagicButton } from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight />

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center font-serif font-bold leading-tight ">
                Exploring the Significance of Mental Health <br></br>Through Data Science
            </h1>
            <TextGenerateEffect 
                words="Discover the latest trends and insights in global health statistics. Filter by country, disease, and more to uncover meaningful patterns and gain a deeper understanding of the world's healthcare landscape."
                className="mt-4 text-lg sm:text-l lg:text-xl text-center text-gray-300 font-sans" 
                duration={0.5}
            />
        </div>
        <a className="flex justify-center mt-8" href="#explore"> 
                <MagicButton />
            </a>
      </div>

  );
};

export default Hero;
