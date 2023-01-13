import Navbar from "./components/Navbar";
import TravelRow from "./components/TravelRow";
import Data from "./data"

function App() {
  const TravelList = Data.map((destination) => {
    return (
      <TravelRow
        key={destination.key}
        destination={destination}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <div className="travelList">
        {TravelList}
      </div>
    </div>
  );
}

export default App;
