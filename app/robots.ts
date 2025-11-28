// import type { MetadataRoute } from 'next'

// export default function robots(): MetadataRoute.Robots {
//   const baseUrl = 'https://my-tools-site-git-main-uniunierrors-projects.vercel.app'

//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//     },
//     sitemap: `${baseUrl}/sitemap.xml`,
//   }
// }

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
  };
}
