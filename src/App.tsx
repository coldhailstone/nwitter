import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Layout from './components/layout';
import LoadingScreen from './components/loading-screen';
import CreateAccount from './routes/create-account';
import Home from './routes/home';
import Login from './routes/login';
import Profile from './routes/profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/create-account',
        element: <CreateAccount />,
    },
]);

const GlobalStyels = createGlobalStyle`
	${reset};
	* {
		box-sizing: border-box;
	}
	body {
		background-color: black;
		color: white;
		font-family: 'Courier New', Courier, monospace;
	}
`;

function App() {
    const [isLoading, setLoading] = useState(true);
    const init = async () => {
        setLoading(false);
    };
    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <GlobalStyels />
            {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
        </>
    );
}

export default App;
