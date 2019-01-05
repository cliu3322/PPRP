const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileDetailSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    uploader: { type: String, required: true },
    filePath: { type: String, required: true },
    fileName: { type: String, required: true },
    title: { type: String, required: false },
    author: { type: String, required: false },
    abstract: { type: String, required: false },
    subject: { type: String, required: false },
    source: { type: String, required: false },
    reference_number: { type: String, required: false },
    method: { type: String, required: false }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("FileDetail", FileDetailSchema);
