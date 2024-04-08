const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jhonatanaugusto1998:1b0q8CqfX2KLlOkL@cluster01.6bprpfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongo Db conectado com sucesso');
    } catch (error) {
        console.error('Conexão com o mongo db zoada: ', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;