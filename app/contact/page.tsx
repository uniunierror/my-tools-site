import { redirect } from "next/navigation";

export const metadata = {
  title: "お問い合わせ | MyTools（仮）",
  description:
    "MyTools（仮）へのお問い合わせフォームです。不具合報告やご意見はこちらから。",
  openGraph: {
    title: "お問い合わせ | MyTools（仮）",
    description:
      "MyTools（仮）へのお問い合わせフォームです。不具合報告やご意見はこちらから。",
    url: "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/contact",
    images: ["/og/default-og.png"],
  },
  alternates: {
    canonical:
      "https://my-tools-site-git-main-uniunierrors-projects.vercel.app/contact",
  },
};

async function sendContactMessage(formData: FormData) {
  "use server";
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const message = formData.get("message") as string | null;

  console.log("[contact] received", { name, email, message });

  redirect("/");
}

export default function ContactPage() {
  return (
    <section className="py-16 max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-4">お問い合わせ</h1>
      <p className="mb-6">
        ご意見・不具合報告・機能要望などはこちらからご連絡ください。返信が必要な場合はメールアドレスをご記入ください。
      </p>

      <form action={sendContactMessage} className="space-y-4 p-6 rounded-2xl shadow">
        <label className="block">
          <span className="text-sm">お名前（任意）</span>
          <input
            name="name"
            type="text"
            className="mt-1 block w-full border rounded p-2"
            placeholder="例：山田 太郎"
          />
        </label>

        <label className="block">
          <span className="text-sm">メールアドレス（返信が必要な場合）</span>
          <input
            name="email"
            type="email"
            className="mt-1 block w-full border rounded p-2"
            placeholder="example@example.com"
          />
        </label>

        <label className="block">
          <span className="text-sm">お問い合わせ内容</span>
          <textarea
            name="message"
            className="mt-1 block w-full border rounded p-3 h-40"
            placeholder="メッセージを入力してください"
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            送信する
          </button>
          <p className="text-sm">送信後、自動的にトップページに戻ります。</p>
        </div>
      </form>
    </section>
  );
}
