import { DocsflyConfig } from "docsfly";

const config: DocsflyConfig = {
  site: {
    name: "Prodfind Documentation",
    description:
      "A product discovery platform made for developers, investors, made by developers",
    url: "https://docs.prodfind.space",
  },
  header: {
    title: "Prodfind Docs",
    navigation: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Docs",
        href: "/docs",
      },
      {
        label: "App",
        href: "https://prodfind.space",
      },
      {
        label: "GitHub",
        href: "https://github.com/teamzisty/prodfind",
      },
    ],
  },
  docs: {
    dir: "docs",
  },
  navigation: {
    logo: {
      text: "Prodfind Documentation",
    },
  },
};

export default config;
