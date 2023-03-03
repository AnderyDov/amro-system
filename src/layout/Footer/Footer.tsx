import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';

export default function Footer({ className, ...props }: FooterProps) {
    return (
        <footer className={cn(styles.footer, className)} {...props}>
            FOOTER
        </footer>
    );
}
