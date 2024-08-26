import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./table.module.css";


const Table = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/new_born');
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const totalBirths = items.reduce((sum, item) => sum + Number(item.birth), 0);
        setTotal(totalBirths);
    }, [items]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <table className="TABLE">
                <thead>
                    <tr className={styles.tab_hding}>
                        <th>SPECIES</th>
                        <th>BIRTH</th>
                    </tr>
                </thead>
                <tbody className={styles.species}>
                    {items.map((item) => (
                        <tr >
                            <td id="amph">{item.species}</td>
                            <td>{item.birth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div id="total">Total species = {total}</div>
        </>
    );
}

export default Table;