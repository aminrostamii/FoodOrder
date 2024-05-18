import Layout from "@/Components/Layout/Layout";
import CartContextProvider from "@/Contexts/FoodContextProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </CartContextProvider>
  )
}
