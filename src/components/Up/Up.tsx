import styles from './Up.module.css';
import useScrollY from '../../hooks/useScrollY';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export function Up() {
    const y = useScrollY();

    function scrollTo() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <ButtonIcon
            aria-label='кнопка вверх'
            appearens='primary'
            icon='up'
            onClick={scrollTo}
        />
    );
}
