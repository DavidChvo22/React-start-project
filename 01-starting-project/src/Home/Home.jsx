import CoreConceptsSegment from "../components/OverView/CoreConceptsSegment";
import Header from "../components/Header/Header";
import Examples from "../components/Examples/Examples";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsSegment />
        <Examples />
      </main>
    </div>
  );
}
