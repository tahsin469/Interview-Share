import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

var User = mongoose.model('User', userSchema);

export default User;

// export default mongoose.model("User", userSchema);

// var PostMessage = mongoose.model('PostMessage', postSchema);

// export default PostMessage;