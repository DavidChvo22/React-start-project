import { CORE_CONCEPTS } from "../../shared/data.js";
import "./CoreConcepts.css";
import CoreConcept from "./CoreConcepts.jsx";

export default function CoreConceptsSegment() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
