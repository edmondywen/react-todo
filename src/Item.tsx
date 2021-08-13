import React, {useState} from 'react';

// NOTE: Here's how to type props. 
// Helps make sure you pass in everything necessary / catch bugs easier when you change this code / etc
interface ItemProps {
  itemName: string,
  className: string,
}
function Item(props: ItemProps){
  // declares a new state variable named count and a setter function for that variable
  const [count, setCount] = useState(0);

  return(
    // NOTE: className for class property as you know it
      <div className = {props.className}>
          <p>{props.itemName}</p>
          <p>Likes: {count}</p>
          <button onClick = {() => setCount(count + 1)}>
              Like
          </button>
          <button onClick = {() => setCount(count - 1)}>
              Dislike
          </button>
      </div>
  )
}

// NOTE: Here's how to export default
// You can also do `export Item`
export default Item; 