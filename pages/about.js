import Head from "next/head"
import Layout from "../components/Layout"
const About = () => {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <div className="about">
                <p> An application to view prices</p>
            </div>
        </Layout>
    )
}

export default About
