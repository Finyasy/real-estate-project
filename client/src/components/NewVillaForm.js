import { useState } from "react";

function NewVillaForm({ onAddVilla }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [villa_url , setVilla] = useState("");
  const [rating, setRating] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/villas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        villa_url: villa_url,
        rating: rating
      }),
    })
      .then((r) => r.json())
      .then((newVilla) => onAddVilla(newVilla));
  }

  return (
    <div className="new-villa-form">
      <h2>New Villa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Villa name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <input
          type="text"
          name="villa_url"
          placeholder="Image URL"
          value={villa_url}
          onChange={(e) => setVilla(e.target.value)}
        />
        <input
          type="number"
          name="rating"
          max="5"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button type="submit">Add Villa</button>
      </form>
    </div>
  );
}

export default NewVillaForm;
