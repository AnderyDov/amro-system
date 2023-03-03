import axios from 'axios';

export async function handlerFetch(setData: any) {
    try {
        const { data } = await axios.get('https://retoolapi.dev/Sw0GYS/data');
        setData(data);
    } catch (err) {
        console.log(err);
    }
}
