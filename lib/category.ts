export const categoryLabels: Record<string, string> = {
  sleep: "睡眠",
  lifehack: "ライフハック",
  coding: "プログラミング",
  health: "健康",
};

export function getCategoryLabel(slug: string): string {
  return categoryLabels[slug] ?? slug;
}
