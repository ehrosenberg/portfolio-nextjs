import { log } from "console";

const Navigation = (props) => {
    console.log(props);
    return (
        <nav>
            <div><img src="" alt="My awesome logo" /></div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/updates">Updates</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/getintouch">Get In Touch</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;