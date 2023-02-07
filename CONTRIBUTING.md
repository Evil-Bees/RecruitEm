<!-- omit in toc -->
# Contributing to RecruitEm

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> If you like the project, but don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
> - Star the project
> - [Fork it](#forking)
> - Tweet about it
> - Refer to this project in your project's README
> - Share on your socials ([Facebook](https://www.facebook.com/profile.php?id=100088394168553), [Instagram](https://www.instagram.com/evilbeesdev/), [TikTok](https://www.tiktok.com/@evilbeesdev), [YouTube](https://www.youtube.com/@evilbees))
> - Mention the project at local meetups and tell your friends/colleagues

<!-- omit in toc -->
## Table of Contents

- [Naming Conventions](#naming-conventions)
  - [Contents of the Commit](#contents-of-the-commit)
  - [Commit Messages](#commit-messages)
  - [Tips:](#tips)
  - [Troubleshooting commits](#troubleshooting-commits)
- [Code of Conduct](#code-of-conduct)
  - [Contributions](#contributions)
- [Attribution](#attribution)

<!--
You might want to create a separate issue tag for questions and include it in this description. People should then tag their issues accordingly.

Depending on how large the project is, you may want to outsource the questioning, e.g. to Stack Overflow or Gitter. You may add additional contact and information possibilities:
- IRC
- Slack
- Gitter
- Stack Overflow tag
- Blog
- FAQ
- Roadmap
- E-Mail List
- Forum
-->

<!-- omit in toc -->
## Style Guide
- This project uses [Tailwind](https://tailwindcss.com/) on the front end. Please avoid using inline and scss styles unless absolutely necessary. 
- For existing components, just add Tailwind classes. If you're creating new ones, you can take advantage of [Tailwind's components](https://tailwindui.com/components). Keep in mind that Tailwind components tend do be quite layered, and use excessive classes, so it's up to you clean up the unnecessary elements and classes.
- For additional customization, you can [configure the tailwind.config.js file](https://tailwindcss.com/docs/configuration). When extending styles, use naming conventions similar to Tailwind classes, or make the name self-explanatory. For example, `darkest-gray` or `cta-button-gray`.
- Take note of standardized max-width, padding, etc. Most of the time, each wrapping element will have a collection of classes, to ensure each page and component flows together. They will look something like `max-w-7xl px-6 md:px-12` for example. Try to ensure that the styles on the component or page you're creating matches with the rest.

## Naming Conventions

- When declaring and naming variables, try to use the most up-to-date conventions and practices. Use your best judgement, just make sure that what you're doing will be understandable to future contributors. A few things to keep in mind:
 - Use Pascal Case when naming React or NextJS components, for example `AppContainer`, `LoginComponent`, etc.
 - Use Cammel Case when naming variables and props, for example `buttonText` or `loginInfo`.
 - Use `let` and `const` instead of `var`.
 - Don't use general names (or letters) like `x1`, or `button`. These aren't descriptive, and future contributors may find them confusing. Instead, allow them to explain the purpose of the component or function, such as `signUpTitle`, `ctaButton`, etc.

<!-- omit in toc -->
## Good Commit Practices
### Contents of the Commit
- A commit should include everything necessary for your improvement to work. However, keep in mind to separate the changes as needed. For example, if you're adding a component with a custom Tailwind class, first add the update to the Tailwind configuration file in one commit, then the updated class name in the following one. Also feel free to update the Changelog when adding bigger changes.

### Commit Messages
- Make sure the commit message efficiently communicates the changes you are making. This way, we'll be able to have a clear overview, and speed up the approval process for pull requests.

### Tips: 
- Use imperative mood in the subject line. Example:  `Add fix for Log In component`.
- Try to make the commit searchable by adding the name of the component or function.
- Be direct and don't use filler words such as like, maybe, think, etc.
- Specify the type of commit by using: `Fix`, `Update`, `Refactor`, `Add`, etc.

### Troubleshooting commits
- If breaking changes appear as if out of nowhere, try using [Git Bisect](https://git-scm.com/docs/git-bisect) to locate the faulty commit, and make the changes or revert the commit as needed.

<!-- omit in toc -->
## Making an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation](https://github.com/Evil-Bees/RecruitEm/wiki) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](https://github.com/Evil-Bees/RecruitEm/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

<!-- omit in toc -->
## Reporting Bugs

A good bug report shouldn't require any follow-up questions. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the [documentation](https://github.com/Evil-Bees/RecruitEm/wiki).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](https://github.com/Evil-Bees/RecruitEmissues?q=label%3Abug).
- Also make sure to search the internet (including Stack Overflow) to see if users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
  - Stack trace (Traceback)
  - OS, Platform and Version (Windows, Linux, macOS, x86, ARM)
  - Version of the interpreter, compiler, SDK, runtime environment, package manager, depending on what seems relevant.
  - Possibly your input and the output
  - Can you reliably reproduce the issue? And can you also reproduce it with older versions?

<!-- omit in toc -->
## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](https://github.com/Evil-Bees/RecruitEm/wiki) and searched the [Issues page](https://github.com/Evil-Bees/RecruitEm/issues) first.

- If you take up an issue but need further clarification, add your question to the thread.

- If you can't find a similar issue, or need further clarification, we recommend the following:

- Open an [Issue](https://github.com/Evil-Bees/RecruitEm/issues/new).
- Provide as much context as you can about the issue you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

<!-- omit in toc -->
## Forking

- Feel free to fork the project if you just want to play around with it. Should you want to add any additional enhancements, take up an issue or send a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the
[RecruitEm Code of Conduct](https://github.com/Evil-Bees/RecruitEmblob/master/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior
to <nikolap994@gmail.com> or <cehicmarija@gmail.com>.

> ### Legal Notice <!-- omit in toc -->
> By contributing to this project, you agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Contributions

- If you find there's anything missing here or have any additional notes about contributing, please feel free to create a pull request.

## Attribution
This guide is based on the **contributing-gen**. [Make your own](https://github.com/bttger/contributing-gen)!
