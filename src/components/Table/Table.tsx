import styles from './Table.module.css';
import { TableProps } from './Table.props';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
    currentItemState,
    sortDirectionState,
    sortTypeState,
    usersState,
} from '../../store/atoms';
import { IUsers1, IUsers2 } from '../../interfaces/users.interface';
import Ok from './ok.svg';
import Ban from './ban.svg';
import Arrow from './arrow.svg';
import { checkToEmpty, sortByField } from '../../helpers/helpers';
import { MouseEvent } from 'react';
import cn from 'classnames';

export function Table({ ...props }: TableProps): JSX.Element {
    const [date, setDate] = useRecoilState<any>(usersState);
    const [users, setUsers] = useRecoilState<any>(currentItemState);
    const [direction, setDirection] = useRecoilState<any>(sortDirectionState);
    const [sortType, setSortType] = useRecoilState<any>(sortTypeState);

    function toggleSortDirection(e: MouseEvent) {
        setSortType(e.currentTarget.id);
        let result = [...date].sort(sortByField(e.currentTarget.id));
        setUsers(result);
    }

    return (
        <div className={styles.table}>
            <div>{sortType}</div>
            <button onClick={() => console.log(users)}>click</button>
            <table>
                <tbody>
                    <tr>
                        <th onClick={(e) => toggleSortDirection(e)} id='id'>
                            <span>
                                ID
                                <span className={styles.down}>
                                    <Arrow />
                                </span>
                            </span>
                        </th>
                        <th onClick={(e) => toggleSortDirection(e)} id='name'>
                            <span>
                                NAME
                                <span className={styles.down}>
                                    <Arrow />
                                </span>
                            </span>
                        </th>
                        <th
                            onClick={(e) => toggleSortDirection(e)}
                            id='lastName'
                        >
                            <span>
                                LASTNAME
                                <span className={styles.down}>
                                    <Arrow />
                                </span>
                            </span>
                        </th>
                        <th onClick={(e) => toggleSortDirection(e)} id='email'>
                            <span>
                                EMAIL
                                <span className={styles.down}>
                                    <Arrow />
                                </span>
                            </span>
                        </th>
                        <th
                            onClick={(e) => toggleSortDirection(e)}
                            id='birthDate'
                        >
                            <span>
                                BIRTHDAY
                                <span className={styles.down}>
                                    <Arrow />
                                </span>
                            </span>
                        </th>
                        <th onClick={(e) => toggleSortDirection(e)} id='access'>
                            <span>
                                ACCESS
                                <span className={styles.down}>
                                    <Arrow />
                                </span>
                            </span>
                        </th>
                    </tr>
                    {users &&
                        [...users].map((el, i) => {
                            return (
                                <tr key={el.id}>
                                    <td>{checkToEmpty(el.id)}</td>
                                    <td>{checkToEmpty(el.name)}</td>
                                    <td>{checkToEmpty(el.lastName)}</td>
                                    <td>{checkToEmpty(el.email)}</td>
                                    <td>{checkToEmpty(el.birthDate)}</td>
                                    <td>{el.access ? <Ok /> : <Ban />}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
