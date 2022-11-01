import "../assets/styles/categories.css";

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className="lmj-categories">
      <select
        value={selectedCategory}
        className="lmj-categories-select"
        onChange={(e) => {
          setSelectedCategory(e.target.value);
        }}
      >
        <option value="">---</option>
        {categories.map((cath) => (
          <option key={cath} value={cath}>
            {cath}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          setSelectedCategory("");
        }}
      >
        Réinitialiser
      </button>
    </div>
  );
};
export default Categories;
