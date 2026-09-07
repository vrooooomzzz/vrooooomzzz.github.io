# Journal Inline Posts - Requirement Verification Questions

Please answer each question by filling in the letter choice after the `[Answer]:` tag. If none of the options match your intent, choose `X` and describe your preference after the tag.

## Question 1

What should "students can directly jot down their journals here" mean for the first implementation?

A) Static local journal posts maintained in the codebase, suitable for GitHub Pages and edited by changing data or Markdown files
B) In-browser journal editor where visitors can write posts that persist only in their own browser storage
C) Full shared publishing system where visitors can create posts that other visitors can read, requiring backend storage
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 2

How should locally hosted journal posts coexist with the current WordPress-linked posts?

A) Show both in one unified Writing and Technical Notes list, with badges distinguishing local and WordPress posts
B) Split Journal into separate Local Journals and WordPress Posts subsections
C) Replace WordPress posts with only local posts
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Question 3

What content format should local journal posts support initially?

A) Title, date, category, summary, topics, image, and full article body as plain structured TypeScript data
B) Title, date, category, summary, topics, image, and full article body as Markdown files imported by the app
C) Title, date, category, summary, and topics only, opening a compact detail view without images
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question 4

How should a visitor read an in-site journal post?

A) Open a detail view inside the same portfolio app without leaving the page
B) Open a generated route or hash page for each post, compatible with GitHub Pages
C) Expand the card inline below the summary
X) Other (please describe after [Answer]: tag below)

[Answer]: B

## Question 5

What is the target audience priority for this feature?

A) Students cloning the portfolio template and editing their own local journal content
B) Visitors reading your portfolio journal content directly on the website
C) Both template students and visitors are equally important
X) Other (please describe after [Answer]: tag below)

[Answer]: C

## Question 6

Should this change keep the site fully static with no backend, database, authentication, or runtime content API?

A) Yes, keep it fully static for GitHub Pages
B) No, introduce backend-backed authoring and persistence
C) Not sure; recommend the simplest approach that supports the primary user goal
X) Other (please describe after [Answer]: tag below)

[Answer]: A
