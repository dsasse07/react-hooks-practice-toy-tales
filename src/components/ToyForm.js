import React, {useState} from "react";


function ToyForm({ onFormSubmit }) {

  const [formData, setFormData] = useState({
    name: "",
    image:"",
    likes:0
  })

  const {name, image} = formData

  function handleFormChange(event){
    const key = event.target.name
    const value = event.target.value
    setFormData({...formData, [key]:value })
  }

  function handleFormSubmit(event){
    event.preventDefault()
    if (!name || !image) return
    onFormSubmit(formData)
    setFormData({
      name: "",
      image:"",
      likes:0
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
