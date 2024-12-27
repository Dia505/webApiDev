import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Child1 from "./pages/child1";
import { InfoContext } from "../context/infoContext";

function HomePage() {
    // const navigate = useNavigate()

    // // let myVar = 0;

    // //like setter, useState sets the value of myVar using manipulation function 'setMyVar' in the HTML template
    // const [myVar, setMyVar] = useState(0);

    // const [myRate, setMyRate] = useState(1);
    // const [ans, setAns] = useState(0);

    // function myClick() {
    //     setMyVar(myVar + 1)
    //     console.log(myVar)
    // }

    // function increaseRate() {
    //     console.log(myRef)
    //     setMyRate(myRate + 1)
    // }

    // //everytime the rate is increased by the function, this arrow function gets executed
    // useEffect(() => {
    //     const si = 50000*2*myRate
    //     setAns(si)
    //     //without this 
    // }, [myRate])

    // //useMemo merged useState and useEffect into 1 function that also returns the output in a variable
    // //unlike useEffect, useMemo returns the value 
    // const ans2 = useMemo(() => {
    //     return 50000 * 2 * myRate
    // }, [myRate])

    // //useCallback returns the entire function, and allows the programmer to manipulate the value 
    // //used when a manipulating data needs to be passed with the calculation, for overriding
    // const ans3 = useCallback((added) => {
    //     return (50000 * 2 * myRate) + added 
    // }, [myRate])

    // const myRef = useRef();

    // const filePick = useRef();

    const [text, setText] = useContext(InfoContext);

    return(
        <>
        {/* Props drilling */}
        {/* <Child1 myInfo={myInfo}/> */}

        <di>
            <button onClick={() => setText('Hello, world!')}>
                Click me
            </button>
        </di>

        {/* The Home Page {myVar} */}
        {/* Simple Interest: {ans} */}

        {/* <input ref = {filePick} style={{display: "none"}} type = "file"/> */}

        {/* With every button click, the simple interest increases by 10 after each calculation */}
        {/* Simple Interest Callback: {ans3(10)}; */}

        {/* ref used to let know that this is a dom */}
        {/* <div ref = {myRef}> */}
            {/* <button onClick={myClick}> click me </button> */}
            {/* <button onClick={increaseRate}> Increase Rate </button> */}

            {/* If default file upload is not aesthetically pleasing, then a customized button made, and connected to filePick */}
            {/* <button onClick={() => filePick.current.click()}> Hello!! </button> */}
        {/* </div> */}
        </>
    )
}

export default HomePage;