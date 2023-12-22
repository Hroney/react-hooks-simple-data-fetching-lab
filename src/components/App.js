// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [dogInState, setDogInState] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((r) => r.json())
            .then(data => setDogInState(data.message))
    }, [])

    if (!dogInState) { return <p>Loading...</p> };

    return (
        <img alt="A Random Dog" src={dogInState}></img>
    );
}


export default App;