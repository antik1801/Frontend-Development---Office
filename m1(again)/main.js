
// const App = React.createElement('h1',{
//     style: {
//         color: "red"
//     }
// }, "Hello World")

const HelloWorld = () =>{
    return React.createElement('p',{
        style: {
            color: "red"
        }
    }, "Hello world")
}

const App = () =>{
    return React.createElement('h1',{
        style: {
            color: "red"
        }
    }, "This is a fokira react app", HelloWorld())
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(React.createElement(App));
