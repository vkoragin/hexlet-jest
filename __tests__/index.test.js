import fs from "fs";
import reverse from "../src/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test("reverse", () => {
  expect(reverse("hello")).toEqual("olleh");
  expect(reverse("")).toEqual("");
});

test("reverse with log text", () => {
  const text = fs.readFileSync(
    `${__dirname}/../__fixtures__/before.txt`,
    "utf-8",
  );

  const after = fs.readFileSync(
    `${__dirname}/../__fixtures__/after.txt`,
    "utf8",
  );

  expect(reverse(text)).toEqual(after);
});
