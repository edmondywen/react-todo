// NOTE: cool thing, React import itself (like in index.js), is actually not needed! 
import { useState } from "react";
import Item from "./Item";

function List(props: any) {
  // NOTE: this is how you can type what goes into your state
  const [items, setItems] = useState<string[]>([]); //keep track of items
  const [text, setText] = useState(""); //keep track of the text inside submit box

  return (
    <div id="list-area">
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
      ></input>

      <button
        onClick={() => {
          let newItems = items.slice().concat([text]);
          setItems(newItems);
          setText("");
          console.log(items);
        }}
      >
        submit
      </button>
      {
      // NOTE: check out console.log. It has a warning 
      // `Each child in a list should have a unique "key" prop.`
      // https://github.com/uclaacm/teach-la-dev-training/tree/main/intro-to-react/2_ts_and_react_lifecycle#lists-and-keys
      // You can fix this if you want
      items.map((element, index) => {
        return (
          <>
            <Item itemName={element} className="item" />
            <button
              onClick={() => {
                let newItems = [
                  ...items.slice(0, index),
                  ...items.slice(index + 1),
                ]; // NOTE: generally, array expanding and combining like this is preferred over concat and such
                setItems(newItems);
              }}
            >
              delete
            </button>
          </>
        );
      })}
      {/* <Item itemName = "test item" className = "item"/> */}
    </div>
  );
  //some array to store all of the different items
  //state that is changed each time the array is modified? onclick to the submit button
  //some item
  //another item
  //etc.
}
export default List;
