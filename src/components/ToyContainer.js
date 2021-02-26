import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyData, onToyDelete, onLikeToy }) {
  const toyComponents = toyData.map ( toy => {

    return <ToyCard key={toy.id} toy={toy} onToyDelete={onToyDelete} onLikeToy={onLikeToy}/>
  })
  return (
    <div id="toy-collection">
      {toyComponents}
    </div>
  );
}

export default ToyContainer;
