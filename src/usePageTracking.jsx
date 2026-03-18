import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const usePageTracking= () => {
    
        const location = useLocation();
    
        useEffect(() => {
            window.gtag('config', 'G-XXXXXXX', {
                page_path: location.pathname;
            });
        }, [location]);
}

export default usePageTracking;