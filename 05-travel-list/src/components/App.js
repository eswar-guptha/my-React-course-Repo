import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import { PackingList } from "./PackingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
  { id: 2, description: "SoCks", quantity: 12, packed: false },
  { id: 4, description: "watch", quantity: 1, packed: true },
  { id: 5, description: "Apple laptop", quantity: 1, packed: true },
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

  function handleClearList() {
    let confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItemsArr([]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItem}></Form>
      <PackingList
        itemsArr={itemsArr}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      ></PackingList>
      <Stats itemsArr={itemsArr}></Stats>
    </div>
  );
}
