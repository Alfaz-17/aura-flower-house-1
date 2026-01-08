'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { createItem, updateItem, deleteItem } from '@/app/actions'
import { COLLECTIONS, type CollectionType } from '@/lib/item-types'

type Item = {
  _id: string
  title: string
  slug: string
  description: string
  category: CollectionType
  images: string[]
  price?: number
  dimensions?: string
  material?: string
  createdAt: string
}

export default function ItemsManager({ initialItems }: { initialItems: Item[] }) {
  const [items, setItems] = useState(initialItems)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<Item | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  // New state for file uploads
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('action') === 'add') {
      openAddForm()
    }
  }, [searchParams])

  function openAddForm() {
    setEditingItem(null)
    setIsFormOpen(true)
    setError('')
    setSelectedFiles([])
    setPreviews([])
  }

  function openEditForm(item: Item) {
    setEditingItem(item)
    setIsFormOpen(true)
    setError('')
    setSelectedFiles([])
    setPreviews([])
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const formData = new FormData(e.currentTarget)
      
      // Remove any existing 'images' from the raw form data to avoid duplicates/empty inputs
      formData.delete('images')
      
      // Append the existing images (hidden inputs logic might still be there, but we can rely on FormData if we didn't remove them)
      // Actually, relying on hidden inputs for existing images is fine. We just need to add the NEW files.
      // But we need to handle the case where the user 'removed' an existing image.
      // The current existing image logic uses hidden inputs: <input type="hidden" name="images" value={img} />
      // So formData *will* contain 'images' = 'url'. 
      // We explicitly deleted 'images' above, so we need to be careful.
      // Let's NOT delete 'images' blindly. 
      // The file input has name="images", so it sends [File, File].
      // The hidden inputs have name="images", so they send [String, String].
      
      // If we use the raw formData, it will contain the FileList from the input (which we can't easily clear selectively).
      // So we SHOULD remove the file input's contribution.
      // PROPOSAL: Remove the `name="images"` from the file input in the render, 
      // preventing it from catching the raw files. Then we append `selectedFiles` manually.
      
      selectedFiles.forEach(file => {
        formData.append('images', file)
      })

      if (editingItem) {
        await updateItem(editingItem._id, formData)
      } else {
        await createItem(formData)
      }

      // Refresh the page to get updated items
      window.location.reload()
    } catch (err: any) {
      setError(err.message || 'An error occurred')
      setLoading(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this item?')) {
      return
    }

    setLoading(true)
    try {
      await deleteItem(id)
      setItems(items.filter((item) => item._id !== id))
    } catch (err: any) {
      setError(err.message || 'Failed to delete item')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Helper Banner */}
      <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-lg space-y-2">
        <h3 className="font-serif text-lg text-blue-900">Inventory Management</h3>
        <p className="text-sm text-blue-800/80 leading-relaxed max-w-3xl">
          Here you can add, edit, or remove products from your catalog. 
          Use the "Add New Item" button to create a listing. 
          The <strong>first image</strong> you upload will serve as the main cover photo in the collection view.
        </p>
      </div>

      {/* Add Button */}
      <div className="flex justify-end">
        <button
            onClick={openAddForm}
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-foreground/90 transition-all rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
            <Plus size={16} />
            Add New Product
        </button>
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-background max-w-3xl w-full p-8 md:p-12 max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-white/20">
            <div className="flex justify-between items-start mb-8">
                <div>
                     <h2 className="font-serif text-3xl md:text-4xl">{editingItem ? 'Edit Product' : 'New Product'}</h2>
                     <p className="text-muted-foreground mt-2">Fill in the details below to update your catalog.</p>
                </div>
                <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-foreground/5 rounded-full transition-colors">
                    <X className="w-6 h-6" />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Product Title *</label>
                    <input
                      name="title"
                      type="text"
                      required
                      placeholder="e.g. Velvet Rose Bouquet"
                      defaultValue={editingItem?.title}
                      className="w-full bg-foreground/5 border-b-2 border-transparent focus:border-primary px-4 py-3 rounded-t-md focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Collection Category *</label>
                    <select
                      name="category"
                      required
                      defaultValue={editingItem?.category}
                      className="w-full bg-foreground/5 border-b-2 border-transparent focus:border-primary px-4 py-3 rounded-t-md focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Select a Collection...</option>
                      {COLLECTIONS.map((col) => (
                        <option key={col} value={col}>
                          {col.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </option>
                      ))}
                    </select>
                  </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Description *</label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  placeholder="Describe the texture, color, and suitable placement..."
                  defaultValue={editingItem?.description}
                  className="w-full bg-foreground/5 border-b-2 border-transparent focus:border-primary px-4 py-3 rounded-t-md focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Price (₹)</label>
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    defaultValue={editingItem?.price}
                    className="w-full bg-foreground/5 border-b-2 border-transparent focus:border-primary px-4 py-3 rounded-t-md focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Dimensions</label>
                  <input
                    name="dimensions"
                    type="text"
                    placeholder='e.g. 24" H × 12" W'
                    defaultValue={editingItem?.dimensions}
                    className="w-full bg-foreground/5 border-b-2 border-transparent focus:border-primary px-4 py-3 rounded-t-md focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Material</label>
                  <input
                    name="material"
                    type="text"
                    placeholder="e.g. Silk & Wire"
                    defaultValue={editingItem?.material}
                    className="w-full bg-foreground/5 border-b-2 border-transparent focus:border-primary px-4 py-3 rounded-t-md focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-dashed border-foreground/20">
                <div className="flex justify-between items-baseline">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    Product Images
                    </label>
                    <span className="text-xs text-muted-foreground italic">First image will be the cover</span>
                </div>
                
                {/* Existing Images */}
                {editingItem && editingItem.images.length > 0 && (
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    {editingItem.images.map((img, idx) => (
                      <div key={idx} className="relative group aspect-square rounded-lg overflow-hidden border border-foreground/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={`Item ${idx}`} className="w-full h-full object-cover" />
                        <input type="hidden" name="images" value={img} />
                        <button
                          type="button"
                          onClick={() => {
                            const newImages = [...editingItem.images]
                            newImages.splice(idx, 1)
                            setEditingItem({ ...editingItem, images: newImages })
                          }}
                          className="absolute top-1 right-1 p-1.5 bg-white/90 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-sm"
                          title="Remove Image"
                        >
                          <Trash2 size={12} />
                        </button>
                        {idx === 0 && (
                             <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[9px] uppercase tracking-wider text-center py-1 font-medium">Cover</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* New Uploads Previews */}
                {previews.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">New Selection</p>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                      {previews.map((src, idx) => (
                        <div key={idx} className="relative group aspect-square rounded-lg overflow-hidden border border-primary/30 ring-2 ring-primary/10">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={src} alt={`Preview ${idx}`} className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => {
                              URL.revokeObjectURL(previews[idx])
                              const newPreviews = [...previews]
                              newPreviews.splice(idx, 1)
                              setPreviews(newPreviews)
                              const newFiles = [...selectedFiles]
                              newFiles.splice(idx, 1)
                              setSelectedFiles(newFiles)
                            }}
                            className="absolute top-1 right-1 p-1.5 bg-white/90 text-red-500 rounded-full transition-colors shadow-sm"
                            title="Remove Selection"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* File Upload Area */}
                <div className="border-2 border-dashed border-foreground/10 hover:border-primary/50 bg-foreground/[0.02] hover:bg-primary/[0.02] rounded-xl p-8 text-center transition-all cursor-pointer relative group">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        const newFiles = Array.from(e.target.files)
                        setSelectedFiles(prev => [...prev, ...newFiles])
                        const newPreviews = newFiles.map(file => URL.createObjectURL(file))
                        setPreviews(prev => [...prev, ...newPreviews])
                        e.target.value = '' 
                      }
                    }}
                  />
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Plus className="text-muted-foreground group-hover:text-primary" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm font-medium">Click to upload images</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">JPG, PNG, WEBP (Max 5MB)</p>
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 p-4 rounded-lg flex items-center gap-2">
                  <Info size={16} /> {error}
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-[2] py-4 bg-primary text-primary-foreground rounded-lg text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-primary/90 transition-all disabled:opacity-50 shadow-lg shadow-primary/20"
                >
                  {loading ? 'Processing...' :(editingItem ? 'Save Changes' : 'Create Product')}
                </button>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  disabled={loading}
                  className="flex-1 py-4 border border-border rounded-lg text-[11px] uppercase tracking-[0.25em] font-semibold hover:bg-foreground/5 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Items List */}
      <div className="border-t border-foreground/10 pt-8">
        <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl">Product Catalog</h2>
            <span className="text-sm text-muted-foreground">{items.length} items found</span>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-foreground/[0.02] rounded-2xl border border-dashed border-foreground/10 space-y-4">
            <div className="w-16 h-16 bg-foreground/5 rounded-full flex items-center justify-center mx-auto text-muted-foreground">
                <Package size={32} />
            </div>
            <div>
                <h3 className="font-serif text-xl">Your catalog is empty</h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto mt-2">Get started by adding your first floral arrangement or décor item.</p>
            </div>
            <button
                onClick={openAddForm}
                className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-primary text-primary-foreground rounded-full text-xs uppercase tracking-[0.15em] font-semibold hover:bg-primary/90 transition-colors"
            >
                Add First Item
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 divide-y divide-foreground/10">
            {items.map((item) => (
              <div key={item._id} className="py-6 flex items-start gap-6 group hover:bg-foreground/[0.01] transition-colors rounded-lg px-4 -mx-4">
                {/* Item Thumbnail */}
                <div className="w-24 h-24 flex-shrink-0 bg-white overflow-hidden rounded-lg border border-foreground/10 shadow-sm relative">
                  {item.images && item.images.length > 0 ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted/20">
                      <span className="text-[10px] uppercase">NoImg</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-1 py-1">
                  <div className="flex items-center gap-2">
                       <span className="text-[9px] uppercase tracking-wider font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-full">
                            {item.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                       </span>
                  </div>
                  <h3 className="font-serif text-xl group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                  {item.price && (
                    <p className="text-sm font-medium font-mono text-foreground/80">₹{item.price.toLocaleString('en-IN')}</p>
                  )}
                </div>
                
                <div className="flex items-center gap-2 self-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => openEditForm(item)}
                    className="p-2.5 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                    title="Edit Item Details"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="p-2.5 hover:bg-red-50 text-red-600 rounded-lg transition-colors border border-transparent hover:border-red-100"
                    title="Delete Item Permanently"
                    disabled={loading}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
