---
layout: page
permalink: /articles/
title: articles
description: Peer-reviewed journal articles.
nav: false
---

<!--
  This page will auto-render from _bibliography/papers.bib, filtered to
  entries tagged pub_type={article}.

  In papers.bib, add `pub_type = {article}` to each peer-reviewed article
  entry. The Jekyll-Scholar filter below pulls them out.

  If you want a simpler approach, delete the {% bibliography %} block
  and just list publications as markdown links — matches your current
  site style more directly.
-->

{% bibliography --query @*[pub_type=article] %}
