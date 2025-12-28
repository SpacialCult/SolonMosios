import { useEffect } from "react";

export default function useAnalytics(page: string) {
  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("config", "G-NB8037N9KJ", {
        page_path: page,
      });
    }
  }, [page]);
}