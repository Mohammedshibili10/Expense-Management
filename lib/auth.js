import jwt from 'jsonwebtoken'
export const generateToken = (user) => {
    return jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

export const authenticate = (req) => {
    try {
        const authHeader = req.headers.get("authorization")
        if (!authHeader) {
            throw new Error("User not authenticated")
        }
        const token = authHeader.split(" ")[1]
        const decode = jwt.verify(token, process.env.JWT_SECRET)

        return decode
    } catch (error) {

        throw new Error("Invalid token")


    }
}