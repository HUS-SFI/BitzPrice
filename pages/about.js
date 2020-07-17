import Head from "next/head"
import Layout from "../components/Layout"
const About = () => {
    return (
        <Layout>
            <Head>
                <title>About</title>
            </Head>
            <div className="about">
                <h1> wlcome </h1>
                <p>
                    it's a web application that shows Bitcoin's price,
                    <br />
                    developed with Next.js by "HUS-SFI"
                </p>
            </div>
            <style jsx>{`
                .about {
                    background-color: #f4f4f4;
                    border: 1px solid #ccc;
                    max-width: 400px;
                    padding: 1rem 5rem;
                    margin: auto;
                    margin-top: 1rem;
                }
            `}</style>
        </Layout>
    )
}

export default About
