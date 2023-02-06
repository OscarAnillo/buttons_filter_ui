import { useEffect } from "react";

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Shakes"];

export const TitleComponent = ({ clickHandler }) => {
  /* useEffect to handle class*/
  useEffect(() => {
    let filteBtns = document.querySelectorAll(".filter");
    filteBtns[0].addEventListener("click", function () {
      this.classList.add("active");
      filteBtns[1].className = "filter";
      filteBtns[2].className = "filter";
      filteBtns[3].className = "filter";
      filteBtns[4].className = "filter";
    });
    filteBtns[1].addEventListener("click", function () {
      this.classList.add("active");
      filteBtns[2].className = "filter";
      filteBtns[3].className = "filter";
      filteBtns[4].className = "filter";
      filteBtns[0].className = "filter";
    });
    filteBtns[2].addEventListener("click", function () {
      this.classList.add("active");
      filteBtns[3].className = "filter";
      filteBtns[4].className = "filter";
      filteBtns[0].className = "filter";
      filteBtns[1].className = "filter";
    });
    filteBtns[3].addEventListener("click", function () {
      this.classList.add("active");
      filteBtns[4].className = "filter";
      filteBtns[0].className = "filter";
      filteBtns[1].className = "filter";
      filteBtns[2].className = "filter";
    });
    filteBtns[4].addEventListener("click", function () {
      this.classList.add("active");
      filteBtns[0].className = "filter";
      filteBtns[1].className = "filter";
      filteBtns[2].className = "filter";
      filteBtns[3].className = "filter";
    });
  }, [clickHandler]);

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
