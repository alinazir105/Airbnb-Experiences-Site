import logo from '../../public/assets/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" />
        </nav>
    )
}