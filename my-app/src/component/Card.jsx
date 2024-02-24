import profilePic from '../sclogo.jpg'
function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="logo" />
            <h2>Seth</h2>
            <p>Future software engineer</p>
        </div>
    )
}
export default Card