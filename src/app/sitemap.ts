// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lp.yametai.app'; // あなたのLPのベースURL

  // LPのホームページ
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2025-05-27'), // または具体的な最終更新日 new Date('2025-05-27')
      changeFrequency: 'monthly' as 'monthly', // 型アサーションを追加
      priority: 1.0,
    },
    // もし他に静的なページ（例: プライバシーポリシーページ /privacy）があれば、ここに追加します
    // {
    //   url: `${baseUrl}/privacy`,
    //   lastModified: new Date('2025-05-20'),
    //   changeFrequency: 'yearly' as 'yearly',
    //   priority: 0.8,
    // },
  ];

  // 将来的に動的なページ（例: ブログ記事など）が増える場合は、
  // ここでデータをフェッチして動的にURLリストを生成し、staticPagesと結合します。
  // const dynamicPages = await fetchSomeDynamicRoutes().then(routes =>
  //   routes.map(route => ({
  //     url: `${baseUrl}/${route.slug}`,
  //     lastModified: new Date(route.updatedAt),
  //     changeFrequency: 'weekly' as 'weekly',
  //     priority: 0.7,
  //   }))
  // );

  // return [...staticPages, ...dynamicPages];
  return staticPages; // 現在は静的ページのみなのでこれでOK
}