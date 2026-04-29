const fs = require("fs");
const path = require("path");

// =====================
// CONFIG
// =====================
const FILE_PATH = path.join(__dirname, "../data/projects.js");

// =====================
// HELPERS
// =====================
const slugify = (str) =>
    str
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

// =====================
// READ FILE
// =====================
let content = fs.readFileSync(FILE_PATH, "utf-8");

// =====================
// TRACK DUPLICATES
// =====================
const slugCount = {};

// =====================
// REPLACE EACH PROJECT
// =====================
content = content.replace(
    /{\s*"title":\s*"([^"]+)"([\s\S]*?)}/g,
    (match, title, rest) => {
        let slug = slugify(title);

        if (slugCount[slug]) {
            slugCount[slug]++;
            slug = `${slug}-${slugCount[slug]}`;
        } else {
            slugCount[slug] = 1;
        }

        // If slug already exists, skip
        if (match.includes("slug:") || match.includes('"slug"')) {
            return match;
        }

        return `{
  "title": "${title}",
  slug: "${slug}",${rest}
}`;
    }
);

// =====================
// WRITE FILE
// =====================
fs.writeFileSync(FILE_PATH, content);

console.log("🔥 Slugs added to projects.js");