/** Font Awesome 6 outline (`fa-regular`) icons for Industrial mega menu cards. */
const INDUSTRY_MEGA_MENU_ICONS: Record<string, string> = {
  "pcd-pharma": "fa-regular fa-capsules",
  "car-parts": "fa-regular fa-car",
  "road-safety": "fa-regular fa-road",
  electronics: "fa-regular fa-microchip",
  "industrial-automation": "fa-regular fa-gears",
  healthcare: "fa-regular fa-heart-pulse",
  "smc-grp-tanks": "fa-regular fa-droplet",
  "offline-brand-ads": "fa-regular fa-bullhorn",
  "bag-manufacturer": "fa-regular fa-bag-shopping",
  "machinery-manufacturer": "fa-regular fa-screwdriver-wrench",
  "ball-bearing": "fa-regular fa-circle-dot",
  "pool-table": "fa-regular fa-table-cells-large",
  "fire-safety-doors": "fa-regular fa-fire-extinguisher",
};

export function getIndustryMegaMenuIconClass(industryKey: string): string {
  return INDUSTRY_MEGA_MENU_ICONS[industryKey] ?? "fa-regular fa-building";
}
