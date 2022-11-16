const db = require('../utils/database')
const { Users, Conversations, Messages, Participants } = require('./index')
const initModels = require('../models/initModels')

initModels()

const users = [
    {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@gmail.com',
        password: '12dfh56',
        phone: '123432189',
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'jane@gmail.com',
        password: '12df456',
        phone: '123456789',
    },
    {
        firstname: 'Jack',
        lastname: 'Doe',
        email: 'jack@gmail.com',
        password: '1er56',
        phone: '123445689',
    },
]

const conversations = [
    { title: 'Con los compas', type: 'group', createdBy: 1 },
    { title: 'Chat de Jane', type: 'single', createdBy: 2 },
    { title: 'Chat de Jack', type: 'single', createdBy: 3 },
]

const participants = [
    { userId: 1, conversationId: 1 },
    { userId: 2, conversationId: 1 },
    { userId: 3, conversationId: 1 },
    { userId: 1, conversationId: 2 },
    { userId: 2, conversationId: 1 },
    { userId: 2, conversationId: 3 },
    { userId: 3, conversationId: 2 },
]

const messages = [
    { senderId: 1, conversationId: 1, text: 'Salimos o k' },
    { senderId: 2, conversationId: 1, text: 'No puedo ando con express y sequilize' },
    { senderId: 3, conversationId: 1, text: 'No me digas' },
    { senderId: 1, conversationId: 2, text: 'Hola' },
    { senderId: 2, conversationId: 1, text: 'Quien eres?' },
    { senderId: 1, conversationId: 2, text: 'No se dimelo tu' },
    { senderId: 2, conversationId: 3, text: 'Vamos?' },
    { senderId: 3, conversationId: 2, text: 'No puedo' },
]

db.sync({ force: true })
    .then(() => {
        console.log('Base de datos sincronizada')
        users.forEach(async (user) => await Users.create(user))
        setTimeout(() => {
            conversations.forEach(async (conversation) => await Conversations.create(conversation))
        }, 100)
        setTimeout(() => {
            participants.forEach(async (participant) => await Participants.create(participant))
        }, 200)
        setTimeout(() => {
            messages.forEach(async (message) => await Messages.create(message))
        }, 300)
    })
    .catch((error) => console.log(error))
