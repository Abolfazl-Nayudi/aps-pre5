const { Schema, model } = require("mongoose");

const VerifyEmailSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expiresDate: {
    type: Date,
    required: true,
    default: () => {
      const now = new Date();
      now.setHours(now.getHours() + 1);
      return now;
    },
    index: { expires: "1h" },
  },
});

// const VerifyEmailModel = model("verifyEmails", VerifyEmailSchema);
// module.exports = VerifyEmailModel;

module.exports = model("verifyEmails", VerifyEmailSchema);
