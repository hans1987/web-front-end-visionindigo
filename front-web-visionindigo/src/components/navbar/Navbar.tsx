import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Vision indigo</a>
                <button className="btn btn-sm ">
                    <MenuIcon />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
