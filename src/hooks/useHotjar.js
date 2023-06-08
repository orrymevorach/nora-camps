import { useEffect } from "react";
import { hotjar } from "react-hotjar";

export default function useHotjar() {
  useEffect(() => {
    hotjar.initialize(
      process.env.HOTJAR_ID,
      process.env.HOTJAR_SNIPPET_VERSION
    );
  }, []);
}
