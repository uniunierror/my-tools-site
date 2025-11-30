export function ThemeScript() {
  const code = `
(function() {
  try {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : systemDark
        ? "dark"
        : "light";
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();
`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
