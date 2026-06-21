import Link from "next/link";

export default function PercentageCalculatorArticle() {
  return (
    <article className="prose-tool">
      <p>
        Percentages are everywhere, a 20 percent discount, a 15 percent
        tip, a 7 percent raise, a stock down 12 percent in a week, and yet
        a surprising number of adults quietly freeze up the moment they
        actually need to do the math without a calculator in front of them.
        This tool covers the three calculations people run into most, and
        the logic behind each one is worth knowing even if you let the
        tool do the actual arithmetic.
      </p>

      <h2>What is X percent of Y</h2>
      <p>
        This is the one people ask most, and it shows up in tipping,
        discounts, basically anywhere a percentage applies to a total. The
        math is simple: divide the percentage by 100, multiply by the
        number. Twenty percent of 150 means 20 divided by 100 is 0.2, times
        150 is 30.
      </p>
      <p>
        Shopping and dining are where this actually lives day to day.
        Figuring out a discount at checkout, working out an 18 percent tip,
        estimating sales tax before you reach the register, it is the same
        calculation every time with different numbers. It is simple math,
        but doing it fast and accurately in your head while standing at a
        counter is harder than it sounds, which is honestly most of why
        this is the single most common reason people end up searching for a
        percentage calculator.
      </p>

      <h2>X is what percent of Y</h2>
      <p>
        This one flips the question. Instead of knowing a percentage and a
        total and wanting a portion, you know a portion and a total and
        want the percentage. Divide the smaller number by the larger one,
        multiply by 100. Score 30 out of 150 on a test, divide 30 by 150 to
        get 0.2, multiply by 100, you got 20 percent.
      </p>
      <p>
        This shows up constantly in school and at work. Students use it for
        test scores reported as raw points instead of a percentage.
        Businesses use the exact same math for conversion rates, what
        percent of visitors actually bought something, or a defect rate,
        what percent of units failed inspection. The math never changes,
        only the numbers plugged into it do.
      </p>

      <h2>Percentage increase and decrease</h2>
      <p>
        This is the one that genuinely confuses people, because the
        intuitive approach is usually wrong. Take the difference between
        new and old, divide by the original value specifically, not the new
        one, multiply by 100. Going from 100 to 125 is a 25 percent
        increase, because that 25-point gain gets divided by the original
        100. The common mistake is dividing by the new value instead, which
        gives you a noticeably different, wrong answer.
      </p>
      <p>
        This distinction actually matters in finance. An investment that
        drops from 100 to 50 is a 50 percent decrease. If it then climbs
        back from 50 to 100, that recovery is a 100 percent increase, not
        50 percent, because the calculation is now based on a smaller
        starting number. That asymmetry trips up a lot of people the first
        time they run into it, and it genuinely matters if you are tracking
        investment performance or revenue changes over time where values
        swing down and back up.
      </p>
      <p>
        Salary negotiations and performance reviews use this same math
        constantly, framed as a raise percentage. Retail businesses use it
        to track quarter-over-quarter sales changes, since a percentage
        change is easier to compare across categories of very different
        size than a raw dollar figure would be. For other small
        calculations like this one, the{" "}
        <Link href="/age-calculator" className="text-accent hover:text-accent-hover">
          age calculator
        </Link>{" "}
        handles a similarly common one people often get slightly wrong by
        hand.
      </p>

      <h2>A mental shortcut actually worth keeping</h2>
      <p>
        For situations with no calculator nearby, there is a useful trick
        for the first calculation specifically. Ten percent of anything is
        just the decimal point moved one place left, ten percent of 150 is
        15. From there, five percent is half that, twenty percent is
        double it, which gets you a fast tip estimate or rough discount
        without needing exact precision. It only works cleanly for round
        multiples of five or ten, and it is not a substitute for exact math
        when precision actually matters, but it is genuinely useful for
        quick real-world estimates.
      </p>

      <h2>Why doing this in your head is riskier than it seems</h2>
      <p>
        None of these three are conceptually hard once you know the
        formula, but doing percentage math mentally, even simple
        percentage math, is a common source of small slips, especially
        with numbers that do not divide cleanly. Eighteen percent of 47.50
        is a completely normal real tip calculation, and very few people
        nail it accurately on the first mental attempt without rounding
        aggressively or just getting it wrong somewhere along the way.
      </p>
      <p>
        Keeping three separate, clearly labeled calculators instead of one
        ambiguous input also solves a different problem: figuring out which
        formula even applies to your situation in the first place. A lot of
        percentage confusion is not really about the arithmetic, it is
        about correctly identifying which of these three questions you are
        actually asking before you start calculating at all.
      </p>

      <h2>A discount math mistake that costs people real money</h2>
      <p>
        Stacked discounts trip people up constantly. A store advertises 20
        percent off, and you have a coupon for an additional 10 percent
        off. It is tempting to add those and assume you are getting 30
        percent off the original price, but that is not how it works.
        The second discount applies to the already-discounted price, not
        the original one, so the real combined discount works out to 28
        percent, not 30.
      </p>
      <p>
        On a $100 item, 20 percent off brings it to $80. Take another 10
        percent off that $80, not the original $100, and you land at $72,
        a 28 percent total discount rather than the 30 percent it feels
        like it should be. The gap is small on a $100 purchase, two
        dollars, but it grows with the price, and retailers are well aware
        that most shoppers do the addition shortcut in their head and
        assume it is correct.
      </p>
      <p>
        The same logic applies in reverse to anything described as
        compounding, a price that goes up 10 percent one year and another
        10 percent the next is not up 20 percent overall, it is up 21
        percent, since the second increase applies to the already-higher
        number. It is a small gap most of the time, but worth knowing
        before you eyeball a multi-year price or rate change and assume
        simple addition gets you the right answer.
      </p>
    </article>
  );
}
