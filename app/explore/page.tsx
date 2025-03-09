import MentalHealthChart from "@/components/MentalHealthChart";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const customData = [
    { year: 1990, cases: 5000 },
    { year: 2000, cases: 15000 },
    { year: 2010, cases: 30000 },
    { year: 2020, cases: 70000 },
  ];
  

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
                    <TextGenerateEffect
                        words="Despite growing awareness, over 75% of people with mental disorders in low- and middle-income countries receive no treatment at all. The stigma surrounding mental health still prevents millions from seeking help, leading to worsening symptoms and higher risks of chronic diseases like heart disease and diabetes."
                        className="m-10% mt-4 text-base text-justify text-gray-300 font-sans"
                    />
                    <div className="flex justify-center p-4">
                        <button className="btn-global bg-sky-500 transition duration-300 hover:bg-sky-600">Find Out</button>
                    </div>
                </div>
            </div>

            <div className="right-container items-center">
                <MentalHealthChart data={customData} title="Mental Health Trends Over Time in Poland" linecolor="#38BDF8" />
            </div> 
        </div>
        <div className="container flex">
            <div className="left-container items-center">
            <MentalHealthChart data={customData} title="Mental Health Trends Over Time in Poland" linecolor="#667eea" />
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
  