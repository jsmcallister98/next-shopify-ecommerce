import { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "@components/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

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
