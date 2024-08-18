import styles from "./rescue_cols_hding.module.css";

const Cols_hding = () => {
  return (
    <tr className={styles.cols_hding}>
      <th className={styles.serial}> S.No</th>
      <th className={styles.date}>Date</th>

      <th className={styles.species}>Species</th>
      <th className={styles.species_count}>No. of Species Rescued</th>
      <th className={styles.ratio}>Sex ratio (M:F:U)</th>
      <th className={styles.receive}>Received From</th>
    </tr>
  );
};

export default Cols_hding;
