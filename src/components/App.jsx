import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(event) {
    const newTitle = event.target.title.value;
    const newContent = event.target.content.value;

    setItems((preItems) => {
      return [
        {
          title: newTitle,
          content: newContent
        },
        ...preItems
      ];
    });
    event.target.reset();
    event.target.reset();
    event.preventDefault();
  }

  function itemDelete(id) {
    setItems((preItems) => {
      return preItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea item={addItem} />
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            del={itemDelete}
            title={item.title}
            content={item.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
