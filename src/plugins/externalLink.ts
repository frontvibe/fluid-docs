import { visit } from "unist-util-visit";
import type { RehypePlugin } from "@astrojs/markdown-remark";
import type { Element } from "hast";

export const externalLink: RehypePlugin = () => {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type != "element") {
        return;
      }

      const element = node as Element;

      if (!isAnchor(element)) {
        return;
      }

      const url = getUrl(element);

      if (isExternal(url)) {
        element.properties!["target"] = "_blank";
        element.properties!["rel"] = "noopener noreferrer";
        element.properties!["data-external"] = "true";
      }
    });
  };
};

const getUrl = (element: Element) => {
  if (!element.properties) {
    return "";
  }

  const url = element.properties["href"];

  if (!url) {
    return "";
  }

  return url.toString();
};

const isAnchor = (element: Element) =>
  element.tagName == "a" && element.properties && "href" in element.properties;

const isExternal = (url: string) => {
  return url.startsWith("http");
};
