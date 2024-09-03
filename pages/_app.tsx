import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JetBrains_Mono } from 'next/font/google'

const jetbrains_mono = JetBrains_Mono({ subsets: ["cyrillic"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${jetbrains_mono.className} max-w-5xl mx-auto min-h-screen`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}