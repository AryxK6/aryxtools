import Link from "next/link";

export default function WordCounterArticle() {
  return (
    <article className="prose-tool">
      <p>
        Nobody checks their word count for fun. You check it because a college
        essay has to land between 1,200 and 1,500 words, or a LinkedIn post
        starts dying in the algorithm past a certain length, or a meta
        description just got chopped off mid-sentence in Google&apos;s
        results and now it reads like nonsense. I have been the person
        staring at a 50-word overage five minutes before a deadline. It is
        not a fun place to be.
      </p>

      <h2>Why this still matters when every app already has a counter</h2>
      <p>
        Google Docs counts words. Word counts words. Most blog editors show a
        live tally in the corner. So why does a standalone counter still get
        used constantly? Because half the places you actually write in do
        not have one. A comment box. An application form. A notes app where
        you are drafting a caption before copying it somewhere else. Pasting
        the text into a separate tool just to get a number is, more often
        than not, faster than hunting for a built-in count that may not
        exist.
      </p>
      <p>
        There is a second reason too, and it is the one people forget. Search
        engines and ad platforms enforce limits that have nothing to do with
        how your writing tool counts internally. Google generally displays
        somewhere around 60 characters of a title tag before cutting it off.
        A tweet still caps out at 280. Amazon has its own ceiling on product
        descriptions. None of these match how Word counts a document, so if
        the limit lives outside your writing tool, you need a counter that
        does too.
      </p>

      <h2>What the numbers on this page actually mean</h2>
      <p>
        Words are counted by splitting on whitespace, the same basic method
        most word processors use, so the number here should line up closely
        with whatever Word or Docs would tell you for the same text.
      </p>
      <p>
        Characters come in two versions: with spaces and without. If you are
        up against a platform limit, like a meta description or an SMS,
        spaces usually count, so that is the number to watch. The
        without-spaces version mostly matters for academic writing, where
        someone padding a paragraph with extra spacing to look longer is a
        real, if slightly petty, thing people try.
      </p>
      <p>
        Sentence count looks for periods, question marks, and exclamation
        points followed by a space or the end of the text. It is not
        perfect, no automated sentence counter is. &ldquo;Dr.&rdquo; or a
        number like &ldquo;3.5&rdquo; can occasionally trip it up. Treat it
        as a strong estimate, not gospel, especially in anything full of
        abbreviations.
      </p>
      <p>
        Paragraph count just looks at line breaks. Paste in a block of text
        copied straight from a PDF with no breaks, and it will read as one
        giant paragraph, because as far as the tool can tell, it is one.
        You would need to add the breaks back in yourself first.
      </p>
      <p>
        Reading time runs on the standard 200 words per minute estimate,
        the same figure most blogs and newsletter tools use for their own
        &ldquo;4 min read&rdquo; labels. It will not match your personal
        reading speed exactly, nothing generic like this can, but it lines
        up with what readers are already used to seeing.
      </p>

      <h2>Where this actually gets used</h2>
      <p>
        Academic writing is probably the biggest one. A 500-word reflection
        and a 3,000-word paper are testing genuinely different things, and
        going way outside the assigned range tends to cost marks even when
        the writing itself is good. Most students draft somewhere without a
        live counter and only check before submitting, which is exactly the
        moment this tool is for.
      </p>
      <p>
        Content and SEO work is the other big one, and it is close to home
        for a tools site like this. A meta description that runs past 155 to
        160 characters gets truncated with an ellipsis in search results,
        which looks unfinished and quietly costs clicks. Checking that before
        you publish takes five seconds and avoids a small, avoidable,
        slightly embarrassing mistake.
      </p>
      <p>
        Social platforms run on hard limits too, and even where there is no
        strict cap, shorter usually performs better, so people checking
        length before posting is less about rules and more about discipline.
      </p>
      <p>
        And then there is the cover letter situation. An application portal
        says &ldquo;keep it under 300 words,&rdquo; you write somewhere else
        first, and you check the count before pasting it in rather than
        finding out you were 80 words over only after the form already
        truncated your answer. If the draft also needs its capitalization
        cleaned up, the{" "}
        <Link href="/case-converter" className="text-accent hover:text-accent-hover">
          case converter
        </Link>{" "}
        handles that part.
      </p>

      <h2>A small caveat</h2>
      <p>
        If you are working against something strict, like an SMS gateway
        or a specific ad network, it is worth double-checking that
        platform&apos;s own counter once you get close. Different systems
        occasionally handle emoji or line breaks a little differently. For
        everything else, school, blogs, general writing, what you see here
        will match closely enough that it is not worth a second thought.
      </p>

      <h2>Why word count and character count tell you different things</h2>
      <p>
        People sometimes treat word count and character count as
        interchangeable, and they are not. A sentence full of short words,
        &ldquo;the cat sat on the mat,&rdquo; has a very different
        character-to-word ratio than one full of long ones, like
        &ldquo;photosynthesis fundamentally transforms atmospheric
        carbon.&rdquo; Both might land at six or seven words, but the
        character counts are nowhere close.
      </p>
      <p>
        This matters more than it sounds. A platform that limits you to 280
        characters is not really limiting your word count, it is limiting
        your character count, and the two only loosely correlate. Someone
        writing in short, plain words can fit noticeably more actual content
        into the same character budget than someone writing in longer,
        more technical vocabulary. If you have ever wondered why your
        &ldquo;short&rdquo; tweet still got flagged as too long, this is
        usually why. Word count felt fine. Character count was not.
      </p>
      <p>
        This is part of why this tool shows both numbers side by side rather
        than picking one and hiding the other. Depending on what you are
        actually up against, a college word limit or a platform character
        cap, you need to be watching a different number, and assuming they
        track each other closely is a quiet, easy mistake to make.
      </p>
      <p>
        Everything runs in your browser. Nothing you paste here goes
        anywhere else, so pasting in a draft you would rather not put
        through a server somewhere is fine.
      </p>
    </article>
  );
}
