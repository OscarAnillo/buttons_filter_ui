const categories = ["All", "Breakfast", "Lunch", "Dinner", "Shakes"];

export const TitleComponent = ({ clickHandler }) => {
  return (
    <div className="title">
      <h1>Our Menu</h1>
      <div className="underline"></div>
      <div className="btn-container">
        {categories.map((item) => (
          <button
            key={item}
            data-id={item}
            onClick={clickHandler}
            className="filter"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
