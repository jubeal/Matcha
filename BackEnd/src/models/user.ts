enum GenderEnum {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    AGENDER = 'AGENDER',
    GENDERFLUID = 'GENDERFLUID'
}

interface User {
    id?: number;
    firstname: string;
    lastname: string;
    age: number;
    email: string;
    tel?: string;
    gender: GenderEnum;
    target: GenderEnum;
    lat?: number;
    long?: number;
    job?: string;
    jobLocation?: string;
    residency?: string;
    pwd: string;
    salt: string;
}

export { User, GenderEnum };