// Solo importaciones e importacviones
const Users = require('./users.models')

const { Users, Conversations, Messages, Participants } = require('./index')

const initModels = () => {
    // muchos a muchos (conversaciones y usuarios)
    Users.belongsToMany(Conversations, { through: Participants })
    Conversations.belongsToMany(Users, { through: Participants })

    // uno a muchos (usuarios y mensajes)
    Messages.belongsTo(Users, { as: 'sender', foreignKey: 'sender_id' })
    Users.hasMany(Messages, { as: 'messages', foreignKey: 'sender_id' })

    // uno a muchos (conversaciones y mensajes)
    Messages.belongsTo(Conversations, { as: 'chat', foreignKey: 'conversation_id' })
    Conversations.hasMany(Messages, { as: 'messages', foreignKey: 'conversation_id' })

    // uno a muchos (usuarios y conversaciones)
    Participants.belongsTo(Users, { as: 'owner', foreignKey: 'created_at' })
    Users.hasMany(Participants, { as: 'chats', foreignKey: 'created_at' })

    Users
    Conversations
    Messages
    Participants
}

module.exports = initModels
