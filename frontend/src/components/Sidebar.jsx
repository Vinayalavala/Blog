import { Link } from "react-router-dom";
import "../styles/styles.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">📘 My Blog</h2>
            <nav>
                <Link to="/">🏠 Home</Link>
                <Link to="/create">📝 Create Blog</Link>
            </nav>
        </aside>
    );
};

export default Sidebar;
