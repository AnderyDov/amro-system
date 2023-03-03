import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

export default function Sidebar({ className, ...props }: SidebarProps) {
    return <div className={cn(className, styles.sidebar, {})} {...props}></div>;
}
