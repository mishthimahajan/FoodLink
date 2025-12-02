
import mongoose from "mongoose";
import bcrypt from "bcryptjs";


// ✅ Connect to MongoDB (you can change DB name if needed)
// mongoose.connect("mongodb://127.0.0.1:27017/FoodLink", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const db = process.env.MONGO_URI;
console.log (db)
mongoose
  .connect(db)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["donor", "receiver"],
      // default:"donor",
      required: true,
    },
          
  
    
  },
  { timestamps: true }
);


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


const user = mongoose.model("user", userSchema);
// module.exports = User;
export default user;
