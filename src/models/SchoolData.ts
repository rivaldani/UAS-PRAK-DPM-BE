import mongoose from 'mongoose';

const schoolDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['guru', 'siswa'],
  },
  kelas: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

export const SchoolData = mongoose.model('SchoolData', schoolDataSchema);
