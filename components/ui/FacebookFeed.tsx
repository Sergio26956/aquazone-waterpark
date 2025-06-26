'use client'
import { useEffect } from 'react'

export default function FacebookFeed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.setAttribute('async', 'true')
    script.setAttribute('defer', 'true')
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('src', 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0')
    document.body.appendChild(script)
  }, [])

  return (
    <section className="py-10 px-4 bg-white">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-6">Últimas novedades en Facebook</h2>
      <div className="fb-page"
        data-href="https://www.facebook.com/AquaZoneOficial"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/AquaZoneOficial" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/AquaZoneOficial">AQUAZONE</a>
        </blockquote>
      </div>
    </section>
  )
}
