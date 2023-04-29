import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL =`mongodb://${USERNAME}:${PASSWORD}@ac-uk3zacf-shard-00-00.v2wmzzp.mongodb.net:27017,ac-uk3zacf-shard-00-01.v2wmzzp.mongodb.net:27017,ac-uk3zacf-shard-00-02.v2wmzzp.mongodb.net:27017/?ssl=true&replicaSet=atlas-gh2bg9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;