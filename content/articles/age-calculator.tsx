import Link from "next/link";

export default function AgeCalculatorArticle() {
  return (
    <article className="prose-tool">
      <p>
        Working out someone&apos;s exact age sounds like basic subtraction,
        this year minus their birth year, until you actually try to do it
        precisely and hit the part everyone forgets: it depends entirely on
        whether their birthday already happened this year. That one detail
        is why quick mental age math is wrong more often than people
        realize, and it is the whole reason this tool exists.
      </p>

      <h2>Why simple subtraction gets it wrong</h2>
      <p>
        Born in 1995, current year 2026, the obvious instinct is to
        subtract and say 31. That is right if the birthday already passed
        this year. If it has not, they are still 30, because a full year
        has not technically passed since their last birthday. This is the
        single most common source of age errors, and it gets messier once
        you bring months and days into it too, which means checking whether
        the current day of the month falls before or after the birth day,
        and borrowing a month or year when it does not line up, similar to
        how borrowing works in regular subtraction.
      </p>
      <p>
        This calculator handles that automatically by comparing year,
        month, and day directly and adjusting when a borrow is needed,
        instead of relying on a shortcut that only works for some dates and
        quietly gives a wrong answer for the rest.
      </p>

      <h2>What the different numbers actually mean</h2>
      <p>
        The main result, years, months, days, is what most people actually
        want, an exact age the way people naturally say it out loud.
        &ldquo;31 years, 4 months, 12 days&rdquo; is more precise than just
        31, and that precision matters in specific situations, legal
        contexts especially, where exact age on a specific date has real
        consequences.
      </p>
      <p>
        Total days, weeks, and months come up less often but matter in
        specific professional contexts. Total days lived shows up in
        medicine, particularly pediatrics, where an infant&apos;s age gets
        tracked in days or weeks for the first several months since
        development moves fast enough at that stage that month-level
        granularity is too coarse. Total months matters for child
        development milestones, which are usually described in total
        months rather than years and months separately.
      </p>

      <h2>Where exact age actually has consequences</h2>
      <p>
        Legal eligibility is the clearest case. Voting age, contract
        eligibility, age-gated purchases, all of it depends on an exact
        date, not an approximate age. Someone whose birthday is tomorrow is
        legally a different age today than tomorrow, and in contexts where
        that distinction has real weight, getting it precisely right
        actually matters.
      </p>
      <p>
        Retirement calculations often key off exact age too. Pension rules
        frequently tie eligibility to a precise threshold, penalty-free
        withdrawals at a specific age, where being a single day under that
        line can have a real financial consequence depending on the
        specific rule.
      </p>
      <p>
        Insurance underwriting sometimes uses exact age in years and months
        rather than rounding to the nearest year, since age is one of the
        biggest factors driving premiums, and a more precise calculation
        can occasionally shift someone into a different pricing bracket
        depending on how the insurer defines their age bands.
      </p>
      <p>
        Outside the formal stuff, a lot of people use this purely out of
        curiosity, working out exactly how many days old they are for a
        milestone birthday, or the exact gap between siblings down to the
        month instead of a rough guess. There is no real stake in getting
        that right, but people want it right anyway, which is a fairly
        human thing. Our{" "}
        <Link href="/percentage-calculator" className="text-accent hover:text-accent-hover">
          percentage calculator
        </Link>{" "}
        runs on the same idea, taking something people often get slightly
        wrong by hand and making it exact.
      </p>

      <h2>Age calculated against a different date</h2>
      <p>
        Sometimes you do not need age as of today. Lawyers checking
        eligibility as of a signing date, HR calculating tenure as of an
        anniversary, genealogists working out how old someone was at a
        documented historical event, all need age relative to some other
        reference date, not now. The same arithmetic applies no matter
        which date you are measuring against, it does not care whether the
        comparison date is today, the past, or the future, only that both
        dates are known.
      </p>

      <h2>A quick note on cultural age-counting differences</h2>
      <p>
        Worth flagging: not every culture counts age the same way this
        calculator does. Counting complete years since birth is standard
        across most of the world and in essentially all legal and medical
        contexts globally. Some East Asian countries historically used a
        different system though, where someone is considered one year old
        at birth rather than zero, with age increasing at the start of each
        calendar year instead of on the actual birthday. Most of those
        countries have since shifted to the international standard
        officially, but the older method still shows up informally in some
        contexts, worth knowing if you are working across an international
        setting where age might get reported differently than this
        calculator assumes.
      </p>

      <h2>How it handles the messy parts</h2>
      <p>
        Leap years and uneven month lengths get handled automatically
        because this works with actual calendar dates instead of treating
        every month as a flat 30 days, a simplification that introduces
        small but real errors over time, especially for anyone born on or
        near February 29. This calculator uses your browser&apos;s
        built-in date handling, which correctly accounts for real month
        lengths and leap years, so the result stays accurate no matter
        which date you are starting from.
      </p>
      <p>
        Everything calculates locally based on the date you enter and your
        device&apos;s clock. Nothing gets sent anywhere or stored, worth
        knowing if you are calculating someone else&apos;s age and would
        rather not have that pass through a server unnecessarily.
      </p>

      <h2>An off-by-one mistake worth watching for</h2>
      <p>
        There is a specific edge case that catches people manually checking
        age eligibility: someone turns a given age on their birthday, not
        the day before or the day after, which sounds obvious but gets
        miscounted constantly in informal calculations. If an event
        requires someone to be 18 by a certain date and their birthday
        falls exactly on that date, they do qualify, they turn 18 that
        morning. Move the cutoff one day earlier and they do not, even
        though it feels like splitting hairs over nothing. Automated
        systems handle this consistently because the date comparison is
        exact. People doing it by hand, especially under time pressure at
        a register or a sign-up desk, get this wrong more often than you
        would expect.
      </p>
    </article>
  );
}
