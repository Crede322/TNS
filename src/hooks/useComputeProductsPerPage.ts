import { useEffect, useState } from "react";

export function useComputeProductsPerPage() {
  const [productsPerPage, setProductsPerPage] = useState(10);

  const breakpoints = [
    { min: 1420, value: 10 },
    { min: 1200, value: 8 },
    { min: 900, value: 6 },
    { min: 0, value: 6 }, // fallback
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const match = breakpoints.find((bp) => width >= bp.min);
      if (match) {
        setProductsPerPage(match.value);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { productsPerPage };
}
