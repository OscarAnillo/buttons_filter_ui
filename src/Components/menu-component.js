import { AllCategories } from "./all-categories";
import { BreakfastCategory } from "./breakfast-menu";
import { DinnerCategory } from "./dinner-menu";
import { LunchCategory } from "./lunch-menu";
import { ShakesCategory } from "./shakes-menu";

export const MenuComponent = ({ category }) => {
  const displayComponent = () => {
    switch (category) {
      case "All":
        return <AllCategories />;
      case "Breakfast":
        return <BreakfastCategory />;
      case "Lunch":
        return <LunchCategory />;
      case "Dinner":
        return <DinnerCategory />;
      case "Shakes":
        return <ShakesCategory />;
      default:
        return <AllCategories />;
    }
  };
  return (
    <div className="menu-main">
      <div>{displayComponent()}</div>
    </div>
  );
};
