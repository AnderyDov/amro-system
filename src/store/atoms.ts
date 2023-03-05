import { atom } from 'recoil';

export const usersState = atom({
    key: 'usersState',
    default: [],
});

export const currentItemState = atom({
    key: 'currentItemState',
    default: [],
});

export const pageCountState = atom({
    key: 'pageCountState',
    default: 0,
});

export const itemOffsetState = atom({
    key: 'itemOffsetState',
    default: 0,
});

export const sortTypeState = atom({
    key: 'sortTypeState',
    default: 'ID',
});

export const sortDirectionState = atom({
    key: 'sortDirectionState',
    default: true,
});
