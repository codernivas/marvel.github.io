import SideBarProvider from "@/components/Sidebar/SidebarContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <SideBarProvider>
    <Component {...pageProps} />
  </SideBarProvider>
  )
}
