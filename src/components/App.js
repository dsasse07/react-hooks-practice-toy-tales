import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const API = "http://localhost:3001/toys"
  const [showForm, setShowForm] = useState(false);
  const [toyData, setToyData] = useState([])

  useEffect ( () => {
    fetch(API)
      .then( response => response.json() )
      .then( setToyData )

  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleFormSubmit(formData){
    const postConfig = {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify( formData )
    }
    fetch(API, postConfig)
      .then( response => response.json() )
      .then( newToyData => {
        setToyData([...toyData, newToyData])
      })
  }

  function handleDeleteToy(id){
    fetch(`${API}/${id}`, {method:"DELETE"} )
    const newToyData = toyData.filter( toy => {
      return toy.id !== id
    })
    setToyData(newToyData)
  }

  function handleLikeToy({id, likes}){
    const patchConfig = {
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify( {likes: parseInt(likes) + 1 })
    }

    fetch(`${API}/${id}`, patchConfig )
      .then( response => response.json() )
      .then( updatedToy => {
        const newToysArray = toyData.map( toy => {
          if (toy.id !== updatedToy.id) return toy
          return updatedToy
        })
        setToyData([...newToysArray])
      })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={handleFormSubmit}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} onToyDelete={handleDeleteToy} onLikeToy={handleLikeToy}/>
    </>
  );
}

export default App;
