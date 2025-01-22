import mongoose, {Schema} from "mongoose";

const contactSchema=new Schema({
    name:{
        type:string,
        required:[true,"Name required"],
    },
    email:{
        type:string,
        required:[true,"Email required"],
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Email is invalid",  // Proper email validation regex here
          ],
        },
        message:{
            type:string,
            required:[true,"Message required"],
        },
        },
        {
            timestamps:true,
        }
);
const Contact=mongoose.models?.Contact || mongoose.model('Contact',contactSchema);
export default Contact;

