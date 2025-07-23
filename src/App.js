import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleIsPacked(itemId) {
    setItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearList() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleIsPacked={handleIsPacked}
        onRemoveItem={handleRemoveItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
