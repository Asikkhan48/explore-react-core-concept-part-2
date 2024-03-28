export default function Friend({friend}){
   
   const {name, email} = friend;
    return (
        <div className="box">
            <h1>Name: {name}</h1>
            <p>E-mail: {email}</p>
        </div>
    )
}