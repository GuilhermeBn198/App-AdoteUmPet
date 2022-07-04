import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from "../ui/themes/theme"
import Header from "../ui/components/Header/Header"
import HeaderAdmin from "../ui/components/HeaderAdmin/HeaderAdmin"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  
  <ThemeProvider theme={theme}>
    <HeaderAdmin />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
