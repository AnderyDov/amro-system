import styles from './Table.module.css';
import { TableProps } from './Table.props';

export function Table({ ...props }: TableProps): JSX.Element {
    return (
        <div className={styles.table}>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                    </tr>
                    {/* {data &&
                        [...data].map((el, i) => {
                            return (
                                <tr key={i}>
                                    <td>{el?.id}</td>
                            <td>{el?.name}</td>
                                </tr>
                            );
                        })} */}
                </tbody>
            </table>
        </div>
    );
}
