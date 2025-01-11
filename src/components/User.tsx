import {useContext} from "react";
import {UserContext} from './UserContext'

const User = () => {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        userContext.setUser({
            name: 'Shawn',
            email: 'shawn@shawn.com',
        })
    }
    
    const handleLogout = () => {
        userContext.setUser(null)
    }
    return(
        <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h1>User name is {userContext.user?.name}</h1>
            <h1>User email is {userContext.user?.email}</h1>
        </>
    )
}

export default User;