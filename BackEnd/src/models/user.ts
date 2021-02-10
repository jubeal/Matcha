enum GenderEnum {
    'MALE',
    'FEMALE',
    'AGENDER',
    'GENDERFLUID'
}

interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    tel: string;
    gender: GenderEnum;
    target: GenderEnum;
    lat: number;
    long: number;
    job: string;
    jobLocation: string;
    residency: string;
}

export default User ;