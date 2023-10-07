import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { format, parseISO } from "date-fns";
import React from "react";
import InfoCard from "@/components/InfoCard";

function search({ searchResults }) {
  const router = useRouter();
  const firstSevenitems = searchResults.slice(0, 8);
  const { location, startDate, endDate, noOfGuests } = router.query;

  let formattedStartDate = "N/A";
  let formattedEndDate = "N/A";

  try {
    // Parse the ISO 8601 date string into a Date object
    const parsedStartDate = parseISO(startDate);

    // Format the parsed date using the desired format
    formattedStartDate = format(parsedStartDate, "dd MMMM yy");
  } catch (error) {
    console.error("Error parsing or formatting start date:", error);
  }

  try {
    const parsedEndDate = parseISO(endDate);

    formattedEndDate = format(parsedEndDate, "dd MMMM yy");
  } catch (error) {
    console.error("Error parsing or formatting end date:", error);
  }

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className=" bg-white">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ -{range}- stays for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {firstSevenitems.map((item) => (
              <InfoCard
                key={item.name.common}
                img={item.flags.png}
                description={item.name.common}
                title={item.name.common}
                location={item.name.official}
                star="5"
                price="400$/night"
                total="900$ total"
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;

// {server side rendering}

export async function getServerSideProps() {
  const searchResults = await fetch("https://restcountries.com/v3.1/all").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
