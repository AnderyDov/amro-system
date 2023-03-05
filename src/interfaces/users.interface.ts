export interface IUsers1 {
    id?: string;
    access?: boolean;
    name?: string;
    lastName?: string;
    birthDate?: string;
    email?: string;
}

export interface IUsers2 {
    id: string;
    user: {
        access: boolean;
        name: string;
        lastName: string;
        birthDate: string;
        email: string;
    };
}

export interface ISortType {
    type: 'id' | 'name' | 'lastName' | 'email' | 'birthDate' | 'access';
}

export interface ISortDeirection {
    direction: boolean;
}
