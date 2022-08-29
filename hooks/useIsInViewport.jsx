import { useEffect, useState, useMemo } from "react";

export default function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer =
        new IntersectionObserver(([entry]) =>
            setIsIntersecting(entry.isIntersecting),
        );

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}
