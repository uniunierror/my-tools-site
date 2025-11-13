// app/privacy/page.tsx
export const metadata = {
  title: "プライバシーポリシー | MyTools（仮）",
  description:
    "MyTools（仮） のプライバシーポリシー。個人情報の取り扱い、Cookieやアクセス解析の利用について説明します。",
  openGraph: {
    title: "プライバシーポリシー | MyTools（仮）",
    description:
      "MyTools（仮） のプライバシーポリシー。個人情報の取り扱い、Cookieやアクセス解析の利用について説明します。",
    url: "https://your-domain.example/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-4">プライバシーポリシー</h1>

      <p className="mb-4 text-gray-700">
        MyTools（以下「当サイト」）は、個人情報保護の重要性を認識し、利用者の個人情報を適切に取り扱います。本ポリシーは、当サイトが収集する情報、利用目的、管理方法について説明します。
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. 収集する情報</h2>
      <ul className="list-disc pl-6 text-gray-700">
        <li>お問い合わせフォームの送信内容（名前・メールアドレス・メッセージ等）</li>
        <li>アクセスログ（IPアドレス、利用ブラウザ、訪問日時、参照元URLなど）</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. 利用目的</h2>
      <p className="text-gray-700 mb-4">
        収集した情報は、問い合わせ対応、サイト改善、サービス向上のために利用します。また、統計情報として解析する場合があります（個人を特定しない形での利用）。
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. 第三者提供</h2>
      <p className="text-gray-700 mb-4">
        法令に基づく場合を除き、利用者の同意なく第三者へ個人情報を提供することはありません。
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. Cookie・アクセス解析</h2>
      <p className="text-gray-700 mb-4">
        当サイトでは、サービス向上のために Cookie を使用する場合があります。また Google Analytics 等のアクセス解析サービスを利用することがあります。これらのツールは匿名化されたデータを利用します。
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. セキュリティ</h2>
      <p className="text-gray-700 mb-4">
        個人情報の漏洩防止のために、適切な安全対策を実施します。ただし、完全な安全を保証するものではありません。
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">6. お問い合わせ</h2>
      <p className="text-gray-700">
        本ポリシーに関するお問い合わせは、<a href="/contact" className="text-blue-600">お問い合わせページ</a>よりご連絡ください。
      </p>
    </section>
  );
}
