import moongose, {Schema} from 'mongoose';

const recipeSchema=new Schema(
    {
        recipename:{
            type:String,
            required:[true,"Recipe title required"],
        },
        ingredients:{
            type:String,
            required:[true,"Recipe ingredients required"],
        },
        instructions:{
            type:String,
            required:[true,"Recipe instructions required"],
        },
        recipeimage:{
            type:string,
            default:null,
        },
    },
    {
        timestamps:true,
    }

);
const Recipe=moongose.models?.Recipe || moongose.model('Recipe',recipeSchema);
export default Recipe;