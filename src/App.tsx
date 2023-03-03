import styles from './Content.module.css';
import withLayout from './layout/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App(): JSX.Element {
    const [data, setData] = useState();

    async function handlerFetch() {
        try {
            const { data } = await axios.get(
                'https://retoolapi.dev/Sw0GYS/data',
            );
            setData(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handlerFetch();
    }, []);

    return (
        <div className={styles.table}>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                    {data &&
                        [...data].map((el, i) => {
                            return (
                                <tr key={i}>
                                    {/* <td>{el?.id}</td>
                                    <td>{el?.name}</td> */}
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default withLayout(App);
