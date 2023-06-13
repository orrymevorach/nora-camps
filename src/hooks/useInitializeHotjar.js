import { useEffect } from "react";
import { hotjar } from "react-hotjar";

export default function useInitializeHotjar() {
  useEffect(() => {
    hotjar.initialize(
      process.env.NEXT_PUBLIC_HOTJAR_ID,
      process.env.NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION
    );
  }, []);
}
