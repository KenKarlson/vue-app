import fs from "fs";
import path from "path";
import prettier from "prettier";

const EXTENSIONS = [".js", ".ts", ".jsx", ".tsx", ".json", ".html", ".css"];

let IGNORED_FILES = [];

if (fs.existsSync(".prettierignore")) {
  const ignoreContent = fs.readFileSync(".prettierignore", "utf-8");
  IGNORED_FILES = ignoreContent
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

function isIgnored(filePath) {
  return IGNORED_FILES.some((pattern) => filePath.includes(pattern));
}

function normalizeLineEndings(content) {
  return content.replace(/\r\n/g, "\n");
}

function processFile(filePath) {
  if (isIgnored(filePath)) {
    console.log(`[SKIP] ${filePath} (ignored)`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, "utf-8");

    content = normalizeLineEndings(content);

    const ext = path.extname(filePath);
    if (EXTENSIONS.includes(ext)) {
      const options = prettier.resolveConfig.sync(filePath);
      content = prettier.format(content, { ...options, filepath: filePath });
    }

    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`[OK] ${filePath}`);
  } catch (err) {
    console.error(`[ERROR] ${filePath}:`, err.message);
  }
}

function walkDir(currentPath) {
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    const fullPath = path.join(currentPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

console.log("🚀 Начинаем нормализацию проекта...");
walkDir(process.cwd());
console.log("✅ Нормализация завершена.");
