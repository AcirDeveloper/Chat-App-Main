const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Conversations = require('./conversations.models')
const Users = require('./users.models')

const Participants = db.define(
    'participants',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'user_id',
            references: {
                model: Users,
                key: 'id',
            },
        },
        conversationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'conversation_id',
            references: {
                model: Conversations,
                key: 'id',
            }, // No sabemos el tipo de relacion
        },
    },
    {
        timestamps: true,
        updatedAt: false,
    }
)

module.exports = Participants
