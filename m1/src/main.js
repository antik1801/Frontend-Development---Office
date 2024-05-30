import React from 'react'
import ReactDOM from 'react-dom/client'


import {HelloWorld, anotherHello} from "./another"


// const HelloWorld = () =>{
//     return (
//         <h1>Hello World</h1>
//     )
// }

const App = React.createElement('h1',{
    style: {
        color: 'red'
    }},
    "This is a fokira react app added something new",
    HelloWorld(),
    anotherHello()
)

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(App);