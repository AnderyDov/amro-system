import withLayout from './layout/Layout';
import { useEffect } from 'react';
import { Table } from './components';
import { useRecoilState } from 'recoil';
import { usersState } from './store/atoms';
import { handlerFetch } from './api/handlerFetch';

function App(): JSX.Element {
    const [data, setData] = useRecoilState(usersState);

    useEffect(() => {
        handlerFetch(setData);
    }, []);

    return (
        <>
            <button onClick={() => console.log(data)}>click</button>
            <Table />
        </>
    );
}

export default withLayout(App);
