---
layout: single
permalink: /photography/
title: "Photography"
author_profile: true
---

{% comment %}
  Fully automatic photo gallery: photos are discovered directly from
  the filesystem, no front matter editing needed.

  To add photos: drop image files into a subfolder of
  /images/photography/, e.g.:

    images/photography/San Diego/sunset.jpg
    images/photography/Pets/cat-nap.jpg

  - The subfolder name becomes the group heading shown on the page.
  - The filename (minus extension, underscores/dashes turned into
    spaces) becomes the caption shown under the photo.
  - Photos placed directly in /images/photography/ (no subfolder)
    are shown under a generic "Photos" heading.
  - Groups are listed alphabetically by folder name. To control the
    order, prefix folder names with a number, e.g. "1 San Diego".
  - Supported file types: .jpg, .jpeg, .png, .gif, .webp (any case).
{% endcomment %}

{% include base_path %}

{% assign photo_root = "/images/photography/" %}
{% assign photo_files = site.static_files | where_exp: "f", "f.path contains photo_root" %}
{% assign photo_files = photo_files | where_exp: "f", "f.extname | downcase == '.jpg' or f.extname | downcase == '.jpeg' or f.extname | downcase == '.png' or f.extname | downcase == '.gif' or f.extname | downcase == '.webp'" %}
{% assign photo_files = photo_files | sort: "path" %}

{% assign written_group = nil %}
{% for file in photo_files %}
  {% assign rel_path = file.path | remove_first: photo_root %}
  {% assign path_parts = rel_path | split: "/" %}
  {% if path_parts.size > 1 %}
    {% assign this_group = path_parts[0] %}
  {% else %}
    {% assign this_group = "Photos" %}
  {% endif %}

  {% if this_group != written_group %}
    {% unless forloop.first %}</div>{% endunless %}
    <h2 class="photo-gallery__group-title">{{ this_group }}</h2>
    <div class="photo-gallery">
    {% assign written_group = this_group %}
  {% endif %}

  {% assign caption = file.basename | replace: '_', ' ' | replace: '-', ' ' %}
  <figure class="photo-gallery__item">
    <a href="{{ base_path }}{{ file.path }}" target="_blank" rel="noopener">
      <img src="{{ base_path }}{{ file.path }}" alt="{{ caption }}">
    </a>
    <figcaption>{{ caption }}</figcaption>
  </figure>
{% endfor %}
{% unless photo_files.size == 0 %}</div>{% endunless %}

{% if photo_files.size == 0 %}
<p>Photos coming soon!</p>
{% endif %}

<style>
  .photo-gallery__group-title {
    margin: 1.5em 0 0.75em;
  }
  .photo-gallery {
    column-count: 3;
    column-gap: 1.5em;
    margin: 0 0 1.5em;
  }
  @media (max-width: 900px) {
    .photo-gallery { column-count: 2; }
  }
  @media (max-width: 600px) {
    .photo-gallery { column-count: 1; }
  }
  .photo-gallery__item {
    margin: 0 0 1.5em;
    break-inside: avoid;
  }
  .photo-gallery__item a {
    display: block;
  }
  .photo-gallery__item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
  }
  .photo-gallery__item figcaption {
    margin-top: 0.5em;
    font-size: 0.85em;
    text-align: center;
    color: var(--global-fig-caption-color, #767676);
  }
</style>
