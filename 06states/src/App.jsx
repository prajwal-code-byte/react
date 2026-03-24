import { useState } from "react"

function App(){
    
    const [anything, setAnything] = useState(0) //initial value //hook
    const [show, setShow] = useState(false) //initial value is false

    //use state hook is bascially to initiate a starting value

    function increase(){
        setAnything(anything + 1)
    }

    const decrease = ()=>{
        if(count <= 0){
            alert('its already zero')
            return // stop here
        }
        setAnything(anything - 1)
        
    }

    function reset(){
        if(count == 0){
            alert("Its already '0'")
        }
        setAnything(0) //reset to 0
    }

    return(
        <div>
            count : {anything}
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            {<p></p> }
            
            
            <button onClick={() => {setShow(!show)}}
            >Show / Hide</button>

            {show && <h1>Hello World</h1>}
        </div>
        
    )
}

export default App