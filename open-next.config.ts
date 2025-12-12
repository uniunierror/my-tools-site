// open-next.config.ts
// このファイルは、Next.jsのビルド結果をCloudflare Workers形式に変換するための設定です。

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // OpenNext.jsの最新の要件を満たすため、すべての設定を 'default' ブロック内に含めます。
  default: {
    // 変換されたWorkerの出力先ディレクトリを指定
    out: ".worker-next",
  },
};