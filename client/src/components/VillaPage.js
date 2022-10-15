import { useEffect, useState } from "react";
import NewVillaForm from "./NewVillaForm";
import VillaList from "./VillaList";
import Search from "./Search";

function VillaPage() {
  const [villas, setVillas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // no need to use http://localhost:3000 here
    fetch("/villas")
      .then((r) => r.json())
      .then((villasArray) => {
        setVillas(villasArray);
      });
  }, []);

  function handleAddVilla(newVilla) {
    const updatedVillasArray = [...villas, newVilla];
    setVillas(updatedVillasArray);
  }

  const displayedVillas = villas.filter((villa) => {
    return villa.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewVillaForm onAddVilla={handleAddVilla} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <VillaList plants={displayedVillas} />
    </main>
  );
}

export default VillaPage;
