'use strict';
const db = require('../database');
const User = require('../models/user');

module.exports = {
    async addUser (req: any, res: any) {
        try {
            const data = req.body;
            await db.collection('users').doc().set(data);
            res.status(200).send('Record saved successfully');
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    async getAllUsers (req: any, res: any) {
        try {
            
            const users = await db.collection('users');
            const data = await users.get();
            const dataArray: typeof User[] = [];
            if(data.empty){
                res.status(404).send('No users record found');
            } else {
                data.forEach((doc: any) => {
                    const user = new User(
                        doc.id,
                        // doc.data().id,
                        doc.data().firstName,
                        doc.data().lastName,
                        doc.data().participation
                    );
                    dataArray.push(user);
                });
                res.send(dataArray);
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async getUser (req: any, res: any) {
        try {
            const id = req.params.id;
            const user = await db.collection('users').doc(id);
            const data = await user.get();
            if(!data.exists) {
                res.status(404).send('User not found');
            } else {
                res.status(200).send(data.data());
            }
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async updateUser (req: any, res: any) {
        try {
            const id = req.params.id;
            const data = req.body;
            const user = await db.collection('users').doc(id);
            await user.update(data);
            res.send('User updated');
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async deleteUser (req: any, res: any) {
        try {
            const id = req.params.id;
            await db.collection('users').doc(id).delete();
            res.send('User deleted successfully');
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
