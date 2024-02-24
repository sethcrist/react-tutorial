import ShimmerText from "./ShimmerText";
function Header (){
    return(
        <header>
            <nav>
                <ul className="nav-header">
                    <li><a href="/">// Home</a></li>
                    <li><a href="/">// About Me</a></li>
                    <li><a href="/">// GitHub</a></li>
                    <li><a href="/">// LinkedIn</a></li>
                    <li><a href="/">// Contact Me</a></li>
                </ul>
            </nav>
            <h1 className="header"><ShimmerText>SETH CRIST</ShimmerText></h1>
            <p className="sub-header">Full Stack Software Developer</p>
        </header>
    );
}

export default Header