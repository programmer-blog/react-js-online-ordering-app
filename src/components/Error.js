import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Oops!!!</h1>
            <h3>{err.status}</h3>
            <div>Something went wrong</div>
        </div>
    )
}

export default Error