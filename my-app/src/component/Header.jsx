import ShimmerText from "./ShimmerText";
function Header (){
    return(
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">services</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
            <h1><ShimmerText>My Website</ShimmerText></h1>
        </header>
    );
}

export default Header