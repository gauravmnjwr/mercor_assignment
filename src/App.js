import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
function App() {
  return (
    <div className="app">
      <button className="section1-btn">
        <a href="#a">Section 1</a>
      </button>
      <button className="section2-btn">
        <a href="#b">Section 2</a>
      </button>
      <Section1 />
      <hr />
      <Section2 />
    </div>
  );
}

export default App;
