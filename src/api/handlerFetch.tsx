import axios from 'axios';
import { SetterOrUpdater } from 'recoil';
import { IUsers1, IUsers2 } from '../interfaces/users.interface';

export async function handlerFetch(
    setData: SetterOrUpdater<IUsers1[] | IUsers2[]>,
) {
    try {
        const { data } = await axios.get<IUsers1[] | IUsers2[]>(
            'https://retoolapi.dev/eqsQ4S/users',
        );
        setData(data);
    } catch (err) {
        console.log(err);
    }
}
