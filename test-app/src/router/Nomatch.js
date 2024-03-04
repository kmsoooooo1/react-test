import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <div>
            <h2>존재하지 않는 경로입니다.</h2>
            <p>
                <Link to="/">Home</Link>
            </p>
        </div>
    );
}

export default NoMatch;