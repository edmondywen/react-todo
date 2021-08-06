import { tsPropertySignature } from '@babel/types';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Test(props){
//     return(
//         <h1>hello</h1>
//     )
// }

function Item(props){
    // declares a new state variable named count and a setter function for that variable
    const [count, setCount] = useState(0);

    return(
        <div class = {props.className}>
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

function List(props){
    const [items, setItems] = useState([]); //keep track of items
    const [text, setText] = useState(""); //keep track of the text inside submit box

    return(
        <div id = "list-area">   
            <input 
            type="text" 
            onChange = {(event) => setText(event.target.value)} 
            value = {text}
            ></input>

            <button 
            onClick = {() => {
                let newItems = items.slice().concat([text]);
                setItems(newItems);
                setText("");
                console.log(items);
            }}
            >
                submit
            </button>
            {items.map((element, index) => {
                return (
                    <>
                    <Item itemName = {element} className = "item"/>
                    <button onClick = {() => {
                        let newItems = items.slice(0, index).concat(items.slice(index+1)); //i'm sure there's a better way to write this
                        setItems(newItems);
                    }}>delete</button>
                    </>
                )
            })}
            {/* <Item itemName = "test item" className = "item"/> */}
        </div>
    )
    //some array to store all of the different items
    //state that is changed each time the array is modified? onclick to the submit button
    //some item
    //another item
    //etc.
}

function Main(props){
    return(
        <body>
            <List/>
        </body>
    )
}

ReactDOM.render(
    <Main/>, 
    document.getElementById('root')
);