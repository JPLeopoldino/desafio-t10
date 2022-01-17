'use strict';
// const database = require('../database');
// import { getFirestore } from 'firebase-admin/firestore';
// const firestore = getFirestore(database);
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const Users = require('../models/user');
import { db } from '../database';
import { User } from '../models/user';
// import express, { NextFunction, Response, Request } from "express";

const addUser = async (req: any, res: any) => {
    try {
        const data = req.body;
        await db.collection('users').doc().set(data);
        res.status(200).send('Record saved successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUsers = async (req: any, res: any) => {
    try {
        const users = await db.collection('users');
        const data = await users.get();
        const dataArray: User[] = [];
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
}

const getUser = async (req: any, res: any) => {
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
}

const updateUser = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const user = await db.collection('users').doc(id);
        await user.update(data);
        res.send('User updated');
    } catch (error) {
        res.status(400).send(error);
    }
}

const deleteUser = async (req: any, res: any) => {
    try {
        const id = req.params.id;
        await db.collection('users').doc(id).delete();
        res.send('User deleted successfully');
    } catch (error) {
        res.status(400).send(error);
    }
}

export { 
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
 };
