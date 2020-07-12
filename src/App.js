import React from "react";
import "./index.css";

// lokalStorage
let loadedStorageData = [];
const loadStorage = localStorage.getItem("data");
if (loadStorage) {
  loadedStorageData = JSON.parse(loadStorage);
}

// Bilder laden
function App() {
  
  const [imageUrls, setImageUrls] = React.useState([]);

  // API
  async function loadCatImageUrl() {
    const response = await fetch("https://aws.random.cat/meow");
    const data = await response.json();

    setImageUrls([...imageUrls, data.file]);
  }

//Bilder löschen
  function removeImageUrl(indexToRemove) {

    const updatedCatImageUrls = imageUrls.filter(function (imageUrl, index) {
      const keepImage = indexToRemove !== index;
      return keepImage;
    });

    setImageUrls(updatedCatImageUrls);
  }

  
  React.useEffect(function () {
    loadCatImageUrl();
  }, []);


  const catImageElements = imageUrls.map(function (imageUrl, index) {
    return (
      <img
        src={imageUrl}
        alt="Cat"
        style={{ maxHeight: 200, borderRadius:"50%", borderColor:"black", borderWidth:"5px", borderStyle:"solid"}}
        onClick={() => removeImageUrl(index)}
        
      />
    );
  });

// App render
  return (
    <div>
      <button style={{color:"green", backgroundColor:"yellow", boxShadow: "10px 10px 15px white",fontSize:"20px", }} onClick={loadCatImageUrl}>Load New Kitty</button>
      <h1 style={{color: "red", fontSize:"80px", fontWeight:"700"}}>KITTIES</h1>
      {catImageElements}
    </div>
  );
}

export default App;


