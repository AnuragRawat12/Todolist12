import React, { useState, useRef } from "react";
import "./index.css";
const Todolist = () => {
  const [list, setList] = useState(" ");
  const [listItems, setListItems] = useState([]);
  const inputRef = useRef(null);
  const [checkItem, setCheckItem] = useState([]);

  const listRef = useRef(null);

  const addItem = () => {
    if (list.trim() !== "") {
      setListItems([...listItems, list]);
      setList("");
      inputRef.current.focus();
      inputRef.current.value = "";
      listRef.current.style.border = "2px solid rgb(69, 5, 125)";
    } else {
      inputRef.current.focus();
      inputRef.current.style.outline = "none";
    }
  };

  const deleteBtn = (index) => {
    let deleteItems = [...listItems];
    deleteItems.splice(index, 1);
    setListItems(deleteItems);
    if (deleteItems == "") {
      listRef.current.style.border = "none";
    }
  };

  const down = (e) => {
    if (e.key == "Enter") {
      addItem();
    }
  };

  const checkBtn = (index) => {
    let updatedCheckItems = [...checkItem];
    updatedCheckItems[index] = !updatedCheckItems[index];
    setCheckItem(updatedCheckItems);
  };

  let a = new Date();
  let day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className="container">
        <div className="font">TodoList</div>
        <div className="head font">
          {day[a.getDay()] + ", " + month[a.getMonth()] + " " + a.getDate()}
        </div>
        <div className="List">
          <div>
            <input
              type="text"
              placeholder="New Item"
              className="input"
              onChange={(event) => setList(event.target.value)}
              value={list}
              ref={inputRef}
              onKeyDown={(e) => down(e)}
            ></input>
            <input type="button" className="btn" onClick={addItem} value="+" />
          </div>
        </div>
      </div>
      <div className="listItem" ref={listRef}>
        {listItems.map((data, index, id) => (
          <div style={{ display: "flex" }} key={index}>
            <input
              type="checkbox"
              className="checkbox"
              checked={checkItem[index] || false}
              onChange={() => checkBtn(index)}
            />
            {checkItem[index] ? (
              <p className="item">
                <s>{data}</s>
              </p>
            ) : (
              <p className="item">{data}</p>
            )}
            <div className="btn2">
              <input
                type="button"
                value="Delete"
                className="btn_2"
                onClick={() => deleteBtn(index)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Todolist;
