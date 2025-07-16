'use client';
import { useEffect } from 'react';

export default function VoiceCommand() {
  useEffect(() => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim();
      alert('Comando de voz recibido: ' + transcript);
    };

    recognition.start();
  }, []);

  return null;
}
