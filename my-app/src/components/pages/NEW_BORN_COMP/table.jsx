import styles from "./table.module.css";


const Table = () => {
    return(
        <table>
        <thead>
            <tr className={styles.tab_hding}>
                <th>SPECIES</th>
                <th>BIRTH</th>
            </tr>
        </thead>
        <tbody id={styles.species}>
           
            <tr >
                <td id="mam">Mammal</td>
                <td>100</td>
            </tr>
            <tr >
                <td id="brd">Bird</td>
                <td>65</td>
            </tr>
            <tr >
                <td id="rptl">Reptile</td>
                <td>18</td>
            </tr>
            <tr >  
                <td id="amph">Amphibian</td>
                <td>20</td>
            </tr>
        </tbody>
    </table>
    );
}

export default Table ;