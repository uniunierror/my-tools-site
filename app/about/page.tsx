export const metadata = {
  title: "このサイトについて | MyTools（仮）",
  description:
    "MyTools（仮）は日常をちょっと便利にする無料のWebツール集です。文字カウントや日付計算など実用的なツールを提供します。",
  openGraph: {
    title: "このサイトについて | MyTools（仮）",
    description:
      "MyTools（仮）は日常をちょっと便利にする無料のWebツール集です。文字カウントや日付計算など実用的なツールを提供します。",
    url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/about",
    images: ["/og/default-og.png"],
  },
  alternates: {
    canonical:
      "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/about",
  },
};


export default function AboutPage() {
  return (
    <section className="py-16 max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-4">MyTools（仮）について</h1>

      <p className="mb-4 text-gray-700">
        MyTools（仮）は、開発者が個人的に運営するツール集サイトです。
        「日常のちょっとした手間を減らす」ことを目的に、実用的で使いやすいツールを公開しています。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">理念</h2>
      <p className="mb-4 text-gray-700">
        シンプルで無駄のないUIと、高速な操作性を重視しています。個人開発でも継続的に運用できるよう、
        保守性と拡張性を意識して設計・実装しています。
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">運営者</h2>
      <p className="mb-4 text-gray-700">
        運営：あなたの名前（ハンドルネーム可）  
        メール：<a href="mailto:your-email@example.com" className="text-blue-600">your-email@example.com</a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">免責事項</h2>
      <p className="text-gray-700">
        本サイトのツールは参考用途で提供しています。利用により生じた損害について、運営者は一切の責任を負いません。
      </p>
    </section>
  );
}
