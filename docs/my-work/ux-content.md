---
title: UX content
layout: default
parent: My work
---
# UX content
We built a lot of new features for our [new CMS]({% link docs/my-work/cms-migration.md %}). My role as a content designer was to design UX content that could be used as part of the design.
## Content model
I talk about [my work on the content model]({% link docs/my-work/future-proofing-our-content.md %}), but one bit I didn't mention was how important it was to get the wording right for the UX content. The way a content designer interacts with the content model is in the CMS. A well designed content model shouldn't need much explanation or training on how to use.

I made sure when I came up with content type names it was clear what they did. For example, we changed the name of 'revealables' to 'targeted content'. Revealables described how the component appeared to the user on a web page, not what the content is. This shift of describing what the content is rather than how it appears means we're able to be platform-agnostic.
## CMS apps
Some of the features we're building are part of the CMS. Content designers will use them as part of the publishing process.
### Preview
This app is a custom-made preview function that allows content designers to check content before publishing. It was important to keep the wording clear and succinct without losing any meaning.

This is a screenshot of how content designers can preview content. The button is clear and tells them it will open in a new tab. The right-hand side of the button tells them they can copy and paste the link if they prefer.

They're then given the option of which platform they'd like to preview. We can see in the screenshot below this will be showing what the content will look like in production.

![Screenshot of a button displaying the words 'Open preview'](/assets/img/preview-button.png)

Once they're previewing content they're able to switch views. Citizens Advice has many audiences that view content - for example:
- members of the public in England
- members of the public in Wales
- advisers in England
- advisers using the public site
- advisers using the adviser-only site

The screenshot below shows how this is presented to the content designer and how they can toggle between different views.

![Screenshot of a dropdown menu displaying the words 'View: England'](/assets/img/preview-view.png)

### Discard changes
Another feature we've been building helps content designers undo changes if they've made a mistake. The CMS we use doesn't have this as a feature so we needed to build it from scratch.

Content designers see this button on the sidebar of the CMS. The screenshot below shows the button is greyed-out if there are no changes to discard.

![Screenshot of a greyed-out button displaying the words 'Discard changes'](/assets/img/discard-changes.png)

Once they've made some changes, the button changes colour to red. This means they can now discard changes.

![Screenshot of a red button displaying the words 'Discard changes'](/assets/img/discard-changes-red.png)

If they choose to discard changes, they're presented with a pop-up that describes what this will do if they continue.

![A screenshot of a pop-up informing the user they're about discard changes. It gives the user the option to keep the changes or discard changes](/assets/img/discard-changes-modal.png)

If they choose to continue, the version information will be automatically updated with the below. This makes it clear to other content designers why a version has been made and they can just ignore what changes were made here.

![Screenshot of version information displaying information about who discarded changes and when](/assets/img/discard-changes-version-information.png)

### Chrome extension
While we [migrate from one CMS to another]({% link docs/my-work/cms-migration.md %}), content designers need to use 2 CMSs. We designed a Google Chrome extension to help them work on 2 systems. 

Below is a screenshot of the kind of things this extension can do.

![Screenshot of a Chrome extension displaying different options to a user](/assets/img/chrome-extension.png)

