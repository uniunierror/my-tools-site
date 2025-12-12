// open-next.config.ts
// このファイルは、Next.jsのビルド結果をCloudflare Workers形式に変換するための設定です。
// 最新のOpenNext.jsの要件に合わせて、外部モジュールとミドルウェアの設定を追加します。

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // ----------------------------------------------------
  // 1. Next.jsのページ/APIルートに関するメイン設定
  // ----------------------------------------------------
  default: {
    // 変換された Worker の出力先ディレクトリ
    out: ".worker-next",
    
    // Cloudflare WorkersはNode.js環境ではないため、
    // fsなどのNode.jsモジュールへの依存を避ける必要があります。
    // Node.jsのビルトインモジュールを使用している場合は、ここで指定します。
    // Next.jsのApp Routerでは 'node:async_hooks' などが使われることがあります。
    // 今回、ブログ記事の読み込み（fs依存）を回避したため、特に大きな変更は不要ですが、
    // エッジ環境でNode.jsモジュールを使用する場合はここに追加する必要があります。
    // 例: edgeExternals: ["node:crypto", "node:async_hooks"],
  },

  // ----------------------------------------------------
  // 2. Cloudflare Edge環境でNode.jsモジュールをどう扱うか
  // ----------------------------------------------------
  // Next.jsのApp Routerは、一部のNode.jsの内部モジュールを使用することがあります。
  // これらをCloudflareの互換レイヤーで処理するよう指定します。
  edgeExternals: ["node:crypto", "node:async_hooks"],


  // ----------------------------------------------------
  // 3. ミドルウェア (src/middleware.ts) に関する設定
  // ----------------------------------------------------
  // middlewareをWorkersで実行するために必須の設定です。
  middleware: {
    // 外部ファイルとしてWorkerに含めることを指定
    external: true, 
    // ミドルウェア用のカスタムオーバーライドは現在不要
    // override: { ... }, 
  },
};