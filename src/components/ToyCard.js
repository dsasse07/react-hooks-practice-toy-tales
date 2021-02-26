import React from "react";

function ToyCard({ onLikeToy, onToyDelete, toy:{id, name, image, likes} }) {

  function handleDeleteToy(){
    onToyDelete(id)
  }

  function handleLikeToy(){
    onLikeToy({id, likes})
  }
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeToy}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
