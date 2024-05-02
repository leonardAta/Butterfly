import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },

        password: {
            type: String,
            trim: true,
            required: true,
            min: 6,
            max: 60,
        },

        email: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },

        secret: {
            type: String,
            required: true,
        },

        username: {
            type: String,
            unique: true,
            required: true,
        },
        about: {},
        image: {
            url: String,
            public_id: String,
        },
        following: [
            {
                type: Schema.ObjectId,
                ref: 'User',
            },
        ],

        followers: [
            {
                type: Schema.ObjectId,
                ref: 'User',
            },
        ],
    },
    { timestamps: true },
)

export default mongoose.model('User', userSchema)
