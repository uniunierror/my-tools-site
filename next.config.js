/** @type {import('next').NextConfig} */
const nextConfig = {
  // Edge Runtimeでfsアクセスを許可するためにNext.jsのExperimental設定を使用します
  // Next.js 14ではこの設定がServerless環境でfsモジュールの動作を改善します。
  experimental: {
    serverComponentsExternalPackages: ["fs"],
  },
  
  // OpenNextのために、Workersでコンテンツディレクトリをバンドルする設定を追加
  // Next.js 14では 'output' の設定が必須
  output: 'standalone', 
};

module.exports = nextConfig;