import {Login} from "./Login.tsx";
import {ProfileProps} from "./Profile.tsx";

type PrivateProps = {
    isLoggedIn: boolean;
    component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, component: Component}: PrivateProps)=>{
    if(isLoggedIn){
        return (
            <Component name='Rehad'/>
        )
    }else{
        return (
            <Login/>
        )
    }
}