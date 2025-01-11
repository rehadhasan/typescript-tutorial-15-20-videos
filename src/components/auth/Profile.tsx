export type ProfileProps = {
    name: string;
}

export const Profile = ({name}:ProfileProps)=>{
    return(
        <div>
            <h3>Private Profile Component. Name is {name}</h3>
        </div>
    )
}