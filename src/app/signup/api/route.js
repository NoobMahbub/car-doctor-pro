import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        console.log("db", db)
        const userCollection = await db.collection('users')
        const exist = await userCollection.findOne({
            email: newUser.email
        })
        if (exist) {
            console.log("User exist")
            return Response.json({ message: "User Exists" }, { status: 409 })
            // return new Response(JSON.stringify({ message: "User Exists" }), { status: 409 });

        }
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);

        const res = await userCollection.insertOne({ ...newUser, password: hashedPassword })
        return Response.json({ message: "User Created", res }, { status: 200 })

    } catch (error) {
        return Response.json({ message: "Something went wrong", error }, { status: 500 })
    }
}