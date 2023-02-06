import { lunch_menu } from "../Data/lunch-menu";

export const LunchCategory = () => {
  return (
    <div className="menu-div">
      {lunch_menu.map((item) => (
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
