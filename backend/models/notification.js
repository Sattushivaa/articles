import { Schema, model } from 'mongoose'

const notifSchema = new Schema({
    belongs_to : String,
    sent_by : String,
    heading : String,
    body : String
})

const Notification =  model('Notification',notifSchema);
export { Notification };