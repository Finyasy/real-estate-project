import VillaCard from "./VillaCard";

function VillaList({ villas }) {
  return (
    <ul className="villas" >
      {villas.map((villa) => {
        return <VillaCard key={villa.id} villa={villa} />;
      })}
    </ul>
  );
}

export default VillaList;
