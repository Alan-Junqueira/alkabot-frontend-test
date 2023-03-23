import { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'Usuário',
    template: '%s | Usuário',
  },
  description: 'Usuário',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <div className="pt-20">{children}</div>
}
