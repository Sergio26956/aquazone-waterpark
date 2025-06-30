'use client'

import { useState } from 'react'
import { DndContext, closestCenter, useDraggable, useDroppable } from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'

const initialBlocks = [
  { id: '1', type: 'image', content: '/images/slider1.jpg' },
  { id: '2', type: 'video', content: '/videos/video1.mp4' },
  { id: '3', type: 'text', content: 'Bienvenidos a AQUAZONE Water Park' },
]

export default function BuilderEditor() {
  const [blocks, setBlocks] = useState(initialBlocks)

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (active.id !== over?.id) {
      const oldIndex = blocks.findIndex((b) => b.id === active.id)
      const newIndex = blocks.findIndex((b) => b.id === over?.id)
      const updated = [...blocks]
      const [moved] = updated.splice(oldIndex, 1)
      updated.splice(newIndex, 0, moved)
      setBlocks(updated)
    }
  }

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
      <div className="space-y-4 p-6 bg-neutral-100 rounded-xl">
        {blocks.map((block) => (
          <DraggableBlock key={block.id} block={block} />
        ))}
      </div>
    </DndContext>
  )
}

function DraggableBlock({ block }: { block: any }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: block.id,
  })

  const { setNodeRef: setDropRef } = useDroppable({ id: block.id })

  return (
    <div
      ref={(el) => {
        setNodeRef(el)
        setDropRef(el)
      }}
      {...listeners}
      {...attributes}
      className={`border border-gray-300 bg-white p-4 rounded-lg shadow-sm ${isDragging ? 'opacity-30' : ''}`}
    >
      {block.type === 'text' && <p className="text-lg font-semibold">{block.content}</p>}
      {block.type === 'image' && <img src={block.content} className="rounded-md w-full max-h-60 object-cover" />}
      {block.type === 'video' && (
        <video src={block.content} className="rounded-md w-full max-h-60" controls muted />
      )}
    </div>
  )
}
