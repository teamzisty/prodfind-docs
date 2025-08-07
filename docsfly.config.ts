import { DocsflyConfig } from 'docsfly'

const config: DocsflyConfig = {
  site: {
    name: 'Prodfind Documentation',
    description: 'A product discovery platform made for developers, investors, made by developers',
    url: 'https://dpcs.prodfind.space',
  },
  docs: {
    dir: 'docs',
  },
  navigation: {
    logo: {
      text: 'Prodfind Documentation',
    },
    links: [
      {
        text: "App",
        href: 'https://prodfind.space',
        external: true,
      },
      {
        text: 'GitHub',
        href: 'https://github.com/teamzisty/prodfind',
        external: true,
      },
    ],
  },
}

export default config