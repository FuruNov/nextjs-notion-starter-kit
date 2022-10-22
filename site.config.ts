import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId:
    'Next-js-Notion-Starter-Kit-Template-af1645881a5142a884b2405d5084f3fe',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Nov's AI Blog",
  domain: 'nextjs-notion.furunov',
  author: 'FuruNov',

  // open graph metadata (optional)
  description:
    'A blog about programming, mathematical optimization, and deep learning topics.',

  // social usernames (optional)
  twitter: 'nov_sin_k',
  github: 'FuruNov',
  linkedin: null,
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'about-9bc626c37a2542919399e08d914703a4'
    },
    {
      title: 'Contact',
      pageId: 'contact-b020d3f7ec5c4a1e98d3c6e94a2ed2cc'
    }
  ]
})
