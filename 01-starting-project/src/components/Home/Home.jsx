import CoreConceptsMapper from "../OverView/CoreConceptsMapper";
import Header from "../Header/Header";
import Examples from "../Examples/Examples";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsMapper />
        <Examples />
      </main>
    </div>
  );
}
