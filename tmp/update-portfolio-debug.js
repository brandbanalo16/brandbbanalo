const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");
const file = path.join(root, "src", "data", "portfolioData.json");
const out = path.join(root, "tmp", "update-portfolio-debug.txt");
const data = JSON.parse(fs.readFileSync(file, "utf8"));
const normalize = (input) => {
  let name = input;
  if (name.startsWith("/assets/img/")) {
    name = name.replace("/assets/img/project/", "");
    name = name.replace("/assets/img/case-study/", "");
  }
  if (name.endsWith(".webp")) name = name.replace(/\.webp$/i, ".jpg");
  const candidate = path.join(
    root,
    "public",
    "assets",
    "img",
    "case-study",
    name,
  );
  const exists = fs.existsSync(candidate);
  return { name, candidate, exists, out: "/assets/img/case-study/" + name };
};
let o = [];
for (const p of data.projects.slice(0, 3)) {
  o.push("--- project " + p.id + " " + p.slug);
  const res = normalize(p.img);
  o.push("img=" + p.img + " => " + JSON.stringify(res));
  for (const i of p.images) {
    const r = normalize(i);
    o.push("imgItem=" + i + " => " + JSON.stringify(r));
  }
}
fs.writeFileSync(out, o.join("\n"), "utf8");
