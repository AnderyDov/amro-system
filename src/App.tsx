import withLayout from './layout/Layout';
import { useEffect } from 'react';
import { Table } from './components';
import { useRecoilState } from 'recoil';
import { usersState } from './store/atoms';
import { handlerFetch } from './api/handlerFetch';

function App(): JSX.Element {
    const [data, setData] = useRecoilState<any>(usersState);

    useEffect(() => {
        handlerFetch(setData);
    }, []);

    return <Table />;
}

export default withLayout(App);
