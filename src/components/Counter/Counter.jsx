import "./Counter.css"

function Counter({stock, counter, setCounter}){


    const addCounter = () =>{
        if(counter < stock)
         setCounter(counter+1)
    } ;
    const minusCounter = () => {
        if(counter > 0)
            setCounter(counter-1)
    };

    return(
        <div className="counter">
            <button className="button-default" onClick={minusCounter}>-</button>
            <label>{counter}</label>
            <button className="button-default" onClick={addCounter}>+</button>
        </div>
    )
}

export default Counter;