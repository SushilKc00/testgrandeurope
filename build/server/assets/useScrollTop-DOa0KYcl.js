import { useEffect } from "react";
const useScrollTop = () => {
  return useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
export {
  useScrollTop as u
};
