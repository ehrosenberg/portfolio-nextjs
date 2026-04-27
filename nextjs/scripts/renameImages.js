const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// =====================
// CONFIG
// =====================
const IMAGE_DIR = path.join(__dirname, "../assets/images");

// =====================
// HELPERS
// =====================
const toKebabCase = (fileName) => {
    const ext = path.extname(fileName);
    const name = path.basename(fileName, ext);

    const clean = name
        .toLowerCase()
        .replace(/['"]/g, "")       // remove quotes/apostrophes
        .replace(/[^a-z0-9]+/g, "-")// everything → dash
        .replace(/^-+|-+$/g, "");   // trim dashes

    return clean + ext.toLowerCase();
};

// =====================
// MAIN
// =====================
const files = fs.readdirSync(IMAGE_DIR);

// track duplicates
const seen = new Set();

files.forEach((file) => {
    const oldPath = path.join(IMAGE_DIR, file);

    if (!fs.statSync(oldPath).isFile()) return;

    let newName = toKebabCase(file);

    // 🔥 handle duplicate names
    let counter = 1;
    while (seen.has(newName)) {
        const ext = path.extname(newName);
        const base = path.basename(newName, ext);
        newName = `${base}-${counter}${ext}`;
        counter++;
    }

    seen.add(newName);

    if (file === newName) return;

    const newPath = path.join(IMAGE_DIR, newName);

    try {
        execSync(`git mv "${oldPath}" "${newPath}"`, { stdio: "inherit" });
        console.log(`✅ ${file} → ${newName}`);
    } catch (err) {
        console.error(`❌ Failed: ${file}`);
    }
});

console.log("🔥 DONE — all images renamed safely");