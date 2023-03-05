import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    currentItemState,
    pageCountState,
    itemOffsetState,
    usersState,
} from '../../store/atoms';

import ReactPaginate from 'react-paginate';
import { useEffect } from 'react';
import { IUsers1, IUsers2 } from '../../interfaces/users.interface';

export default function Footer({ className, ...props }: FooterProps) {
    const items = [...Array(17).keys()];
    const users = useRecoilValue<IUsers1[] | IUsers2[]>(usersState);

    function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
        const [, setCurrentItems] = useRecoilState<any>(currentItemState);
        const [pageCount, setPageCount] = useRecoilState<any>(pageCountState);
        const [itemOffset, setItemOffset] =
            useRecoilState<any>(itemOffsetState);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(users.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(users.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        const handlePageClick = (event: { selected: number }) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`,
            );
            setItemOffset(newOffset);
        };

        return (
            <>
                <ReactPaginate
                    nextLabel='next >'
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel='< previous'
                    pageClassName={styles.pageItem}
                    pageLinkClassName='page-link'
                    previousClassName={styles.pageItem}
                    previousLinkClassName='page-link'
                    nextClassName={styles.pageItem}
                    nextLinkClassName='page-link'
                    breakLabel='...'
                    breakClassName={styles.pageItem}
                    breakLinkClassName='page-link'
                    containerClassName={styles.pagination}
                    activeClassName={styles.active}
                />
            </>
        );
    }

    return (
        <footer className={cn(styles.footer, className)} {...props}>
            <PaginatedItems itemsPerPage={10} />
        </footer>
    );
}
