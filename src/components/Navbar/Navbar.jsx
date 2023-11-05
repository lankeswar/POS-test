import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const isLinkActive = (link) => {
        return activeLink === link ? styles.activeLink : styles.inactiveLink;
    };

    return (
        <div className={styles.navbar}>
            <Link to="/" onClick={() => handleLinkClick("/")} className={`${styles.navItem} ${isLinkActive("/")}`}>
                <HomeOutlinedIcon style={{ opacity: isLinkActive("/") === styles.activeLink ? 1 : 0.5 }} />
                <span style={{ opacity: isLinkActive("/") === styles.activeLink ? 1 : 0.5 }}>Home</span>
            </Link>
            <Link to="/menu" onClick={() => handleLinkClick("/menu")} className={`${styles.navItem} ${isLinkActive("/menu")}`}>
                <TextSnippetOutlinedIcon style={{ opacity: isLinkActive("/menu") === styles.activeLink ? 1 : 0.5 }} />
                <span style={{ opacity: isLinkActive("/menu") === styles.activeLink ? 1 : 0.5 }}>Menu</span>
            </Link>
            <Link to="/payment" onClick={() => handleLinkClick("/payment")} className={`${styles.navItem} ${isLinkActive("/payment")}`}>
                <PaymentOutlinedIcon style={{ opacity: isLinkActive("/payment") === styles.activeLink ? 1 : 0.5 }} />
                <span style={{ opacity: isLinkActive("/payment") === styles.activeLink ? 1 : 0.5 }}>Payment</span>
            </Link>
            <Link to="/orders" onClick={() => handleLinkClick("/orders")} className={`${styles.navItem} ${isLinkActive("/orders")}`}>
                <ViewModuleOutlinedIcon style={{ opacity: isLinkActive("/orders") === styles.activeLink ? 1 : 0.5 }} />
                <span style={{ opacity: isLinkActive("/orders") === styles.activeLink ? 1 : 0.5 }}>Orders</span>
            </Link>
            <Link to="/settings" onClick={() => handleLinkClick("/settings")} className={`${styles.navItem} ${isLinkActive("/settings")}`}>
                <SettingsOutlinedIcon style={{ opacity: isLinkActive("/settings") === styles.activeLink ? 1 : 0.5 }} />
                <span style={{ opacity: isLinkActive("/settings") === styles.activeLink ? 1 : 0.5 }}>Settings</span>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            v.0.0.1
        </div>
    );
}

export default Navbar;
