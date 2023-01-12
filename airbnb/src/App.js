import React from "react"
import Navbar from "./components/Navbar";
// import HeroContainer from "./components/HeroContainer";
import Card from "./components/Card";
import Data from "./data"

export default function App() {
  const CardElements = Data.map((experience) => {
    return (
      <Card
        img={experience.coverImg}
        rating={experience.stats.rating}
        reviewCount={experience.stats.reviewCount}
        country={experience.location}
        title={experience.title}
        price={experience.price}
        
      />
    )
  })

  return (
    <div>
      <Navbar />
      {/* <HeroContainer /> */}
      {CardElements}
    </div>
  );
}

