import Link from "next/link"
import styles from "./header.module.css"
const Header = () => {
    return (
        <div className="header">
            <ul className={styles["header-list"]}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
