// components/ContentEditor.tsx import React, { useState } from "react";

export default function ContentEditor() { const [title, setTitle] = useState("Título editable"); const [description, setDescription] = useState("Texto descriptivo editable.");

return ( <div className="p-4 bg-white rounded-xl shadow-md w-full"> <h2 className="text-xl font-bold mb-4">Editor Visual de Contenido</h2> <div className="mb-4"> <input type="text" className="border p-2 w-full rounded" value={title} onChange={(e) => setTitle(e.target.value)} /> </div> <div className="mb-4"> <textarea className="border p-2 w-full rounded" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} ></textarea> </div> <div className="mt-4 p-4 border rounded bg-gray-100"> <h3 className="text-lg font-bold">Vista previa:</h3> <h1 className="text-2xl mt-2">{title}</h1> <p className="mt-2 text-gray-700">{description}</p> </div> </div> ); }

