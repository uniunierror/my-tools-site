// maintenance.js
// すべてのリクエストに対して503 Service Unavailableを返すシンプルなWorkerです。
// これにより、本番のNext.jsサイトを一時的に隠すことができます。

const MAINTENANCE_HTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>サービス一時停止のお知らせ</title>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; background-color: #f4f4f9; color: #333; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        h1 { color: #dc3545; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🛠 メンテナンス中です 🛠</h1>
        <p>現在、より良いサービスを提供するため、システムのメンテナンスを行っております。</p>
        <p>ご迷惑をおかけいたしますが、しばらくお待ちください。</p>
        <p>作業が完了次第、サービスを再開いたします。</p>
    </div>
</body>
</html>
`;

export default {
  async fetch(request, env, ctx) {
    return new Response(MAINTENANCE_HTML, {
      status: 503, // Service Unavailable
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      },
    });
  },
};