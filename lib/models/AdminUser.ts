import mongoose, { Schema, Model } from 'mongoose'

// Define the interface without extending Document to avoid type conflicts
export interface IAdminUser {
  email: string
  password: string
  role: string
  createdAt: Date
}

// Define the complete document type
export interface IAdminUserDocument extends IAdminUser, mongoose.Document {
  _id: mongoose.Types.ObjectId
}

const AdminUserSchema = new Schema<IAdminUserDocument>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: String,
    default: 'admin',
    enum: ['admin'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Prevent model recompilation during hot reload
const AdminUser = (mongoose.models.AdminUser as Model<IAdminUserDocument>) || mongoose.model<IAdminUserDocument>('AdminUser', AdminUserSchema)

export default AdminUser
