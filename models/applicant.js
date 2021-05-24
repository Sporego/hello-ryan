import mongoose from "mongoose";
const { Schema } = mongoose;

const applicantSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  skills: [
    {
      type: String,
      validate: {
        validator: function (v) {
          return !(this.skills.length < 16);
        },
        message: (props) =>
          `${props.value} exceeds maximum skills amount of 16`,
      },
      required: [true, "applicant must have at least one skill!"],
    },
  ],
});

const Applicant = mongoose.model("Applicant", applicantSchema);

export default Applicant;
