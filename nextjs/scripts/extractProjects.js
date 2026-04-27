const fs = require("fs");
const path = require("path");

// =====================
// CONFIG
// =====================
const INPUT_PATH = "../app/projects/page.tsx";
const OUTPUT_PATH = "../data/projects.js";
const IMAGE_DIR = path.join(__dirname, "../assets/images");

// =====================
// HELPERS
// =====================

// normalize for matching
const normalize = (str) =>
    str
        .toLowerCase()
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-z0-9]+/g, "");

// filename → variable
const toVariableName = (fileName) => {
    return fileName
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-zA-Z0-9]+/g, " ")
        .trim()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
};

// =====================
// STEP 1: READ ACTUAL FILES
// =====================
const files = fs.readdirSync(IMAGE_DIR);

const fileLookup = {};

files.forEach((file) => {
    fileLookup[normalize(file)] = file;
});

// =====================
// STEP 2: READ JSX
// =====================
const file = fs.readFileSync(INPUT_PATH, "utf-8");

const articleMatches = [
    ...file.matchAll(/<article[\s\S]*?<\/article>/g),
];

const projects = [];
const importMap = new Map();

articleMatches.forEach((block) => {
    const html = block[0];

    const titleMatch = html.match(/<h4>([\s\S]*?)<\/h4>/);
    const descMatch = html.match(/<p>([\s\S]*?)<\/p>/);
    const imageMatch = html.match(/src=["']images\/([^"']+)["']/);
    const categoryMatch = html.match(/data-category="(.*?)"/);

    const title = titleMatch ? titleMatch[1].trim() : "";
    const description = descMatch ? descMatch[1].trim() : "";
    const rawImage = imageMatch ? imageMatch[1].trim() : "";
    const category = categoryMatch ? categoryMatch[1].trim() : "";

    if (!rawImage) return;

    // 🔥 match OLD → NEW filename
    const normalized = normalize(rawImage);
    const realFile = fileLookup[normalized];

    if (!realFile) {
        console.log(`❌ NO MATCH: ${rawImage}`);
        return;
    }

    const variableName = toVariableName(realFile);

    importMap.set(variableName, realFile);

    projects.push({
        title,
        description,
        image: variableName,
        category,
    });
});

// =====================
// BUILD IMPORTS
// =====================
const importLines = [...importMap.entries()].map(
    ([variable, fileName]) =>
        `import ${variable} from "@/assets/images/${fileName}";`
);

// =====================
// OUTPUT
// =====================
const output = `
// AUTO-GENERATED FILE — DO NOT EDIT

${importLines.join("\n")}

export const projects = ${JSON.stringify(projects, null, 2)
        .replace(/"image": "([^"]+)"/g, "image: $1")};
`;

fs.writeFileSync(OUTPUT_PATH, output);

console.log("🔥 DONE — now using RENAMED files correctly");