import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!!! Something Went Wrong</h1>
            <h3>{err.status}</h3>
        </div>
    )
}

export default Error;