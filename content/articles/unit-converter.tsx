import Link from "next/link";

export default function UnitConverterArticle() {
  return (
    <article className="prose-tool">
      <p>
        The United States, Liberia, and Myanmar are still the only three
        countries that have not officially adopted the metric system, which
        means anyone working internationally, shipping, manufacturing,
        science, cooking, runs into unit conversion constantly, often
        without fully noticing how often it happens until a recipe in grams
        or a shipping weight in kilograms lands in an otherwise pound-and-
        inch American workflow.
      </p>

      <h2>Length, weight, temperature: why these three together</h2>
      <p>
        These three cover most everyday conversion needs, and each follows
        genuinely different math, which is part of why one combined tool
        beats hunting down three separate ones.
      </p>
      <p>
        Length and weight are both what mathematicians call linear
        conversions, you multiply by a fixed factor, and that relationship
        never changes regardless of the value. One mile is always exactly
        1.609344 kilometers, whether you are converting 1 mile or 1,000.
        Mathematically straightforward, even if remembering the exact
        factor for something less common, ounces to grams, is not
        something most people walk around with memorized.
      </p>
      <p>
        Temperature is different, and this is the part that catches people.
        Converting Celsius to Fahrenheit is not a simple multiplication,
        because the two scales do not share a zero point. Zero Celsius is
        water freezing. Zero Fahrenheit is a noticeably colder, fairly
        arbitrary historical reference. Converting between them needs both
        a multiplication and an addition or subtraction, not just scaling,
        which is exactly the kind of calculation people get wrong trying to
        do it from memory under time pressure, adjusting an oven mid-recipe
        being the classic case.
      </p>

      <h2>Where getting this wrong actually causes problems</h2>
      <p>
        Cooking is probably the most common place a conversion mistake has
        real, if usually minor, consequences. A recipe written in metric,
        common outside the US, needs accurate conversion to cups and
        Fahrenheit for someone more used to imperial, and getting an oven
        temperature wrong by even a modest margin can noticeably change
        baking results, where temperature accuracy actually matters more
        than in most other cooking.
      </p>
      <p>
        Travel is another. Checking a forecast in a country using Celsius,
        renting a car and trying to understand a speed limit posted in
        kilometers per hour, checking your own weight on a scale that only
        shows kilograms, all the same basic need, often several times a day
        on a single trip.
      </p>
      <p>
        International shipping leans on accurate weight conversion
        constantly, since shipping cost is calculated on weight, and a
        business shipping across borders needs to reliably convert between
        whatever unit their supplier uses and what their carrier expects,
        where a conversion error directly translates into a wrong shipping
        quote or a customs paperwork problem.
      </p>
      <p>
        Academic and scientific work, physics, chemistry, engineering,
        relies on metric almost universally, which means students trained
        primarily in imperial units frequently need to convert while
        working through problems or reading research published entirely in
        metric. If that same research work involves structured data, the{" "}
        <Link href="/json-formatter" className="text-accent hover:text-accent-hover">
          JSON formatter
        </Link>{" "}
        is a similarly practical tool for the data side of that workflow.
      </p>

      <h2>The units covered here</h2>
      <p>
        For length: meters, kilometers, centimeters, millimeters on the
        metric side, miles, yards, feet, inches on the imperial side,
        covering everything from everyday height measurements up through a
        road trip&apos;s total mileage.
      </p>
      <p>
        For weight: kilograms, grams, milligrams on the metric side, pounds
        and ounces on the imperial side, plus tonnes for larger-scale
        conversions like shipping or industrial weights where kilograms
        alone get unwieldy to work with.
      </p>
      <p>
        For temperature, all three common scales: Celsius, the world
        standard and the scientific default, Fahrenheit, still standard in
        the US for everyday use, and Kelvin, used mainly in scientific and
        engineering work where an absolute scale starting at absolute zero
        rather than water&apos;s freezing point is actually required for
        the underlying physics to make sense.
      </p>

      <h2>A few figures worth keeping in your head</h2>
      <p>
        While this tool handles exact conversions instantly, a few rough
        numbers are worth remembering for quick estimates without a
        calculator. A kilometer is roughly six-tenths of a mile, useful for
        sanity-checking a distance while traveling. A kilogram is a bit
        over two pounds, close enough for guessing weight on an unfamiliar
        scale. For temperature, 20 degrees Celsius is a comfortable room
        temperature, around 68 Fahrenheit, a useful anchor for estimating
        other readings relative to it. None of these replace an exact
        conversion when precision matters, but they cover quick, real-world
        judgment calls fine, the kind of estimate you make standing in a
        hardware store aisle or checking a weather app abroad, not the
        kind you would want on an actual invoice or a medical dosage.
      </p>

      <h2>How the calculation works</h2>
      <p>
        For length and weight, your input converts into a common base
        unit first, meters for length, kilograms for weight, then converts
        from that base into whatever target unit you picked. That keeps the
        conversion factors consistent across every possible pair instead of
        needing a separate hardcoded formula for each combination.
        Temperature follows the standard formulas through Celsius as an
        intermediate step, applying the right addition or subtraction
        alongside the multiplication it actually needs. Everything updates
        as you type, calculated entirely in your browser with no server
        round trip involved.
      </p>

      <h2>A real-world example of what a unit mix-up can cost</h2>
      <p>
        It is worth knowing this is not a hypothetical concern. NASA lost
        an entire Mars orbiter in 1999, the Mars Climate Orbiter, because
        one engineering team&apos;s software calculated thrust in
        pound-force seconds, an imperial unit, while the navigation
        team&apos;s software expected the figure in newton-seconds, the
        metric equivalent.
        Nobody caught the mismatch before the spacecraft entered Mars&apos;s
        atmosphere at the wrong trajectory and was lost. The whole thing
        traced back to a unit conversion that should have happened
        somewhere in the process and did not.
      </p>
      <p>
        Most unit conversion mistakes obviously do not cost hundreds of
        millions of dollars, but the underlying failure mode is the same
        one this tool exists to prevent: assuming a number is in one unit
        when it is actually in another, and never running the actual
        conversion to check. Switching between length, weight, and
        temperature here is a single click, and switching which unit is
        the source versus the target takes no extra steps either, the
        conversion runs both directions automatically based on whatever
        you currently have selected.
      </p>
    </article>
  );
}
