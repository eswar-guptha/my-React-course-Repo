export default function Stats({ itemsArr }) {
  if (!itemsArr.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  let numItems = itemsArr.length;
  let numPacked = itemsArr.filter((item) => item.packed).length;
  let percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `
      💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)
      `}
      </em>
    </footer>
  );
}
