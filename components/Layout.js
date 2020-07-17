import Header from "./Header"
const Layout = (props) => {
    return (
        <div className="Layout">
            <Header />
            {props.children}
        </div>
    )
}

export default Layout
