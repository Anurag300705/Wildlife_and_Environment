import styles from "./cols_hding.module.css";

const Cols_hding = () => {
  return (
    <tr className={styles.cols_hding}>
      <th className="serial"> S.No</th>
      <th className="species">Species</th>

      <th className="ratio">Sex ratio (M:F)</th>
      <th className="firm">Firm / Zoo Name</th>
      <th className="date_arrival">Date of arrival</th>
    </tr>
  );
};

export default Cols_hding;
