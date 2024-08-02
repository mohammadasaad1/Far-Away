function Stats({ items }) {
  const numItems = Number(items.length);

  const numPacked = Number(items.filter((item) => item.packed).length);
  const avg = Math.round((numPacked / numItems) * 100);

  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 👩🏻‍🚀🚀</em>
      </p>
    );
  }
  return (
    <footer className="stats">
      <em>
        {avg == 100
          ? "You got everything! Ready to go ✈️✈️ "
          : ` 💼 You have ${numItems} items on your list , and you already packed 
          ${numPacked} (${Math.round((numPacked / numItems) * 100)}%)`}
      </em>
    </footer>
  );
}

export default Stats;
