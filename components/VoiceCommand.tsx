import { useEffect } from 'react';

export default function VoiceCommand() {
  useEffect(() => {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'es-ES';

    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      if (transcript.includes('galería')) window.location.href = '/galeria';
      if (transcript.includes('inicio')) window.location.href = '/';
      if (transcript.includes('contacto')) window.location.href = '/contacto';
    };

    recognition.start();

    return () => recognition.stop();
  }, []);

  return null;
}
