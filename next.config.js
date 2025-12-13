/** @type {import('next').NextConfig} */
const nextConfig = {
  // 必須: Cloudflare Workersで実行するための設定
  output: 'standalone', 
  
  // 必須: fsモジュールが利用可能なNode.js互換モードを有効化
  experimental: {
    serverComponentsExternalPackages: ["fs"],
  },

  // 💡 OpenNextのバンドル設定を追加
  // Next.jsのビルドプロセスで'content'ディレクトリをWorkerのバンドルに含めるよう強制します。
  opennext: {
    assets: [
      {
        type: 'directory',
        // 'content'ディレクトリをバンドルに含める
        path: 'content', 
      },
    ],
  },
};

module.exports = nextConfig;