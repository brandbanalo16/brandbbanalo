const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "..", "src", "data", "portfolioData.json");
const content = fs.readFileSync(file, "utf8");
const data = JSON.parse(content);
if (!data.projects) throw new Error("No projects");

const mapExt = (value) => {
  if (!value || typeof value !== "string") return value;
  let name = value;
  if (name.startsWith("/assets/img/")) {
    name = name.replace("/assets/img/project/", "");
    name = name.replace("/assets/img/case-study/", "");
  }
  if (name.endsWith(".webp")) {
    name = name.replace(/\.webp$/i, ".jpg");
  }
  return name;
};

const normalize = (value) => {
  if (!value || typeof value !== "string") return value;
  const name = mapExt(value);
  const candidate1 = path.join(
    __dirname,
    "..",
    "public",
    "assets",
    "img",
    "case-study",
    name,
  );
  const candidate2 = path.join(
    __dirname,
    "..",
    "public",
    "assets",
    "img",
    "project",
    name,
  );

  if (fs.existsSync(candidate1)) return "/assets/img/case-study/" + name;
  if (fs.existsSync(candidate2)) return "/assets/img/project/" + name;
  // fallback path preserve previous path form (case-study)
  return "/assets/img/case-study/" + name;
};

let changed = false;

for (const p of data.projects) {
  if (p.img && typeof p.img === "string") {
    const normalized = normalize(p.img);
    if (p.img !== normalized) {
      p.img = normalized;
      changed = true;
    }
  }

  if (Array.isArray(p.images)) {
    const normalizedImages = p.images.map((img) => normalize(img));
    if (JSON.stringify(normalizedImages) !== JSON.stringify(p.images)) {
      p.images = normalizedImages;
      changed = true;
    }
  }
}

if (changed) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log("Updated portfolioData.json");
} else {
  console.log("No changes needed");
}
