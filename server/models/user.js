import mongoose from 'mongoose'
const Schema = mongoose.Schema

let userSchema = new Schema(
    {
        name: { type: String, trim: true, required: true },
        password: { type: String, trim: true, required: true, min: 6, max: 60 },
        email: { type: String, trim: true, unique: true, required: true },
        secret: { type: String, required: true },
        about: {},
        photo: String,
        following: [{ type: Schema.ObjectId, ref: 'User' }],
        followers: [{ type: Schema.ObjectId, ref: 'User' }],
    },
    { timestamps: true },
)

export default mongoose.model('User', userSchema)
