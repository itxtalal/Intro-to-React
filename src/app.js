import ReactDOM from "react-dom";
// import Pet from "./pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Peper" animal="Bird" breed="Cockatiel"></Pet>
      <Pet name="Beam" animal="Dog" breed="Wheaton Terrie"></Pet> */}
      <SearchParams />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
