import Button from "../Button/Button";
import { useState } from "react";
import { EXAMPLES } from "./ExamplesData";
import "./Examples.css";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  const topics=  ["components","jsx", "props","state"];

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {topics.map(topic =>(<Button
          key={topic}
          isSelected={selectedTopic === topic}
          onSelect={()=>handleClick(topic)}>
            {topic.charAt(0).toUpperCase() + topic.slice(1)}
        </Button>))}
      </menu>

      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </section>
  );
}
