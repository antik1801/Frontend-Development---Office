
import { HelloWorld } from "./another"

// const App = React.createElement('h1',{
//     style: {
//         color: "red"
//     }
// }, "Hello World")



const App = () =>{
    return React.createElement('h1',{
        style: {
            color: "red"
        }
    }, "This is a fokira react app", HelloWorld())
}




// const App = () =>{
//     return (
//         <React.Fragment>
//     <div>This is fakira react application</div>
//     <HelloWorld />
//     </React.Fragment>
//     )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(App));
