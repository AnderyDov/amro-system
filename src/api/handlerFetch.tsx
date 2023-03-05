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
        const result = [...data].map((el, i) => {
            if ('user' in el) {
                let obj: IUsers1 = {};
                obj.id = el.id;
                obj.name = el.user.name;
                obj.lastName = el.user.lastName;
                obj.birthDate = el.user.birthDate;
                obj.access = el.user.access;
                return obj;
            } else {
                return el;
            }
        });
        setData(result);
    } catch (err) {
        console.log(err);
    }
}
