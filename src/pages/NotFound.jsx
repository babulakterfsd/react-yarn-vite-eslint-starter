import { useRouteError } from 'react-router-dom';

export default function NotFound() {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex justify-center items-center">
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
