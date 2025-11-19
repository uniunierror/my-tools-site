// app/terms/page.tsx
export const metadata = {
  title: "利用規約 | MyTools（仮）",
  description:
    "MyTools（仮） の利用規約ページ。サイト利用時のルール、免責事項、禁止事項などを記載しています。",
  openGraph: {
    title: "利用規約 | MyTools（仮）",
    description:
      "MyTools（仮） の利用規約ページ。サイト利用時のルール、免責事項、禁止事項などを記載しています。",
    url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-4">利用規約</h1>

      <p className="mb-4 text-gray-700">
        本利用規約（以下「本規約」）は、MyTools（以下「当サイト」）が提供するサービスの利用条件を定めるものです。ユーザーは本規約に同意のうえサービスを利用するものとします。
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">第1条（適用）</h2>
      <p className="text-gray-700 mb-4">本規約は当サイトが提供するすべてのサービスに適用されます。</p>

      <h2 className="text-lg font-semibold mt-6 mb-2">第2条（禁止事項）</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>法令または公序良俗に反する行為</li>
        <li>当サイトまたは第三者の権利を侵害する行為</li>
        <li>当サイトの運営を妨害する行為</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">第3条（免責）</h2>
      <p className="text-gray-700 mb-4">
        当サイトのツールは現状有姿で提供されます。ツールの利用により生じた損害について当サイトは一切の責任を負いません。
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">第4条（準拠法・裁判管轄）</h2>
      <p className="text-gray-700">
        本規約の準拠法は日本法とし、本規約に関して生じた紛争については東京地方裁判所を第一審の専属管轄裁判所とします。
      </p>
    </section>
  );
}
