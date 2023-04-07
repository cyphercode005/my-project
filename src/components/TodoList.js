import React, { useState } from "react";

export default function TodoList() {
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [listData, setListData] = useState([]);

  function addEntity() {
    setListData((listData) => {
      const updatedList = [...listData, text];
      setText("");
      return updatedList;
    })
  }
  
  function remEntity(index) {
    const updatedList = listData.filter((element, id) => {
      return index !== id;
    });
    setListData(updatedList);
  }

  function remAll() {
    setListData([]);
  }

  function editEntity(index, data) {
  }

  return (
    <div className="flex justify-center ">
      <div className="my-5 text-blue-100">
        <div className=" font-semibold text-center text-2xl">TO-DO APP </div>
        <div className=" my-4 input-form">
          <input
            className="bg-transparent border rounded mx-2 px-2"
            type="text"
            value={text}
            placeholder="Add Entity Here..."
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="hover:bg-gray-900 hover:text-blue-200 border rounded mx-2 px-3 py-1"
            onClick={addEntity}>
            Add Entity
          </button>
        </div>
        <div className=" my-4 input-form">
          <input
            className="bg-transparent border rounded mx-2 px-2"
            type="text"
            value={newText}
            placeholder={""}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="hover:bg-gray-900 hover:text-blue-200 border rounded mx-2 px-3 py-1"
          >  Update </button>
        </div>
        <div>
          {listData.length <= 0 && <p> Add any Entity to see the list.</p>}
          {listData.length >= 1 && <p> Here is your list:</p>}

          {listData !== [] &&
            listData.map((data, index) => {
              return (
                <div className=" flex justify-between my-3" key={index}>
                  <span> {data} </span>
                  <div>
                    <button
                      className="hover:bg-gray-900 hover:text-blue-200  rounded mx-2 px-1 py-0.5"
                      onClick={() => remEntity(index)}
                    >
                      {" "}
                      🗑️{" "}
                    </button>
                    <button className="hover:bg-gray-900 hover:text-blue-200  rounded mx-2 px-1 py-0.5" onClick={() => editEntity()}
                      >✎
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex justify-center ">
          {" "}
          {listData.length >= 1 && (
            <button
              className="hover:bg-pink-600 hover:text-blue-200 border rounded mx-2 px-3 py-1 my-4"
              onClick={remAll}
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
