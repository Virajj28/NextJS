import Link from 'next/Link';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
    
        </div>
        
    );
}

export default Navbar;
