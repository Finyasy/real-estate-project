
function VillaCard({ villa }) {
  const { name, price, villa_url, rating } = villa;

  return (
    <li className="villa">
      <img src={villa_url} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
    </li>
  );
}

export default VillaCard;
