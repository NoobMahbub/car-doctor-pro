import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        const uri = process.env.NEXT_PUBLIC_MONGODB_URI
        console.log("uri", uri)
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });
        const res = await client.connect();
        console.log("res", res)
        db = client.db('car_doctor_pro')
        // Debugging line
        // console.log('Connected DB:', db);
        return db;
    } catch (error) {
        console.log(error)
    }
}