import { useEffect } from "react";
import { siteMeta } from "../data/portfolio";

export default function PageMeta({ title, description = siteMeta.description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? "";

    document.title = title ? `${title} | ${siteMeta.name}` : `${siteMeta.name} | Portfolio`;

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    return () => {
      document.title = previousTitle;

      if (metaDescription) {
        metaDescription.setAttribute("content", previousDescription);
      }
    };
  }, [description, title]);

  return null;
}
