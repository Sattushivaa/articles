import { Schema, model } from 'mongoose'

const msgSchema = new Schema({
    sent_by : String,
    sent_for : String,
    not_visible_to : [String]
},{
    timestamps : true
})

const Message  = model("Message",msgSchema);
export { Message };