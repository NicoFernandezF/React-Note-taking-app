import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="menu">
            <ul>
                <Link to="/">Home</Link>
                <text> | </text>
                <Link to="./documentation">Documentation</Link>
                <text> | </text>
                <Link to="./sources">Sources and Attributions</Link>
            </ul>
        </nav>
    );
}
export default Navbar;