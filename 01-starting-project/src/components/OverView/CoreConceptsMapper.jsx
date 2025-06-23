import { CORE_CONCEPTS } from "./CoreConceptsData.js";
import "./CoreConcepts.css";
import CoreConcept from "../CoreConcepts/CoreConcepts.jsx";

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
