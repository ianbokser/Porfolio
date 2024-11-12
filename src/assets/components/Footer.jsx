import React from 'react'
import { SocialLink } from './SocialLink'

export const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900">
      <div className="container mx-auto text-center text-gray-400">
        <p>© 2024 Ian Bokser. Todos los derechos reservados.</p>
        <div className="mt-4">
          <SocialLink platform="GitHub" url="#" />
          <SocialLink platform="LinkedIn" url="#" />
        </div>
      </div>
    </footer>
  )
}
