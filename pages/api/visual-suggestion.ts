export default function handler(req, res) {
  const ideas = [
    'Usar fondo con video acuático 3D en la sección de portada.',
    'Añadir animación de burbujas flotando en cada scroll.',
    'Cambiar botones por formas orgánicas que se muevan con el mouse.',
    'Implementar audio ambiente con sonidos de agua suaves.',
    'Usar iluminación dinámica en los textos principales.',
  ];

  const suggestion = ideas[Math.floor(Math.random() * ideas.length)];
  res.status(200).json({ suggestion });
}
