// CustomLoader.js
import { useEffect, useState } from 'react';
import {Router} from "next/router";

const Loader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const startLoading = () => setLoading(true);
        const stopLoading = () => setLoading(false);

        // Add event listeners for route changes
        Router.events.on('routeChangeStart', startLoading);
        Router.events.on('routeChangeComplete', stopLoading);
        Router.events.on('routeChangeError', stopLoading);

        // Clean up event listeners on component unmount
        return () => {
            Router.events.off('routeChangeStart', startLoading);
            Router.events.off('routeChangeComplete', stopLoading);
            Router.events.off('routeChangeError', stopLoading);
        };
    }, []);

    return loading ? <>Loading</>: null;
};

export default Loader;
