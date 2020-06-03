import React from "react";
import "quill/dist/quill.snow.css"; // Add css for snow theme
import "./Editor.scss";

// import { useQuill } from "react-quilljs"; //reinstall it
const { useQuill } = require('react-quilljs');

// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default () => {
  const { quill, quillRef } = useQuill();

  console.log(quill); // undefined > Quill Object
  console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  return (
    <div className="editorMain">
      <div ref={quillRef} />
      <button className="btn">G</button>
    </div>
  );
};
