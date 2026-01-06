import mongoose, { Schema, Model } from 'mongoose'
import { COLLECTIONS, type CollectionType } from '../item-types'

export { COLLECTIONS, type CollectionType }

// Define the interface without extending Document to avoid type conflicts
export interface IItem {
  title: string
  slug: string
  description: string
  images: string[]
  category: CollectionType
  price?: number
  dimensions?: string
  material?: string
  createdAt: Date
  updatedAt: Date
}

// Define the complete document type
export interface IItemDocument extends IItem, mongoose.Document {
  _id: mongoose.Types.ObjectId
}

const ItemSchema = new Schema<IItemDocument>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    images: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: COLLECTIONS,
    },
    price: {
      type: Number,
    },
    dimensions: {
      type: String,
    },
    material: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

// Create index for faster queries (removed duplicate slug index since unique:true already creates one)
ItemSchema.index({ category: 1, createdAt: -1 })

// Prevent model recompilation during hot reload
const Item = (mongoose.models.Item as Model<IItemDocument>) || mongoose.model<IItemDocument>('Item', ItemSchema)

export default Item
