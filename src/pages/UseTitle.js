import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - Restaurant-Booking`;
    }, [title]);

  return null;
}
