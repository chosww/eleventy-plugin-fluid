/*
Copyright the eleventy-plugin-fluid copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/eleventy-plugin-fluid/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/eleventy-plugin-fluid/raw/main/LICENSE.md.
*/
"use strict";

const fs = require("fs");
const test = require("ava");
const Eleventy = require("@11ty/eleventy");

test("Builds minified CSS", async function (t) {
    let elev = new Eleventy();
    await elev.write();
    let mainCss = fs.readFileSync("dist/assets/styles/app.css", "utf8");
    let timelineCss = fs.readFileSync("dist/assets/styles/pages/timeline.css", "utf8");
    let sassCss = fs.readFileSync("dist/assets/styles/sass.css", "utf8");
    t.is(mainCss, "*{box-sizing:border-box}button{font-family:inherit;font-size:1rem}*+*{margin-top:var(--space,1em)}");
    t.is(timelineCss, ".timeline ul{padding-inline-start:0;list-style:none}");
    t.is(sassCss, "a{color:#600}mark{background-color:#f90}");
});
