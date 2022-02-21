import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <Link to='/signIn'>Sign in</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Header 