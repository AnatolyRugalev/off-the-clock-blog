---
title: Blog Pipeline v0.1
date: "2022-08-07T00:00:00Z"
status: published
description: |
    A quick update on my bare-bones blog publishing pipeline
---

This blog was created by a coincidence. That's right, it was me thinking about the right thing in the right moment. It's all started from the discovery of [Obsidian](https://obsidian.md/) software when I was updating myself browsing through YouTube. I settled on the Notion a year ago, however, it has always felt too far from my fingers when I needed it the most. I'm so tired of running stuff in the browser, and from smartphone apps that use web-based UIs.

Anyway, I just wanted to quickly post an update on my progress on blog publishing pipeline. It's done! It's bare minimum, but apparently this is just enough to make me write again. My Obsidian vault is hosted in a private git repo, and all my posts, including drafts, are stored there. Each post is a Markdown file with YAML metadata in it (TIL: front-matter format). Once I switch the status of the post to "published" and push it to the vault, GitHub Actions workflow repackages them into the [blog repo](https://github.com/AnatolyRugalev/off-the-clock-blog), and then it triggers the Gatsby build.

This might sound a bit overengineered for two posts I have at this moment, however I see clear benefits in reduced friction and flexibility. I'm not the best writer, of course, but I can only improve through consistency, and the easy way of writing with no obligations is what I need.

Sincerely,  
Toly