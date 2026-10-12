---
slug: ux-content
title: UX content
client: Citizens Advice
tags: UX writing, Product design
summary: Designed UX content for CMS features including preview tools, publishing workflows, and content type naming.
---

We built a lot of new features for our new CMS. I wrote the UX content for them, working with product designers and software engineers. I also built a Chrome extension myself.

## The problem

Content designers use the CMS every day to write and publish our advice. The CMS was bare bones out of the box, so we built many of the features ourselves. Each one needed words that were clear without training or explanation.

## My role

I wrote the content type names, labels, button text, pop-ups and version information for the new features. I worked with product designers and software engineers, and we tested the content with content designers. I wrote the code and the content for the Chrome extension.

## Naming content types

Content designers meet the content model through the CMS, so the names are the interface. A well designed content model shouldn't need much explanation or training.

I made sure each content type name said what it does. For example, we changed 'revealables' to 'targeted content'. 'Revealables' described how the component appears on a web page, not what the content is. Describing what the content is means the names work on any platform, not just the website.

## CMS apps

Some of the new features are part of the CMS. Content designers use them as part of the publishing process.

### Preview

Preview is a custom-made app that lets content designers check content before they publish. The wording had to be short and clear without losing any meaning.

The button tells people it will open in a new tab. The right-hand side of the button tells them they can copy and paste the link instead.

![Screenshot of a button displaying the words 'Open preview'](/images/preview-button.png)

Once they're previewing, content designers can switch views. Citizens Advice has many audiences, including members of the public in England, members of the public in Wales, advisers in England, advisers using the public site and advisers using the adviser-only site.

![Screenshot of a dropdown menu displaying the words 'View: England'](/images/preview-view.png)

We tested preview with content designers. They only wanted to see how the content flows and how the components look. They didn't need the sidebar, the navigation or anything else around it. So we removed everything that wasn't essential.

### Discard changes

The CMS doesn't let content designers undo changes, so we built this feature from scratch.

The button is in the CMS sidebar. It's greyed out when there's nothing to discard.

![Screenshot of a greyed-out button displaying the words 'Discard changes'](/images/discard-changes.png)

When a content designer makes changes, the button turns red.

![Screenshot of a red button displaying the words 'Discard changes'](/images/discard-changes-red.png)

When they select it, a pop-up explains what will happen if they continue.

![A screenshot of a pop-up informing the user they're about to discard changes](/images/discard-changes-modal.png)

If they continue, the version information updates automatically. It shows who discarded the changes and when. Other content designers can see why the version exists and ignore what changed in it.

![Screenshot of version information displaying information about who discarded changes and when](/images/discard-changes-version-information.png)

### Chrome extension

While we migrate from one CMS to another, content designers have to use 2 CMSs. I designed and built a Google Chrome extension to help them work in both. I wrote the code and the content. It lets content designers get from the live site to the CMS in a few clicks.

![Screenshot of a Chrome extension displaying different options to a user](/images/chrome-extension.png)

## The result

Content designers gave positive feedback on these features, and they speed up content authoring.