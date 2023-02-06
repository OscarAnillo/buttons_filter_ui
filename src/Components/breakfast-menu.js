import { breakfast_menu } from "../Data/breakfast-menu";

export const BreakfastCategory = () => {
  return (
    <div className="menu-div">
      {breakfast_menu.map((item) => (
        <div key={item.id} className="map-item">
          <img src={item.img} alt="" className="dish-pic" />
          <div className="row">
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
          <p className="desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};
