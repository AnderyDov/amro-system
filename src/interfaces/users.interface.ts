export interface IUsers1 {
    id: string;
    access: boolean;
    name: string;
    lastName: string;
    birthDate: string;
    email: string;
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
