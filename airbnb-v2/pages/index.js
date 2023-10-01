import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import { useState } from "react";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

export default function Home({ exploreData }) {
  const firstSevenitems = exploreData.slice(0, 8);
  return (
    <div className="">
      <Header />
      <Banner />
      <main className=" max-w-7xl mx-auto px-8 sm:px-16">
        {/* main portion of the screen*/}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API endpints:server side rendering */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {firstSevenitems?.map((item) => (
              <SmallCard
                key={item.name.common}
                img={item.flags.png}
                distance={item.name.common}
                location={item.name.official}
              />
            ))}
          </div>

          {/*or:
          {exploreData?.map(({img,distance,location}) => (
            <SmallCard
              key={img}
              img={img}
              distance={distance}
              location={location}
            />
          ))}
          */}
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {firstSevenitems?.map((item) => (
              <MediumCard
                key={item.name.common}
                img={item.flags.png}
                title={item.name.common}
              />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Whishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}
{
  /* static rendering 
  special function in Next.js used for data fetching during static site generation (SSG). Here's how it works:
  */
}
export async function getStaticProps() {
  const exploreData = await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  );
  {
    /* the information that we had over at the server to pass it to our functional component over at the browser level */
  }
  console.log("exp: ", exploreData);
  return {
    props: {
      exploreData,
    },
  };
}
