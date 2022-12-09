import pizza from "../../assets/pizzaHalf.jpg";
import styles from "./FoodChoosing.module.scss";


export default function ExtraSection({ title, food }) {
    return (
        <div className={styles.section}>
          <h3>{title}</h3>

          <div className={styles.listFood}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              {food.map((value, index) => (
                <div className={styles.foodTag} key={index} style={{cursor: 'pointer'}}>
                  <img src={value.foodImg} alt="" />
                  <h6 style={{ opacity: "1", fontWeight: "600" }}>
                    {value.foodName}
                  </h6>
                  <div style={{ display: "flex" }}>
                    <h6>{value.category}</h6>
                    <h6 style={{ margin: "0 0.4rem" }}>·</h6>
                    <h6>{value.price}đ</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
}