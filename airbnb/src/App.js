import React from "react"
import Navbar from "./components/Navbar";
import HeroContainer from "./components/HeroContainer";
import Card from "./components/Card";
import Data from "./data"

export default function App() {
  const CardElements = Data.map((experience) => {
    return (
      <Card
        key={experience.id}
        {...experience}
        // item={experience}
        // img={experience.coverImg}
        // rating={experience.stats.rating}
        // reviewCount={experience.stats.reviewCount}
        // country={experience.location}
        // title={experience.title}
        // price={experience.price}
        // openSpots={experience.open}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <HeroContainer />
      <section className="cards-list">
        {CardElements}
      </section>
    </div>
  );
}

