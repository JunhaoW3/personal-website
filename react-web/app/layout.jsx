import '../src/index.css'
import '../src/App.css'

export const metadata = {
  title: 'Junhao W3 — Project Range',
  description: 'A topographical index of Junhao W3 projects.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
