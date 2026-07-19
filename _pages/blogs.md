---
layout: archive
permalink: /blogs/
title: "Blogs"
author_profile: true
redirect_from:
  - /notes/
---

{%- include base_path -%}
{%- assign written_year = nil -%}
{%- for post in site.posts -%}
{%- assign year = post.date | date: '%Y' -%}
{%- if year != written_year -%}
<h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
{%- assign written_year = year -%}
{%- endif -%}
{% include archive-single.html %}
{%- endfor -%}
