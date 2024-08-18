import styles from "./rescue_table.module.css";

const Tab_body = () =>{

    return(
        <tbody className={styles.T_body}>
        <tr id={styles.odd_row}>
                <td>1</td>
                <td>4/ 7/ 2023</td>
                <td> Indian Pangolin </td>
                <td> 2 </td>
                <td>1:1:0</td>
                <td>Rourkela Forest Range </td>
                
            </tr>
            
            <tr id={styles.even_row}>
                <td>2</td>
                <td>2/ 5/ 2023</td>
                <td> Bison </td>
                <td>2</td>
                <td>1:0:1</td>
                <td>Madhyapradesh forest range</td>
            
            </tr>

            <tr id={styles.odd_row}>
                <td>3</td>
                <td>23/ 3/ 2023</td>
                <td>Wolf</td>
                <td>4</td>
                <td>1:2:1</td>
                <td>Rourkela Forest Range  </td>
                   
            </tr>

            <tr id={styles.even_row}>
                <td>4</td>
                <td>29/ 11/ 2022</td>
                <td>Leopard</td>
                <td>2</td>
                <td>1:0:1</td>
                <td>Rourkela Forest Range</td>
            
            </tr >

            <tr id={styles.odd_row}>
                <td>5</td>
                <td>21/ 11/ 2022</td>
                <td>Peacock</td>
                <td>5</td>
                <td>3:2:0</td>
                <td>Khurda Division</td>
                
                
            </tr>

            <tr id={styles.even_row}>
                <td>6</td>
                <td>4/ 9/ 2022</td>
                <td>Siberian crane</td>
                <td>2</td>
                <td>1:1:0</td>
                <td>Khurda Division  </td>
                
                
            </tr>

            <tr id={styles.odd_row}>
                <td>7</td>
                <td>13/ 8/ 2022</td>
                <td>Royal Bengal Tiger </td>
                <td>4</td>
                <td>2:1:1</td>
                <td>Madhyapradesh forest range</td>
              
            </tr>
            <tr id={styles.even_row}>
                <td>8</td>
                <td>6/ 5/ 2022</td>
                <td>Indian Cobra </td>
                <td>3</td>
                <td>1:2:0</td>
                <td>DFO, Athamalik</td>
                
                
            </tr>
            <tr id={styles.odd_row}>
                <td>9</td>
                <td>30/ 4/ 2022</td>
                <td>Indian Python </td>
                <td>2</td>
                <td>1:1:0</td>
                <td>DFO, Athamalik </td>
                
            </tr>

            <tr id={styles.even_row}>
                <td>10</td>
                <td>3/ 2/ 2022</td>
                <td>Lizard </td>
                <td>1</td>
                <td>0:1:0</td>
                <td>Debagaram, Krishnanagar</td>
                   
            </tr>

            <tr id={styles.odd_row}>
                <td>11</td>
                <td>25/ 1/ 2022</td>
                <td>Polar bear</td>
                <td>3</td>
                <td>1:1:1</td>
                <td>Karakoram Range	</td>
                
                
            </tr>

            <tr id={styles.even_row}>
                <td >12</td>
                <td>9/ 1/ 2022</td>
                <td>Parrot </td>
                <td>3</td>
                <td>1:2:0</td>
                <td>Balipatna Range</td>
                
                
            </tr>

            <tr id={styles.odd_row}>
                <td>13</td>
                <td>29/ 12/ 2021</td>
                <td>Tiger Snake </td>
                <td>1</td>
                <td>1:0:0</td>
                <td>DFO, Nayagarh</td>
                
                
            </tr>

            <tr id={styles.even_row}>
                <td>14</td>
                <td>25/ 12/ 2021</td>
                <td>Great horned owl</td>
                <td>1</td>
                <td>1:0:0</td>
                <td>Sundargarh Forest Division</td>
                
                
            </tr>

            <tr id={styles.odd_row}>
                <td>15</td>
                <td>30/ 11/ 2021</td>
                <td>Rat snake</td>
                <td>2</td>
                <td>1:0:1</td>
                <td>DFO, Rajastan</td>
                
                
            </tr>

            <tr id={styles.even_row}>
                <td>16</td>
                <td>19/ 9/ 2021</td>
                <td>Chinkara </td>
                <td>2</td>
                <td>1:1:0</td>
                <td>DFO, Ghumsur south division</td>
                
                
            </tr>

            <tr id={styles.odd_row}>
                <td>17</td>
                <td>22/ 7/ 2021</td>
                <td>Luna Moth </td>
                <td>5</td>
                <td>4:1:0</td>
                <td>DFO, Ghumsur south division</td>
                
                
            </tr>

            <tr id={styles.even_row}>
                <td>18</td>
                <td>23/ 4/ 2021</td>
                <td>Silver-spotted Skipper</td>
                <td>4</td>
                <td>2:1:1</td>
                <td>DFO, Nayagarh</td>
                
                
            </tr>

            <tr id={styles.odd_row}>
                <td>19</td>
                <td>16/ 1/ 2021</td>
                <td>Black Widow Spider </td>
                <td>1</td>
                <td>1:0:0</td>
                <td>DFO, Nayagarh</td>
                
                
            </tr>

            <tr id={styles.even_row}>
                <td>20</td>
                <td>10/ 4/ 2020</td>
                <td>Wolf Spider </td>
                <td>5</td>
                <td>3:2:0</td>
                <td>Balipatna Range</td>
    
            </tr>

            <tr id={styles.odd_row}>
                <td>21</td>
                <td>10/ 4/ 2020</td>
                <td>Squirrel monkey	</td>
                <td>2</td>
                <td>1:1:0</td>
               
                <td>Balipatna Range</td>

            </tr>

            </tbody>
    );
};

export default Tab_body ;