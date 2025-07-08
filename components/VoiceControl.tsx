import { useEffect } from 'react';

export default function VoiceControl() {
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) return;

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'es-ES';

    recognition.onresult = (event) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
      if (command.includes('inicio')) window.location.href = '/';
      if (command.includes('contacto')) window.location.href = '/contacto';
      if (command.includes('galería')) window.location.href = '/galeria';
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  return null;
}
