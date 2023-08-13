import { useState } from "react";
import Item from "./Item";

export function PackingList({
  itemsArr,
  onDeleteItem,
  onToggleItems,
  onClearList,
}) {
  let [sortBy, setSortBy] = useState("input");
  let sortedArr;

  if (sortBy === "input") {
    sortedArr = itemsArr.slice();
  } else if (sortBy === "packed") {
    sortedArr = itemsArr
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  } else if (sortBy === "description") {
    sortedArr = itemsArr.slice().sort((a, b) => {
      let sa = a.description.toLowerCase();
      let sb = b.description.toLowerCase();
      if (sa < sb) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  return (
    <div className="list">
      <ul>
        {sortedArr.map((item) => (
          <Item
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id}
          ></Item>
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input value</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
