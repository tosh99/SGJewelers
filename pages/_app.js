import '../styles/globals.scss'
import Head from "next/head";
import TransitionLayout from "../shared/components/transition";

function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <title>Products</title>
        </Head>

        <TransitionLayout>
            <Component {...pageProps} />
        </TransitionLayout>
    </>
}

export default MyApp
