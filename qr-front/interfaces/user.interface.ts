

export interface User {
    id: number;
    name: string;
    surname?: string;
    telNumber: string;
    identityDoc?: IdentityDoc;
    address?: Address;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserPost extends User {
    commPlaceId?: number;
}

export interface IdentityDoc {
    id: number;
    idNumber: string;
    docType: 'DNI' | 'NIE' | 'Passport';
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface Address {
    id: number;
    addrType: string;
    streetName: string;
    streetNumber: string;
    floor?: number;
    door?: string;
    country?: Country;
    state?: State;
    city?: City;
    extraInfo?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface AddressPost extends Address {
    countryId?: number;
    stateId?: number;
    cityId?: number;
}

export interface Country {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface State {
    id: number;
    name: string;
    country?: Country;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface City {
    id: number;
    name: string;
    postalCode: string;
    state?: State;
    country?: Country;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}