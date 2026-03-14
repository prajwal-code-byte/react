import { useState } from "react"

function App(){
    
    const [anything, setAnything] = useState(0) //initial value //hook

    //use state hook is bascially to initiate a starting value

    function increase(){
        setAnything(count + 1)
    }

    const decrease = ()=>{
        if(count <= 0){
            alert('its already zero')
            return // stop here
        }
        setCount(count - 1)
        
    }

    function reset(){
        if(count == 0){
            alert("Its already '0'")
        }
        setCount(0) //reset to 0
    }

    return(
        <div>
            count : {count}
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
            
        </div>
        
    )
}

export default App