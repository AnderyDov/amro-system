import styles from './Table.module.css';
import { TableProps } from './Table.props';
import { useRecoilValue } from 'recoil';
import { usersState, currentItemState } from '../../store/atoms';
import { IUsers1, IUsers2 } from '../../interfaces/users.interface';
import Ok from './ok.svg';
import Ban from './ban.svg';

function checkToEmpty(string: string) {
    return string !== '' && string ? string : 'неизвестно';
}

export function Table({ ...props }: TableProps): JSX.Element {
    const users = useRecoilValue<IUsers1[] | IUsers2[]>(currentItemState);

    return (
        <div className={styles.table}>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>LASTNAME</th>
                        <th>EMAIL</th>
                        <th>BIRTHDAY</th>
                        <th>ACCESS</th>
                    </tr>
                    {users &&
                        [...users].map((el, i) => {
                            if ('user' in el) {
                                return (
                                    <tr key={el.id}>
                                        <td>{checkToEmpty(el.id)}</td>
                                        <td>{checkToEmpty(el.user.name)}</td>
                                        <td>
                                            {checkToEmpty(el.user.lastName)}
                                        </td>
                                        <td>{checkToEmpty(el.user.email)}</td>
                                        <td>
                                            {checkToEmpty(el.user.birthDate)}
                                        </td>
                                        <td>
                                            {el.user.access ? <Ok /> : <Ban />}
                                        </td>
                                    </tr>
                                );
                            } else {
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
                            }
                        })}
                </tbody>
            </table>
        </div>
    );
}
