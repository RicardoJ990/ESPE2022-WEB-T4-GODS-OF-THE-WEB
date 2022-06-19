import mongoose from "mongoose"

mongoose.connect("mongodb+srv://grupo4nrc5450:grupo4nrc5450@clusterg4.q6pz6.mongodb.net/Happy_Avocado?retryWrites=true&w=majority")
    .then(db => console.log('Db is conected'))

    