const fs = require("fs");
const file = "src/data/portfolioData.json";
const content = fs.readFileSync(file, "utf8");
const data = JSON.parse(content);
if (!data.projects) throw new Error("No projects");
const normalize = (value) => {
  if (!value || typeof value !== "string") return value;
  if (value.startsWith("/assets/img/")) return value;
  return `/assets/img/case-study/${value}`;
};
let changed = false;
for (const p of data.projects) {
  if (p.img && typeof p.img === "string") {
    const norm = normalize(p.img);
    if (p.img !== norm) {
      p.img = norm;
      changed = true;
    }
  }
  if (Array.isArray(p.images)) {
    const newImages = p.images.map((img) => normalize(img));
    if (JSON.stringify(newImages) !== JSON.stringify(p.images)) {
      p.images = newImages;
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
