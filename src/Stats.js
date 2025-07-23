export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your list!</em>
      </footer>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go!"
          : ` You have ${numItems} items on your list, and you have already packed
        ${packedItems}/${numItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
