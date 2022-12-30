import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "@components/Layout/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ShopProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ShopProvider>
    </ThemeProvider>
  );
}

export default MyApp;
