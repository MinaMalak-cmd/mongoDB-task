import noteModel from "./models/note.model.js";
import userModel from "./models/user.model.js";

const seedUsers = [
    {
        "_id": "64a2835d0d891295bcb000c8",
        "username": "User 1",
        "age": 23,
        "password": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "notes": [],
        "__v": 0
    },
    {
        "_id": "64a2836b0d891295bcb000ca",
        "username": "User 2",
        "age": 24,
        "password": "nnnnn",
        "notes": [],
        "__v": 0
    },
    {
        "_id": "64a283720d891295bcb000cc",
        "username": "User 3",
        "age": 25,
        "password": "lllll",
        "notes": [],
        "__v": 0
    },
    {
        "username": "User 4",
        "age": 44,
        "password": "cccc",
        "notes": [],
        "__v": 0
    }
];

const seedNotes = [
    {
        "_id": "64a283950d891295bcb000d0",
        "noteName": "note1 -modified",
        "description": "this is note1 - modified",
        "owner": {
            "_id": "64a2835d0d891295bcb000c8",
            "username": "User 1",
            "age": 23,
            "notes": [],
            "__v": 0
        },
        "createdAt": "2023-07-03T08:15:17.858Z",
        "updatedAt": "2023-07-03T08:48:39.567Z",
        "__v": 0
    },
    {
        "_id": "64a28d16abf84b9a52463ced",
        "noteName": "note2-2",
        "description": "this is note2-2",
        "owner": {
            "_id": "64a2836b0d891295bcb000ca",
            "username": "User 2",
            "age": 24,
            "notes": [],
            "__v": 0
        },
        "createdAt": "2023-07-03T08:55:50.471Z",
        "updatedAt": "2023-07-03T08:55:50.471Z",
        "__v": 0
    },
    {
        "_id": "64a28d2cabf84b9a52463cf0",
        "noteName": "Check seeding",
        "description": "this is note3-3",
        "owner": {
            "_id": "64a283720d891295bcb000cc",
            "username": "User 3",
            "age": 25,
            "notes": [],
            "__v": 0
        },
        "createdAt": "2023-07-03T08:56:12.171Z",
        "updatedAt": "2023-07-03T08:56:12.171Z",
        "__v": 0
    }
];

const seedDB = async () =>{
    await userModel.deleteMany({});
    await noteModel.deleteMany({});
    await userModel.insertMany(seedUsers);
    await noteModel.insertMany(seedNotes);
}

export default seedDB;
