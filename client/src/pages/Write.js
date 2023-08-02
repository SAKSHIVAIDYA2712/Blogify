import React, { useState } from "react";
import "./Write.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function Write() {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add_content">
      <div className="w_content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="editor"
          />
        </div>
      </div>
      <div className="w_menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>
          <input style={{ display: "none" }} type="file" name="" />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="category">
            <input type="radio" name="category" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="category">
            <input
              type="radio"
              name="category"
              value="technology"
              id="technology"
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="category">
            <input type="radio" name="category" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}
