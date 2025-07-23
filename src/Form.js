import { useState } from "react";

export default function Form({ items, onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); // stops page from reloading on everytime we click the button or click enter

    if (!description) return;
    const newItem = {
      id: items.length + 1,
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  // both have the same result of converting the string to a num
  // setQuantity(Number(e.target.value))
  // setQuantity(+e.target.value)

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
