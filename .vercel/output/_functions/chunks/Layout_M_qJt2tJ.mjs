import { c as createComponent } from './astro-component_BRuDeye7.mjs';
import 'piccolore';
import { h as addAttribute, p as renderHead, q as renderSlot, k as renderTemplate } from './entrypoint_BOxh9-6X.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, ogImage = "/og-default.png", canonicalURL } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Prime Citation</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta property="og:title"${addAttribute(`${title} | Prime Citation`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(`${Astro2.site}${ogImage}`, "content")}><meta property="og:type" content="website"><meta property="og:site_name" content="Prime Citation"><meta property="og:url"${addAttribute(canonicalURL ?? Astro2.url.href, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(`${title} | Prime Citation`, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL ?? Astro2.url.href, "href")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/starbloom/.openclaw/workspace/projects/primecitation.com/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
