import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    console.log("new tag", newTag);

    const newTagz = [newTag, ...tags];
    setTags(newTagz);
  }

  //  function handleAddAnimal(newAnimal) {
  //   console.log("new animal", newAnimal);

  //   const newAnimals = [
  //     // { id: uid(), name: newAnimal.name, emoji: newAnimal.emoji  },
  //     { id: uid(), ...newAnimal },
  //     ...animals,
  //   ];
  //   setAnimals(newAnimals);
  // }

  function handleDeleteTag(tagUserClicked) {
    // filter callback is wrong. What you want is to return a boolean expression, not an array.
    // Currently you're accidentally returning [tags, !tag], which is always a truthy array
    // so nothing ever gets removed.

    // filter iterates each tag in tags:
    // allTags !== tagUserClicked returns true for tags you want to keep, and false for the one to delete
    // The result: a new array with the selected tag removed

    const updatedTagz = tags.filter((allTags) => allTags !== tagUserClicked);
    setTags(updatedTagz);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
