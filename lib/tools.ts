import fs from "fs";
import path from "path";

export type ToolData = {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
};

const toolsDir = path.join(process.cwd(), "data/tools");

export function getAllTools(): ToolData[] {
  const files = fs.readdirSync(toolsDir);

  return files.map((file) => {
    const filePath = path.join(toolsDir, file);
    const json = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return json as ToolData;
  });
}

export function getTool(slug: string): ToolData | null {
  const filePath = path.join(toolsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
