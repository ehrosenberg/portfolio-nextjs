const fs = require("fs");

// =====================
// CONFIG
// =====================
const INPUT_PATH = "../app/projects/page.tsx";
const OUTPUT_PATH = "../data/projects.js";

// =====================
// HELPERS
// =====================

// normalize for matching
const normalize = (str) =>
    str
        .toLowerCase()
        .replace(/['"]/g, "")
        .replace(/\s+/g, "")
        .replace(/_/g, "")
        .replace(/-/g, "")
        .trim();

// convert filename → variable name
const toVariableName = (fileName) => {
    return fileName
        .replace(/\.[^/.]+$/, "") // remove extension
        .replace(/[^a-zA-Z0-9]/g, " ") // replace symbols with space
        .split(" ")
        .filter(Boolean)
        .map((word, i) =>
            i === 0
                ? word.charAt(0).toUpperCase() + word.slice(1)
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
};

// =====================
// READ FILE
// =====================
const file = fs.readFileSync(INPUT_PATH, "utf-8");

// =====================
// STEP 1: EXISTING IMPORTS
// =====================
const importMatches = [
    ...file.matchAll(/import\s+(\w+)\s+from\s+["'](.+?)["']/g),
];

const importMap = {};
const existingImports = [];

importMatches.forEach((match) => {
    const variable = match[1];
    const path = match[2];
    const fileName = path.split("/").pop();

    importMap[normalize(fileName)] = variable;
    existingImports.push({
        variable,
        fileName,
    });
});

// =====================
// STEP 2: EXTRACT ARTICLES
// =====================
const articleMatches = [
    ...file.matchAll(/<article[\s\S]*?<\/article>/g),
];

const projects = [];
const autoImports = [];

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

    const normalizedImage = normalize(rawImage);

    let imageVariable;

    // ✅ CASE 1: existing import
    if (importMap[normalizedImage]) {
        imageVariable = importMap[normalizedImage];
    } else {
        // 🔥 CASE 2: auto-create import
        imageVariable = toVariableName(rawImage);

        autoImports.push({
            variable: imageVariable,
            fileName: rawImage,
        });
    }

    projects.push({
        title,
        description,
        image: imageVariable,
        category,
    });
});

// =====================
// STEP 3: BUILD IMPORT LIST
// =====================
const allImportsMap = new Map();

// existing imports
existingImports.forEach(({ variable, fileName }) => {
    allImportsMap.set(variable, fileName);
});

// auto imports (avoid duplicates)
autoImports.forEach(({ variable, fileName }) => {
    if (!allImportsMap.has(variable)) {
        allImportsMap.set(variable, fileName);
    }
});

// =====================
// STEP 4: FORMAT IMPORTS
// =====================
const importLines = [...allImportsMap.entries()].map(
    ([variable, fileName]) =>
        `import ${variable} from "@/assets/images/${fileName}";`
);

// =====================
// STEP 5: BUILD OUTPUT
// =====================
const output = `
// AUTO-GENERATED FILE — DO NOT EDIT MANUALLY

${importLines.join("\n")}

export const projects = ${JSON.stringify(projects, null, 2)
        .replace(/"image": "(\w+)"/g, "image: $1")};
`;

// =====================
// WRITE FILE
// =====================
fs.writeFileSync(OUTPUT_PATH, output);

console.log("🔥 DONE — FULL projects.js generated with ALL imports");