
import styles from "./data_link.module.css";
const Data_link = () =>{
    return (
        <section className={styles.sec_1}>
          <ul className="links">
          <li className={styles.visit}><p>Animal born from 1/01/2023 to 31/12/2023 : <button className={styles.btn}>Click here to visit</button></p></li>
          <li className={styles.visit}><p>Animal born from 1/01/2022 to 31/12/2022 : <button className={styles.btn}>Click here to visit</button></p></li>
          <li className={styles.visit}><p>Animal born from 1/01/2021 to 31/12/2021 : <button className={styles.btn}>Click here to visit</button></p></li>

          </ul>
        </section>
    );
};

export default Data_link ;