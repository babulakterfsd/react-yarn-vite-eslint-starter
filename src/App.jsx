import { RouterProvider } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import router from './routes/AllRoutes';
import './styles/App.css';

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );

    // if redux is used, import Provider from react-redux and store from store
    // return (
    //     <Provider store={store}>
    //         <RouterProvider router={router} />
    //     </Provider>
    // );
}

export default App;
