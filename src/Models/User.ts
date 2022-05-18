import { Document, Schema, ObjectId, model } from "mongoose";

interface User {
    username: string,
    email: string,
    role: string
}

const userSchema = new Schema<User>(
    {
        username: String,
        email: String,
        role: {
            type: String,
            enum: {
                values: ["Seller", "Buyer"]
            }
        }
    }
)

export default model<User>("User", userSchema);
