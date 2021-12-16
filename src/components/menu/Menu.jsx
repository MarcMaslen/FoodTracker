import './menu.scss'

export default function menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a> 
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Dashboard</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#work">Login</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Sign-up</a>
                </li>
            </ul>
        </div>
    )
}
