import bcrypt from 'bcrypt'

export const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) return reject(err)
            bcrypt.hash(password, salt, (error, hash) => {
                if (error) return reject(error)
                resolve(hash)
            })
        })
    })
}

export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}
