import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TableProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLTableElement>,
        HTMLTableElement
    > {}
