import { CORE_CONCEPTS } from "./CoreConceptsData.js";
import "./CoreConcepts.css";
import CoreConcepts from "../CoreConcepts/CoreConcepts.jsx";

export default function CoreConceptsSegment() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <li key={conceptItem.title}>
            <CoreConcepts {...conceptItem} />
          </li>
        ))}
      </ul>
    </section>
  );
}
