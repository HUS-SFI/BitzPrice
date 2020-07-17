import Layout from "../components/Layout"
import Head from "next/head"
import fetch from "isomorphic-unfetch"
const Home = (props) => {
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
                <p>{props.data.time.updated}</p>
            </div>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")

    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
export default Home
