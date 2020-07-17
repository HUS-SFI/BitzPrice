import Layout from "../components/Layout"
import Head from "next/head"
const Home = () => {
    return (
        <Layout>
            <div>
                <Head>
                    <title>BitzPrice</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <h1>Welcome to bitPrize</h1>
            </div>
        </Layout>
    )
}

export default Home
