import mongoose, { Document } from 'mongoose';

interface IProject extends Document {
  name: string;
  description: string;
  manager: string;
  startDate: Date;
  endDate: Date;
  isRunning: boolean;
  tasks: mongoose.Types.ObjectId[]; 
}

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  manager: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isRunning: { type: Boolean, default: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

const Project = mongoose.model<IProject>('Project', projectSchema);

export default Project;
