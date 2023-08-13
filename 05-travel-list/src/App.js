import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 4, description: "Charger", quantity: 1, packed: true },
  { id: 5, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  let [itemsArr, setItemsArr] = useState([]);

  function handleAddItem(item) {
    setItemsArr((curItems) => [...curItems, item]);
  }

  function handleDeleteItem(id) {
    setItemsArr((curItems) => curItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItemsArr((curItems) =>
      curItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItem}></Form>
      <PackingList
        itemsArr={itemsArr}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
      ></PackingList>
      <Stats itemsArr={itemsArr}></Stats>
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
  let [description, setDescription] = useState("");
  let [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    let newItemObj = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItemObj);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {new Array(20).fill(1).map((ele, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ itemsArr, onDeleteItem, onToggleItems }) {
  return (
    <div className="list">
      <ul>
        {itemsArr.map((item) => (
          <Item
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id}
          ></Item>
        ))}
      </ul>
    </div>
  );
}

function Item({ itemObj, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onClick={() => {
          onToggleItems(itemObj.id);
        }}
      ></input>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.description} {itemObj.quantity}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}

function Stats({ itemsArr }) {
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
