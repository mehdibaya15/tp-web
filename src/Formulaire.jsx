import { useState } from "react";

const Formulaire = () => {
  const [name, setName] = useState("");

  const handleAlert = () => {
    alert(`Bonjour ${name} !`);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Entrez votre nom"
      />
      <button onClick={handleAlert}>Afficher alert</button>
    </div>
  );
};

export default Formulaire;
