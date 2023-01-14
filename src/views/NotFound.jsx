import { useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function NotFound({ auth }) {
    const error = useRouteError();

    return (
        <>
            <Navbar auth={auth} />
            <div className="flex justify-center items-center">
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    );
}
