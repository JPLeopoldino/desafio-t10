'use strict';

class User {
    id: number;
    firstName: string;
    lastName: string;
    participation: number;

    constructor(id: number, firstName: string, lastName: string, participation: number) {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.participation = participation
    }
}

export { User };