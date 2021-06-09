import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pathExceptions = ['/solutions/inputs', '/solutions/end-products'];
    if (!pathExceptions.includes(pathname))
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}