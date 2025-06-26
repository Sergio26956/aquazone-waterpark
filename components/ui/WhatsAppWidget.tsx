'use client'
import { useEffect } from 'react'

export default function WhatsAppWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://wati-integration-service.clare.ai/v2/watiWidget.js?63451'
    script.async = true
    script.onload = () => {
      window.CreateWhatsappChatWidget && window.CreateWhatsappChatWidget()
    }
    document.body.appendChild(script)
  }, [])

  return null
}
