import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';

export default function Header({ className, ...props }: HeaderProps) {
    return (
        <header className={cn(className, styles.header)} {...props}>
            AMRO-SYSTEM TEST TASK
        </header>
    );
}
