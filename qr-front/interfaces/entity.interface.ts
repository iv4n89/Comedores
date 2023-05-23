

export interface Entity {
    id: number;
    identifier: string;
    name: string;
    nif: string;
    applicableRate: 0.5 | 0.75 | 2.5;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface EntityRequest {
    name: string;
    nif: string;
    applicableRate: 0.5 | 0.75 | 2.5;
}