import Link from "next/link";

export default function CaseConverterArticle() {
  return (
    <article className="prose-tool">
      <p>
        Text case is one of those things nobody thinks about until it goes
        wrong. A heading pasted in as all lowercase when it should be Title
        Case. A spreadsheet of product names where someone clearly had caps
        lock stuck on for half the rows. A variable a developer needs in
        snake_case but only has sitting in camelCase. None of these are hard
        to fix one at a time. They get annoying fast once you are looking at
        more than a sentence or two, which is the whole reason this tool
        exists.
      </p>

      <h2>The six cases, and where each one actually shows up</h2>
      <p>
        UPPERCASE is less about readability and more about emphasis. Legal
        text, warning labels, and a handful of style guides still call for
        it in specific spots. Designers use it too, since a heading in full
        caps can read as bolder or more authoritative depending on the font.
      </p>
      <p>
        lowercase goes the other direction, and it has become a deliberate
        branding choice for a lot of modern companies that want their
        wordmark to feel casual rather than formal. It also matters
        technically: email addresses and most usernames get stored in
        lowercase behind the scenes regardless of how someone typed them,
        so normalizing input before saving it is just standard practice in
        form handling.
      </p>
      <p>
        Title Case is what headlines and article titles are supposed to use,
        with major words capitalized and small ones like &ldquo;a&rdquo; or
        &ldquo;the&rdquo; left lowercase unless they open the sentence. This
        tool keeps it simple and capitalizes every word, which covers most
        real cases fine, though a strict editorial style guide might still
        want you to manually lowercase a stray &ldquo;the&rdquo; or
        &ldquo;of&rdquo; afterward.
      </p>
      <p>
        Sentence case capitalizes just the first letter of each sentence,
        which is how regular prose works, and it has also become the
        preferred style for interface text at a lot of large software
        companies, since sentence case headings tend to read faster at a
        glance than Title Case ones do.
      </p>
      <p>
        camelCase and snake_case belong to programming, not regular
        writing. camelCase runs words together with no spaces and capitalizes
        each word after the first, standard for variables in JavaScript and
        Java. snake_case separates words with underscores and stays fully
        lowercase, the convention Python and most database columns use.
        Anyone moving between codebases that follow different conventions,
        or turning a spreadsheet header into something a database can
        actually use as a column name, ends up needing this conversion more
        often than they would expect.
      </p>

      <h2>Why doing this by hand is more annoying than it looks</h2>
      <p>
        Retyping a paragraph in a different case is slow because it is
        repetitive, not because it is hard. Word processors technically
        have find-and-replace case options buried somewhere in a menu, but
        none of them know what camelCase or snake_case even is, since those
        are programming conventions a general writing tool was never built
        to handle.
      </p>
      <p>
        The bigger issue is that manual conversion is where small mistakes
        sneak in. Retype &ldquo;PRODUCT NAME HERE&rdquo; into Title Case by
        hand while rushing, and it is easy to catch &ldquo;Here&rdquo; but
        miss that &ldquo;Name&rdquo; needed a lowercase n. Now there is a
        tiny inconsistency sitting in published content that somebody has
        to notice later and fix. Running it through a converter instead
        means the same rule applies to every single word, no exceptions, no
        rushing-induced typos.
      </p>

      <h2>Where this actually comes up</h2>
      <p>
        Editors cleaning up text pulled from somewhere else deal with this
        constantly. Text copied out of a PDF, an old email thread, or a
        client&apos;s all-caps original draft almost never arrives in the
        case you actually want to publish it in. Fixing a sentence by hand
        is fast. Fixing a few hundred words is not. Once it is converted, a
        quick pass through the{" "}
        <Link href="/word-counter" className="text-accent hover:text-accent-hover">
          word counter
        </Link>{" "}
        confirms it still fits whatever length you are working against.
      </p>
      <p>
        Developers hit this from the other side. A CSV column header like
        &ldquo;Customer Full Name&rdquo; needs to become customer_full_name
        before it works as a database column, or customerFullName if the
        codebase follows JavaScript conventions. Doing that by hand across
        dozens of column headers is exactly the kind of small, tedious job
        that is worth automating, even though each individual conversion
        only takes a couple seconds.
      </p>
      <p>
        Social media managers and copywriters lean on sentence case and
        title case specifically to keep headlines consistent with a brand
        style guide, especially on a team where different people default to
        different capitalization habits without a shared tool to standardize
        against.
      </p>

      <h2>A couple of conventions this tool does not cover</h2>
      <p>
        Worth knowing about even outside this tool: PascalCase, which is
        camelCase but with the first word capitalized too, is the standard
        for naming classes in most object-oriented languages. kebab-case,
        hyphens instead of underscores, is what URL slugs and CSS class
        names use, partly because search engines have historically treated
        hyphens as word breaks more reliably than underscores.
      </p>
      <p>
        This tool sticks to the six people actually need day to day, but
        knowing the wider landscape helps explain why so many slightly
        different capitalization styles exist at all. Each one solves a
        specific technical problem rather than being arbitrary variation.
      </p>

      <h2>How it works</h2>
      <p>
        Paste text in, and all six versions update as you type, no button
        to click. Each one has its own copy button so you grab exactly what
        you need without selecting text by hand. It all runs in your
        browser with plain JavaScript string methods, so nothing you type
        gets sent anywhere, which matters if you are working with anything
        you would rather not pass through a server.
      </p>

      <h2>A real bug this kind of mismatch causes</h2>
      <p>
        Case mismatches are not just a cosmetic problem. They break things.
        A login system that stores an email as &ldquo;User@Example.com&rdquo;
        but compares it against &ldquo;user@example.com&rdquo; on the next
        login attempt can fail a perfectly valid login if the comparison was
        not written to ignore case, which is a more common bug than it
        sounds. Tag systems run into the same issue: &ldquo;JavaScript&rdquo;
        and &ldquo;javascript&rdquo; can quietly become two separate tags in
        a content management system if nobody normalized the input first,
        splitting what should have been one category into two.
      </p>
      <p>
        This is part of why lowercase conversion specifically gets used so
        often in backend and data work, not because lowercase looks better,
        but because comparing and storing everything in one consistent case
        avoids an entire category of bugs that only show up once real,
        messy, inconsistently-typed user input starts hitting the system.
      </p>
    </article>
  );
}
