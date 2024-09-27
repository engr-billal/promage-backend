import mongoose, { Document } from 'mongoose';

interface ITask extends Document {
  projectId: mongoose.Types.ObjectId; 
  description: string;
  status: string; 
  startDate: Date;
  endDate: Date;
}

const taskSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;
