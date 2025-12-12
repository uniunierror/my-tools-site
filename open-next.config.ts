// open-next.config.ts
// OpenNext CLIの厳格な要件（例示されたJSON構造）を完全に満たすための設定です。

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // 1. Next.jsのページ/APIルートに関するメイン設定
  default: {
    out: ".worker-next",
    
    // 💡 必須: CLIが要求するoverrideブロックを完全に定義する
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      // キャッシュ設定はダミーで定義
      incrementalCache: "dummy", 
      tagCache: "dummy",
      queue: "dummy",
    },
  },

  // 2. Cloudflare Edge環境でNode.jsモジュールをどう扱うか
  edgeExternals: ["node:crypto", "node:async_hooks"],


  // 3. ミドルウェア (src/middleware.ts) に関する設定
  middleware: {
    external: true, 
    // 💡 必須: CLIが要求するmiddlewareのoverrideブロックを完全に定義する
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      // キャッシュ設定はダミーで定義
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
};