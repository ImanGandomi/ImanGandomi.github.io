import './globals.css'

export const metadata = {
  title: 'Iman Gandomi - Computer Vision & AI Researcher',
  description: 'Personal website of Iman Gandomi, MSc student in Electrical and Control Engineering specializing in computer vision, deep learning, and surgical AI.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}