/// <reference types="node" />
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
const css = readFileSync("src/templates/business/business.css", "utf8");
const block = css.match(/\.dt-site\s*\{([^}]+)\}/)![1];
const token = (key: string) =>
  block.match(new RegExp(`--${key}:\\s*(#[0-9a-f]{6})`))![1];
const lum = (hex: string) => {
  const c = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const contrast = (a: string, b: string) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
describe("Public narrative palette", () => {
  it("meets AA contrast for actual primary text and supporting text surfaces", () => {
    for (const fg of ["ink", "muted", "teal"])
      for (const bg of ["paper", "wash", "cream"])
        expect(contrast(token(fg), token(bg))).toBeGreaterThanOrEqual(4.5);
    expect(contrast(token("cream"), token("ink"))).toBeGreaterThanOrEqual(4.5);
  });
});
