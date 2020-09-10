import React from "react";

//del function
//id index
function Note(props) {
  return (
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>

        <button onClick={(e) => {
        props.del(props.id);
        e.preventDefault();
      }} type="submit">DELETE</button>
      </div>
  );
}

export default Note;
