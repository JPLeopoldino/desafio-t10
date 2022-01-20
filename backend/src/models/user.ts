'use strict';

class Users {
    id: string;
    firstName: string;
    lastName: string;
    participation: number;

    constructor(id: string, firstName: string, lastName: string, participation: number) {
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.participation = participation
    }
}

module.exports = Users;
