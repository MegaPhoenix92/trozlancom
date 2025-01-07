import type { AppProps } from 'next/app'
import { Theme } from '@carbon/react'
import { MainLayout } from '../components/layout/MainLayout'
import { AuthProvider } from '../utils/auth/useAuth'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Theme theme="g100">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Theme>
    </AuthProvider>
  )
}

export default MyApp