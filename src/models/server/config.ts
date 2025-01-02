// const sdk = require('node-appwrite');
import {Avatars , Databases , Client , Storage , Users} from 'node-appwrite'
import env from "@/app/env";

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setKey(env.appwrite.apikey) // Your secret API key
;

const users = new Users(client);
const databases = new Databases(client);
const avatar = new Avatars(client);
const storage = new Storage(client);

export {client , databases , users , avatar , storage}