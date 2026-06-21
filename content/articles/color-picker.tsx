import Link from "next/link";

export default function ColorPickerArticle() {
  return (
    <article className="prose-tool">
      <p>
        Every color on a screen is, underneath, just a set of numbers. The
        annoying part is that designers, developers, and basically anyone
        touching digital design eventually need to translate between how
        humans describe color, &ldquo;a deep violet,&rdquo; and whatever
        precise numeric format the tool in front of them actually wants.
        That translation is the entire job of this tool.
      </p>

      <h2>HEX, RGB, HSL: same color, three different ways to write it down</h2>
      <p>
        HEX is the one most people recognize first, something like
        #7C5CFC. Each pair of characters represents red, green, and blue
        intensity on a hexadecimal scale rather than the more familiar
        base 10. It is compact and it is what CSS and most design software
        defaults to, which is probably why people reach for it first even
        without fully understanding the hex math underneath.
      </p>
      <p>
        RGB writes the same color as three plain numbers from 0 to 255 for
        red, green, and blue. It is often easier to reason about, since
        bumping the red value up and the others down clearly shifts a color
        toward red in a way that is not as obvious from a HEX string alone.
      </p>
      <p>
        HSL stands for hue, saturation, lightness, and it maps much closer
        to how people naturally think about color. Hue is the actual color,
        a position on a 360-degree wheel. Saturation is how vivid or muted
        it is. Lightness is how close it sits to black or white. HSL is
        genuinely useful when you want a set of related colors, five shades
        of the same blue for a design system, because you can hold hue
        steady and just move lightness, which is a lot more awkward to get
        right in RGB or HEX by eye.
      </p>

      <h2>Why one project ends up needing all three</h2>
      <p>
        Different tools default to different formats, often within the same
        project. A stylesheet usually leans on HEX for simplicity, but the
        same stylesheet might use HSL specifically for a color that needs
        a hover state generated automatically by nudging lightness down a
        bit. Design tools like Figma show all three side by side precisely
        because designers, developers, and brand people tend to think in
        different ones depending on their background.
      </p>
      <p>
        A common real scenario: a designer hands off a brand color in HEX,
        and a developer needs the same color in HSL to generate lighter and
        darker variants programmatically for hover, disabled, and focus
        states, without manually eyeballing each one. Converting between
        formats by hand without doing the actual color math is genuinely
        hard, which is exactly the repetitive, error-prone work a tool like
        this removes.
      </p>

      <h2>Picking versus converting</h2>
      <p>
        This tool does two slightly different jobs. The swatch and picker
        let you select a color visually and see its values across all
        three formats at once, useful when you are starting from a vague
        idea, &ldquo;something like this purple,&rdquo; or trying to match a
        color you can see somewhere else on screen.
      </p>
      <p>
        The conversion side is for when you already have a known value in
        one format and need it in another, pasting in a HEX code from a
        brand guideline and reading off the matching RGB and HSL instantly
        without doing any math. Both directions stay in sync, so switching
        between picking visually and entering a known value works
        interchangeably depending on what you are actually doing at the
        moment.
      </p>

      <h2>Where this comes up in real work</h2>
      <p>
        Developers building off a design file constantly need to convert
        colors. A designer working in Figma might export brand colors as
        HEX by default, but a developer building a CSS system that
        programmatically generates ten shades and tints from one primary
        color needs that color in HSL for the math to actually work
        cleanly.
      </p>
      <p>
        Brand consistency work hits this too. A single brand color often
        needs to travel across very different tools, print design working
        in CMYK-adjacent values, a social media graphic needing a plain HEX
        code, a developer needing CSS-ready format, all from the exact same
        underlying brand color, just expressed differently for whoever is
        using it.
      </p>
      <p>
        Accessibility work leans on HSL specifically, since adjusting
        lightness while holding hue and saturation steady is the most
        reliable way to create a variant that keeps the same color identity
        while hitting a required contrast ratio against a background,
        something considerably harder to land predictably by eye in HEX or
        RGB.
      </p>

      <h2>What about transparency</h2>
      <p>
        Standard HEX, RGB, and HSL do not capture transparency on their
        own. For that you will sometimes see RGBA or HSLA, which add a
        fourth value for opacity. That matters for things like
        semi-transparent overlays or modal backgrounds that need to blend
        with whatever sits behind them. This tool sticks to the three solid
        formats people need most for color matching and brand work, since
        transparency usually gets adjusted separately once the base color
        is already settled.
      </p>

      <h2>How it works</h2>
      <p>
        Drag the picker or type a known value into any of the three fields,
        and the other two update instantly. No conversion button to click,
        every field stays live. Each value has its own copy button, so
        grabbing exactly the format you need, a HEX code for CSS or an HSL
        value for a spreadsheet, takes one click. If you are mocking up a
        design alongside picking colors, the{" "}
        <Link href="/lorem-ipsum-generator" className="text-accent hover:text-accent-hover">
          Lorem Ipsum generator
        </Link>{" "}
        is a natural pairing for filling in placeholder text.
      </p>

      <h2>One thing worth checking before you lock in a palette</h2>
      <p>
        Roughly 1 in 12 men and 1 in 200 women have some form of color
        vision deficiency, most commonly red-green. A color pairing that
        looks perfectly distinct to you can become nearly identical to a
        meaningful chunk of your audience, which matters most for things
        like error states in red paired with success states in green, a
        combination that is exactly the hardest case for the most common
        type of color blindness.
      </p>
      <p>
        HSL is actually the easier format to sanity-check this with, since
        a quick way to gut-check a palette is comparing lightness values
        rather than relying on hue alone. Two colors with very different
        hues but similar lightness can still end up looking close to
        identical to someone with red-green color blindness, even though
        they look obviously different to most people. If a design leans
        heavily on color alone to convey status, it is worth pairing it
        with an icon or label too, not as a nice-to-have, but because color
        alone genuinely does not reach everyone the same way.
      </p>
    </article>
  );
}
