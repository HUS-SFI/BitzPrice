import Header from "./Header"
import styles from "../styles/Layout.module.css"
const Layout = (props) => {
    return (
        <div className="Layout">
            <Header />
            <div className={styles["Layout-init"]}>{props.children}</div>
        </div>
    )
}

export default Layout
