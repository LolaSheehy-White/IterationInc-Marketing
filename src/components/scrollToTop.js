import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
    // Scroll to top if the location changes (when moving between routes)
    if (location.hash) {
      // If there's a hash in the URL (like #contactUs), scroll to it smoothly
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        }
    } else {
      // If there's no hash, scroll to the top of the page
        window.scrollTo(0, 0);
    }
    }, [location]);

    return null;
};

export default ScrollToTop;

