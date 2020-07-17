import Layout from "../components/Layout"
import Head from "next/head"
import fetch from "isomorphic-unfetch"
import Prices from "../components/Prices"
const Home = (props) => {
    return (
        <Layout>
            <div className="home">
                <Head>
                    <title>BitzPrice</title>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <h1>Welcome to bitzPrice</h1>
                <Prices data={props.data} />
            </div>
            <style jsx>{`
                .home {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }
                h1 {
                    margin: 1rem;
                }
            `}</style>
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
