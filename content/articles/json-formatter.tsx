import Link from "next/link";

export default function JsonFormatterArticle() {
  return (
    <article className="prose-tool">
      <p>
        Raw JSON returned from an API is sometimes a single unbroken line,
        thousands of characters long, no spaces, no line breaks. Reading
        that by eye is genuinely hard, not because the data itself is
        complicated but because the human brain needs visual structure to
        track nested brackets. A formatter just puts that structure back so
        you can actually see what you are looking at.
      </p>

      <h2>What &ldquo;formatting&rdquo; actually does here</h2>
      <p>
        JSON does not care about whitespace at all. An object with every
        space and line break stripped out is exactly as valid, and exactly
        as functional, as the same object spread across fifty neatly
        indented lines. The formatting exists purely for whoever is reading
        it, not for whatever is parsing it. Formatting takes the raw string,
        parses it into its actual structure, then rewrites it with
        consistent indentation so nested objects visually line up with how
        deep they sit.
      </p>
      <p>
        Two spacing options are here, two and four, because both are common
        depending on where you came from. Two spaces shows up in a lot of
        JavaScript and web dev style guides, including Airbnb and
        Google&apos;s.
        Four spaces is more traditional in Python and a fair amount of
        enterprise Java and C# code. Whichever one matches your existing
        project keeps things consistent instead of introducing a third,
        mismatched style into the codebase.
      </p>

      <h2>Minifying is the opposite move</h2>
      <p>
        Minifying strips out every space and line break to make the JSON as
        small as physically possible. This matters in production, where
        every byte sent over the wire adds up, especially for APIs serving
        large payloads to phones on a weak connection. A minified response
        can be meaningfully smaller than its formatted version, which
        translates into real speed at scale, even though the difference on
        one small request would be invisible.
      </p>
      <p>
        Most developers format while actively working with JSON, debugging
        a response, reviewing a config, and minify only once it is actually
        shipping somewhere. Going back and forth between the two with a
        single tool beats writing a one-off script every time you need it.
      </p>

      <h2>Validation matters as much as formatting does</h2>
      <p>
        JSON has strict rules. Keys need double quotes, not single. No
        trailing comma after the last item. Certain characters inside
        strings need escaping. One misplaced comma anywhere in a large blob
        and the whole thing fails to parse, and the error message most
        languages give you tells you almost nothing about where in a
        three-thousand-character string things actually broke.
      </p>
      <p>
        This tool tries to parse your input the moment you click format,
        and if that fails, it shows you the exact error JavaScript&apos;s
        own parser produced, which usually points roughly to where the
        syntax broke. It is often the fastest way to find a malformed JSON
        file, faster than scanning by eye for a missing bracket buried
        several lines from where the error seems to point.
      </p>

      <h2>Where developers actually use this</h2>
      <p>
        API debugging is the most common one. Browser dev tools and apps
        like Postman often show raw responses with zero formatting,
        especially from smaller or older APIs that do not pretty-print
        their own output. Pasting that into a formatter just to read it is
        a routine part of working with anything that does not already do
        this itself.
      </p>
      <p>
        Config files for build tools, package managers, and most JavaScript
        frameworks are written in JSON, and a broken package.json or
        tsconfig.json causes confusing build errors that have nothing to do
        with your actual code. Running a suspect config through a formatter
        and watching for a parse error is usually the fastest way to rule
        the config in or out before looking anywhere else. If your config
        also touches measurement values, the{" "}
        <Link href="/unit-converter" className="text-accent hover:text-accent-hover">
          unit converter
        </Link>{" "}
        is handy for translating those between units a tool expects.
      </p>
      <p>
        Students and developers new to APIs lean on formatters heavily too,
        since reading properly indented JSON takes a bit of practice, and
        seeing the structure laid out clearly makes it much easier to
        understand before you have built up the experience to mentally
        parse dense JSON on sight.
      </p>

      <h2>A note on why JSON won over the alternatives</h2>
      <p>
        XML, an older format still hanging around in some legacy systems,
        wraps every value in opening and closing tags, which makes it
        considerably more verbose for the same data. YAML, common in config
        files rather than API responses, uses indentation instead of
        brackets, more pleasant to hand-edit but more fragile, since one
        misplaced space can silently change meaning in a way that is much
        harder to catch than a JSON syntax error. JSON sits in a useful
        middle: compact enough to send efficiently, structured enough to
        parse reliably, readable enough that a formatted version is
        genuinely usable by a person trying to understand what an API
        actually sent back.
      </p>

      <h2>On privacy</h2>
      <p>
        JSON often holds sensitive stuff: API keys, user records,
        configuration values. Everything here parses and formats locally in
        your browser using JavaScript&apos;s built-in parser. Nothing gets
        sent to a server or stored anywhere. Still, as a general habit, it
        is worth stripping real credentials out before pasting any JSON
        into any tool online, this one included.
      </p>

      <h2>A couple of mistakes worth knowing about before they bite you</h2>
      <p>
        Trailing commas trip up more people than anything else. JavaScript
        objects tolerate a comma after the last item, JSON does not, and
        copying a JavaScript object literal straight into a JSON file
        because it looked the same is one of the most common ways a config
        file ends up broken. The error it produces rarely says
        &ldquo;trailing comma,&rdquo; it usually just says something vague
        about unexpected tokens, which sends people looking everywhere
        except the actual problem.
      </p>
      <p>
        Single quotes are the other one. JSON only accepts double quotes
        around keys and string values, no exceptions, even though plenty of
        programming languages treat single and double quotes as
        interchangeable. Pasting in JSON-like data copied from a Python
        dictionary, which does allow single quotes, is a near guaranteed
        way to get a parse error here, and it is worth knowing that is
        likely the cause before spending ten minutes hunting for something
        else.
      </p>
    </article>
  );
}
