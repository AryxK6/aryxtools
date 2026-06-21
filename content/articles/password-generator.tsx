import Link from "next/link";

export default function PasswordGeneratorArticle() {
  return (
    <article className="prose-tool">
      <p>
        Most people have somewhere around 80 to 100 accounts that need a
        password at this point, and basically nobody can remember that many
        unique, genuinely strong ones. That gap is exactly why password
        reuse remains one of the most common security mistakes people make,
        and why a generator like this is more important than it looks at
        first glance.
      </p>

      <h2>Strength is really about randomness, not the rules you were taught</h2>
      <p>
        A lot of people learned that a strong password needs a capital
        letter, a number, and a symbol, and stopped there. That advice is
        not wrong, but it misses the actual point. A password like
        &ldquo;P@ssword1&rdquo; technically checks every box, capital,
        number, symbol, eight characters, while still being one of the
        first guesses any cracking tool would try, because it follows a
        pattern a human would think of.
      </p>
      <p>
        What actually makes a password hard to crack is entropy, basically
        a measure of how unpredictable it is. A truly random selection from
        a large character set has far more entropy than anything a person
        consciously constructs, even a long one, because human-made
        passwords follow patterns: a word, then a number, then a symbol.
        That is a pattern. Cracking software is built specifically to
        exploit patterns.
      </p>

      <h2>How the randomness here actually works</h2>
      <p>
        This generator uses your browser&apos;s built-in cryptographically
        secure random number source, the same kind of randomness used for
        things like encryption keys, instead of JavaScript&apos;s ordinary
        Math.random. That distinction is bigger than it sounds.
        Math.random is fast and fine for general use, but it was never
        designed to be unpredictable in a security sense, and some older
        browser implementations of it have been shown to be reconstructible
        if you know enough about how it was seeded. The cryptographic
        source used here is built specifically so its output cannot be
        predicted, even by someone who knows exactly how the algorithm
        works.
      </p>
      <p>
        Every character gets picked independently from whichever sets you
        have turned on. Lowercase is always in, with uppercase, numbers, and
        symbols as optional extras depending on what a particular site
        actually requires.
      </p>

      <h2>Length matters more than people think</h2>
      <p>
        If you only change one thing, make it length. Every extra character
        multiplies the number of combinations someone would need to try,
        and that compounds fast. A random 8-character password using a full
        character set can, with current hardware, be brute-forced in hours
        by someone with the right equipment. Push that to 16 characters and
        the same brute-force attempt stretches into years, long enough that
        it stops being a realistic threat for almost anyone.
      </p>
      <p>
        That is why this tool defaults to 16 characters rather than the
        8-character minimum a lot of older sites still technically accept.
        Longer is close to always better, and the only real cost is being
        harder to type by hand, which barely matters anymore since most
        people are letting a password manager fill it in automatically
        anyway.
      </p>

      <h2>Why reuse quietly undoes all of this</h2>
      <p>
        A strong, random password loses most of its value the moment it
        gets reused somewhere else. Data breaches happen constantly, and
        leaked credentials get tested automatically against other popular
        sites in what is called credential stuffing. If your email and
        password from some low-stakes site you barely use happen to match
        your banking login because you reused it, the strength of either
        password individually stops mattering.
      </p>
      <p>
        This is really the argument for pairing a generator with a password
        manager, not for convenience, but because remembering dozens of
        genuinely unique random passwords without writing them down
        somewhere is not something human memory is built to do. Generate a
        new one here for each account, save it, and password reuse mostly
        disappears as a risk in your life. The same browser-only principle
        applies to our{" "}
        <Link href="/qr-code-generator" className="text-accent hover:text-accent-hover">
          QR code generator
        </Link>
        , useful if you ever need to hand someone a password securely in
        person.
      </p>

      <h2>On passphrases, briefly</h2>
      <p>
        You may have seen the advice to use a passphrase instead, several
        random unrelated words strung together, popularized by a webcomic
        showing that a long passphrase can carry more entropy than a
        shorter complex password while staying memorable. That is true, but
        only if the words are actually picked at random from a large list,
        not chosen by a person trying to think of memorable ones, since
        human-picked words follow predictable patterns just like
        human-picked passwords do. For anything a password manager is
        filling in for you anyway, memorability stops mattering, which is
        why a fully random character password stays the better default
        most of the time.
      </p>

      <h2>What this tool does, and does not, do</h2>
      <p>
        Generation happens entirely in your browser. Nothing is
        transmitted, logged, or stored anywhere, which is honestly how a
        password generator should always work, there is no good reason one
        would ever need network access. Close the tab and the password
        only exists wherever you saved it yourself.
      </p>
      <p>
        The strength indicator is a rough guide based on length and
        character variety, not a precise cryptographic measurement.
        Sticking to the longest length a site allows, with every character
        type turned on where it is permitted, will reliably land you well
        into &ldquo;strong&rdquo; territory for nearly anything you need it
        for.
      </p>

      <h2>One outdated piece of advice worth retiring</h2>
      <p>
        A lot of older corporate password policies still force a password
        change every 90 days, and it is worth knowing this advice has
        largely fallen out of favor among security researchers, including
        groups like NIST, the US standards body that publishes a lot of
        the guidance other organizations base their policies on. The
        problem is that forced rotation does not actually make people pick
        better passwords. It makes them pick worse ones, usually a small,
        predictable variation on whatever they were already using,
        &ldquo;Summer2024!&rdquo; becoming &ldquo;Summer2025!&rdquo; three
        months later, which is arguably easier to guess than the original.
      </p>
      <p>
        The more useful approach, and the one current guidance actually
        favors, is a long, random, unique password per account that only
        gets changed when there is an actual reason to, a breach, a leak,
        suspicious activity, rather than on an arbitrary calendar. If your
        workplace still mandates rotation regardless, this generator is at
        least a faster way to produce a genuinely random replacement
        instead of just incrementing a number at the end of the old one.
      </p>
    </article>
  );
}
