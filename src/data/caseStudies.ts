export interface CaseStudySection {
  type: "text" | "image" | "list";
  heading?: string;
  headingLevel?: 2 | 3;
  content?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  summary: string;
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cms-migration",
    title: "CMS migration",
    client: "Citizens Advice",
    tags: ["Collaboration", "CMS"],
    summary:
      "Worked in a multi-disciplinary team migrating from one CMS to another — collaborating closely with developers, researchers and other content designers.",
    sections: [
      {
        type: "text",
        content:
          "I worked on a team that was responsible for migrating from one CMS to another. I worked in a multi-disciplinary team that included all sorts of different disciplines. This included developers, product owners, product designers, delivery managers, researchers and data analysts.",
      },
      {
        type: "text",
        heading: "Collaboration",
        headingLevel: 2,
        content:
          "The nature of the project required all disciplines to work with each other. When I designed the new content model I didn't work on this in isolation. It required lots of close work with back-end developers, user researchers and other content designers.\n\nCollaboration is a part of my job I enjoy. Working together with another member of the team to tackle a challenge means we can share the success and pain.",
      },
      {
        type: "text",
        heading: "Migration challenges",
        headingLevel: 2,
        content:
          "One of our biggest user groups is content designers. Being a content designer, I know how they work and what things they might struggle with.\n\nI've made sure to keep close communication with other content designers to understand how they're finding the new CMS.",
      },
      {
        type: "text",
        heading: "Growing pains",
        headingLevel: 3,
        content:
          "The new CMS we're using is pretty bare bones out of the box. Our team needs to build lots of features to provide a good user experience.\n\nI gathered feedback from content designers about their experiences with the new CMS — it wasn't great. The main issue was lots of the features weren't built yet — for example, preview. I used this feedback to argue for prioritising content designer experience over other pieces of work.",
      },
      {
        type: "text",
        heading: "Content migration",
        headingLevel: 3,
        content:
          "Migrating content from one CMS to another is hard, especially if a lot of that content hasn't been touched in many years.\n\nWhen we first migrated content to the new CMS we relied on the code to do the work. We found the code wasn't able to catch all the different issues we would find. This meant the developers were having to edit the code each time we found a new problem — it wasn't sustainable.\n\nI suggested a shift in approach to something more manual and content design led. This would mean we would be able to fix things much quicker and with less expense.",
      },
      {
        type: "text",
        heading: "Migration team",
        headingLevel: 3,
        content:
          "A result of this was the formation of a new sub-team called the migration team. We recruited 4 assistant content designers and a mid-weight content designer to lead the migration of content.\n\nThe team is migrating content at a faster speed. The creation of this team allowed our developer to work on more features.",
      },
    ],
  },
  {
    slug: "future-proofing-content",
    title: "Future-proofing our content",
    client: "Citizens Advice",
    tags: ["Content strategy", "Content modelling"],
    summary:
      "Designed a new content model that enables delivering content across many platforms at once.",
    sections: [
      {
        type: "text",
        content:
          "Citizens Advice is currently migrating from one CMS to another. As part of this work, I designed a new content model that enables Citizens Advice to deliver content across many platforms at once.",
      },
      {
        type: "text",
        heading: "What is a content model?",
        headingLevel: 2,
        content:
          "A content model is a way to structure content within a CMS. It breaks down content into their component parts — for example, a table or design component. It gives you structure and organisation to your content.",
      },
      {
        type: "text",
        heading: "What makes up a content model?",
        headingLevel: 2,
        content:
          "Content models have 2 important parts — content types and content fields.",
      },
      {
        type: "text",
        heading: "Content types",
        headingLevel: 3,
        content:
          "Content types are the components you'll see on the website. These could be things like a table of data, a banner or an image.\n\nContent types can also be chunks of data — this is where content models become powerful for content designers.",
      },
      {
        type: "text",
        heading: "Content fields",
        headingLevel: 3,
        content: "Content types are made up of content fields. For a simple example like a table of data, the content fields might be:",
      },
      {
        type: "list",
        items: [
          "table name",
          "audience — who is this going to be displayed to?",
          "body",
          "version information",
        ],
      },
      {
        type: "text",
        heading: "A real life example",
        headingLevel: 2,
        content:
          "It's often useful to think of a real life example when talking about abstract concepts like content models. An example I use when explaining our content model is how to make a cup of coffee.",
      },
      {
        type: "list",
        items: [
          "To make a cup of coffee, you need a coffee cup — this represents our content model.",
          "You can make all sorts of coffee like a flat white or latte — this represents our content types.",
          "You then need some essential ingredients like water, coffee beans and milk — this represents our content fields.",
          "You can buy ready made coffee like nespresso pods — this represents our reusable content chunks.",
        ],
      },
      {
        type: "text",
        heading: "Why use a content model?",
        headingLevel: 2,
        content: "A content model:",
      },
      {
        type: "list",
        items: [
          "helps to create consistency across the sites",
          "helps to remove duplication of content",
          "makes editing content easier and quicker",
          "makes sense for the single content store",
        ],
      },
      {
        type: "text",
        heading: "What does the Citizens Advice content model look like?",
        headingLevel: 2,
        content: "I created a spreadsheet to list all the content types and content fields.",
      },
      {
        type: "image",
        src: "/images/content-model-spreadsheet.png",
        alt: "Spreadsheet showing the Citizens Advice content model",
        caption: "The spreadsheet where we keep a record of our content model",
      },
      {
        type: "text",
        content: "This content model is used in our new CMS, Contentful.",
      },
      {
        type: "image",
        src: "/images/contentful-content-model.png",
        alt: "Screenshot of Contentful, the CMS where content designers interact with the content model",
        caption: "The content model in our new CMS, Contentful",
      },
      {
        type: "text",
        heading: "What did I do?",
        headingLevel: 2,
        content: "To complete this work, I worked with:",
      },
      {
        type: "list",
        items: [
          "other content designers on the team",
          "front-end developers",
          "back-end developers",
          "product managers",
          "user researchers",
          "data analysts",
        ],
      },
      {
        type: "text",
        content:
          "The most important part I needed to get right was making sure the content model made sense for other content designers in the team. They're the ones who'll be using the model in their jobs. I made sure we included them during the early stages of each part of the project to give feedback and get hands-on experience with the model.",
      },
      {
        type: "text",
        heading: "Future-proofing our content",
        headingLevel: 2,
        content:
          "This new model unlocks a lot of new things for content designers at Citizens Advice. We're no longer tied to the website as our only way of displaying content to users. In the future, we'll be able to reuse content across different platforms.",
      },
    ],
  },
  {
    slug: "reusable-content",
    title: "Reusable content",
    client: "Citizens Advice",
    tags: ["Content strategy", "CMS"],
    summary:
      "Led a project to validate and implement reusable content principles — reducing duplication, saving time, and creating consistency.",
    sections: [
      {
        type: "text",
        content:
          "I'm working on a project to confirm some assumptions we have about our new CMS, Contentful — its killer feature is reusable content. Using the content model I designed we can reuse content across many different parts of the website and even beyond.",
      },
      {
        type: "text",
        heading: "What is reusable content?",
        headingLevel: 2,
        content:
          "Reusable content is the concept of using the same or similar pieces of content in more than one place.\n\nIt allows us to design 'common' pieces of content once, in one place. We can then embed the 'common' content in lots of different places.\n\nWhen we need to update content, we can change it in one place and that change will apply wherever we use that content.",
      },
      {
        type: "text",
        heading: "Benefits of reusable content",
        headingLevel: 2,
        content: "The benefits are clear. Reusable content:",
      },
      {
        type: "list",
        items: [
          "makes it easier to keep content up to date and accurate",
          "saves time when working in the CMS",
          "removes duplication or near-matches",
          "avoids copying and pasting where mistakes often happen",
          "creates consistency",
        ],
      },
      {
        type: "text",
        heading: "Risks of reusable content",
        headingLevel: 2,
        content:
          "Reusable content can become frustrating and confusing if there aren't clear principles in place.\n\nThere are a few risks with reusable content. It might mean:",
      },
      {
        type: "list",
        items: [
          "we spend more time trying to find reusable content",
          "it's harder to 2i or fact check content",
          "we design content that's too generic",
          "people edit reusable content to suit their purposes",
        ],
      },
      {
        type: "text",
        heading: "Reusable content principles",
        headingLevel: 2,
        content: "Reusable content needs to be:",
      },
      {
        type: "list",
        items: [
          "easy to find",
          "easy to share with others — for example, during 2i or fact check",
          "generic enough to be reused, but contains all the details that meet a user need",
        ],
      },
      {
        type: "text",
        heading: "Easy to find",
        headingLevel: 3,
        content:
          "We store our content in Contentful. We can make the most of Contentful's inbuilt features like 'tags' or 'views'.\n\nTags are a way of grouping content together by broad themes or topics. For example, you could add the Universal Credit standard amount for people who are single and under 25 and tag this as 'Benefit rates'.\n\nViews are a way of saving a search filter within Contentful. For example, you could create a view that displays all the 'Monetary amount' content entries with the tag 'Benefit rates'.",
      },
      {
        type: "text",
        heading: "Easy to share with others",
        headingLevel: 3,
        content:
          "If we're editing content that's reused, we need to understand each context so we can check it. We share our content with the 2i group, expert advice and Citizens Advice Scotland.\n\nWe could export reused content to a Google Doc and show how it's used in each context.",
      },
      {
        type: "text",
        heading: "Generic but meets a user need",
        headingLevel: 3,
        content:
          "This is an area where it will feel a little uncomfortable at first because of the way we currently design content.\n\nTo make content reusable, it needs to be generic enough to use in different places. But, it still needs to meet a user need, otherwise it's not adding any value.",
      },
      {
        type: "text",
        heading: "Variables",
        headingLevel: 3,
        content:
          "A way to do this in the future might be to introduce the concept of variables. Variables allow you to set values for text. So instead of adding regular text, you insert a variable.\n\nWe would store variables in a variable list. For example, you could have a variable called 'Benefit' with a list of values like 'Universal Credit' or 'Housing Benefit'. Variables mean you can still make the content specific but insert different variables for each context.",
      },
    ],
  },
  {
    slug: "ux-content",
    title: "UX content",
    client: "Citizens Advice",
    tags: ["UX writing", "Product design"],
    summary:
      "Designed UX content for CMS features including preview tools, publishing workflows, and content type naming.",
    sections: [
      {
        type: "text",
        content:
          "We built a lot of new features for our new CMS. My role as a content designer was to design UX content that could be used as part of the design.",
      },
      {
        type: "text",
        heading: "Content model",
        headingLevel: 2,
        content:
          "One bit I didn't mention in my content model work was how important it was to get the wording right for the UX content. The way a content designer interacts with the content model is in the CMS. A well designed content model shouldn't need much explanation or training on how to use.\n\nI made sure when I came up with content type names it was clear what they did. For example, we changed the name of 'revealables' to 'targeted content'. Revealables described how the component appeared to the user on a web page, not what the content is. This shift of describing what the content is rather than how it appears means we're able to be platform-agnostic.",
      },
      {
        type: "text",
        heading: "CMS apps",
        headingLevel: 2,
        content:
          "Some of the features we're building are part of the CMS. Content designers will use them as part of the publishing process.",
      },
      {
        type: "text",
        heading: "Preview",
        headingLevel: 3,
        content:
          "This app is a custom-made preview function that allows content designers to check content before publishing. It was important to keep the wording clear and succinct without losing any meaning.\n\nThe button is clear and tells them it will open in a new tab. The right-hand side of the button tells them they can copy and paste the link if they prefer.",
      },
      {
        type: "image",
        src: "/images/preview-button.png",
        alt: "Screenshot of a button displaying the words 'Open preview'",
      },
      {
        type: "text",
        content:
          "Once they're previewing content they're able to switch views. Citizens Advice has many audiences that view content — for example, members of the public in England, members of the public in Wales, advisers in England, advisers using the public site, and advisers using the adviser-only site.",
      },
      {
        type: "image",
        src: "/images/preview-view.png",
        alt: "Screenshot of a dropdown menu displaying the words 'View: England'",
      },
      {
        type: "text",
        heading: "Discard changes",
        headingLevel: 3,
        content:
          "Another feature we've been building helps content designers undo changes if they've made a mistake. The CMS we use doesn't have this as a feature so we needed to build it from scratch.\n\nContent designers see this button on the sidebar of the CMS. The button is greyed-out if there are no changes to discard.",
      },
      {
        type: "image",
        src: "/images/discard-changes.png",
        alt: "Screenshot of a greyed-out button displaying the words 'Discard changes'",
      },
      {
        type: "text",
        content: "Once they've made some changes, the button changes colour to red. This means they can now discard changes.",
      },
      {
        type: "image",
        src: "/images/discard-changes-red.png",
        alt: "Screenshot of a red button displaying the words 'Discard changes'",
      },
      {
        type: "text",
        content:
          "If they choose to discard changes, they're presented with a pop-up that describes what this will do if they continue.",
      },
      {
        type: "image",
        src: "/images/discard-changes-modal.png",
        alt: "A screenshot of a pop-up informing the user they're about to discard changes",
      },
      {
        type: "text",
        content:
          "If they choose to continue, the version information will be automatically updated. This makes it clear to other content designers why a version has been made and they can just ignore what changes were made here.",
      },
      {
        type: "image",
        src: "/images/discard-changes-version-information.png",
        alt: "Screenshot of version information displaying information about who discarded changes and when",
      },
      {
        type: "text",
        heading: "Chrome extension",
        headingLevel: 3,
        content:
          "While we migrate from one CMS to another, content designers need to use 2 CMSs. We designed a Google Chrome extension to help them work on 2 systems.",
      },
      {
        type: "image",
        src: "/images/chrome-extension.png",
        alt: "Screenshot of a Chrome extension displaying different options to a user",
      },
    ],
  },
  {
    slug: "data-visualisation",
    title: "Data visualisation",
    client: "Citizens Advice",
    tags: ["Data and analytics", "Reporting"],
    summary:
      "Created Google Looker Studio reports for search analytics, page views and web stats.",
    sections: [
      {
        type: "text",
        content:
          "I'm interested in data and use it to inform content decisions. Here are a few examples of Google Looker Studio reports I've created over the last few years.",
      },
      {
        type: "text",
        heading: "Search",
        headingLevel: 2,
        content:
          "It's important to understand how users end up on our website. One of the main ways I do this is by using search data. It also tells you what language your users are using.",
      },
      {
        type: "text",
        heading: "Internal search",
        headingLevel: 3,
        content: "This report shows what search terms people are using on internal search. You can filter by:",
      },
      {
        type: "list",
        items: ["search term", "search destination page", "date range"],
      },
      {
        type: "text",
        content: "This data is important in understanding user behaviour, user language and page performance.",
      },
      {
        type: "image",
        src: "/images/internal-search.png",
        alt: "Screenshot of a report showing internal search terms and associated stats",
      },
      {
        type: "text",
        heading: "Google search",
        headingLevel: 3,
        content: "This report shows what search terms people are using on Google. You can filter by:",
      },
      {
        type: "list",
        items: ["query", "landing page", "date range"],
      },
      {
        type: "image",
        src: "/images/google-search.png",
        alt: "Screenshot of a report showing Google search terms and associated stats",
      },
      {
        type: "text",
        heading: "Google analytics",
        headingLevel: 2,
        content:
          "We use Google analytics as our web analytics tool. Google analytics can be difficult to understand so I designed a report to make it easier.",
      },
      {
        type: "text",
        heading: "Page views",
        headingLevel: 3,
        content:
          "This page is a simple view of page views over a period of time. It's often useful to narrow it down to specific pages.",
      },
      {
        type: "image",
        src: "/images/pageviews.png",
        alt: "Screenshot of a report showing pageviews over a period of time",
      },
      {
        type: "text",
        heading: "Web stats",
        headingLevel: 3,
        content:
          "The below screenshot shows the most common web stats someone might ask for. This page of the report is particularly useful for sharing with senior stakeholders.",
      },
      {
        type: "image",
        src: "/images/web-stats.png",
        alt: "Screenshot of a report showing web stats for individual pages on a website",
      },
      {
        type: "text",
        heading: "Page ratings",
        headingLevel: 2,
        content:
          "It's important to understand content performance so you can iterate. This report shows very high-level stats on page ratings over a period of time. Citizens Advice uses a 'Yes/No' rating system for the question 'Did this advice help?'.",
      },
      {
        type: "image",
        src: "/images/page-ratings.png",
        alt: "Screenshot of a report showing page ratings for a number of different web pages",
      },
    ],
  },
];
