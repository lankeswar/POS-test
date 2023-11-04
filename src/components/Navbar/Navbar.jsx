import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Navbar() {
	return (
		<div className={styles.navbar}>
			<Link to="/" className={styles.navItem}>
        <HomeOutlinedIcon />
				<span>Home</span>
			</Link>
			<Link to="/menu" className={styles.navItem}>
				<TextSnippetOutlinedIcon />
				<span>Menu</span>
			</Link>
			<Link to="/payment" className={styles.navItem}>
        <PaymentOutlinedIcon/>
				<span>Payment</span>
			</Link>
			<Link to="/orders" className={styles.navItem}>
        <ViewModuleOutlinedIcon/>
				<span>Orders</span>
			</Link>
			<Link to="/settings" className={styles.navItem}>
        <SettingsOutlinedIcon/>
				<span>Settings</span>
			</Link>
      <br></br>
      <br></br>
      <br></br>
      v.0.0.1
		</div>
	)
}

export default Navbar
