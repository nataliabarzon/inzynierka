import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function ExplorePage() {
    return (
      <div >
        <Spotlight />
        <div className="container flex">
            <div className="left-container items-center">
                <div>
                    <TextGenerateEffect 
                        words="Why Should You Care?"
                        className="text-4xl sm:text-2xl lg:text-3xl text-right text-white font-serif"    
                    />
                    <TextGenerateEffect
                        words="According to the WHO, depression is the leading cause of disability, and 90% of suicides link to untreated conditions. Mental illness costs the global economy $1 trillion yearly (WHO) and raises the risk of chronic diseases."
                        className="m-10% mt-4 text-base text-justify text-gray-300 font-sans"
                    />
                    <div className="flex justify-center p-4">
                        <button className="btn-global bg-sky-500 transition duration-300 hover:bg-sky-600">Find Out</button>
                    </div>
                </div>
            </div>

            <div className="right-container">
                <span>Tu bedzie wykres</span>
            </div>
            
        </div>
        <div className="container flex">
            <div className="left-container items-center">
                <span>tu bedzie wykres</span>
            </div>

            <div className="right-container items-center">
                <TextGenerateEffect 
                    words="Reliable Data Souces"
                    className="ml-4 text-4xl sm:text-2xl lg:text-4xl text-white font-serif"    
                />
                <TextGenerateEffect
                    words="Datasets from authoritative organizations such as the World Health Organization and the Centers for Disease Control and Prevention."
                    className="m-10% mt-4 text-base text-justify text-gray-300 font-sans"
                />
                <TextGenerateEffect 
                    words="Interactive Visualizations"
                    className="ml-4 text-4xl sm:text-2xl lg:text-4xl text-white font-serif"    
                />
                <TextGenerateEffect
                    words="Filter and explore data through dynamic charts, graphs, and maps for more engaging learning experience."
                    className="m-10% mt-4 text-base text-justify text-gray-300 font-sans"
                />
                <div className="flex justify-center p-4">
                    <button className="btn-global bg-indigo-500 transition duration-300 hover:bg-indigo-600">Dive in!</button>
                </div>

            </div>
        </div>
      </div>
    );
  }
  