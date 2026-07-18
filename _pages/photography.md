---
layout: single
permalink: /photography/
title: "Photography"
author_profile: true
gallery:
- image_path: photography/Salk.jpg
  url: photography/Salk.jpg
  alt: "Salk Institute ocean view"
  title: "Salk Institute"

- image_path: photography/Seaside.jpg
  url: photography/Seaside.jpg
  alt: "La Jolla Cove"
  title: "La Jolla Cove"

- image_path: photography/Arch.jpg
  url: photography/Arch.jpg
  alt: "The Arch from St. Louis"
  title: "The Arch"

- image_path: photography/Saki.jpg
  url: photography/Saki.jpg
  alt: ""
  title: "Saki the cat"
---

{% comment %}
  To add photos: drop image files into /images/photography/ and add
  entries to the "gallery" list in this page's front matter, e.g.:

  gallery:
    - image_path: photography/example.jpg
      url: photography/example.jpg
      alt: "Short description of the photo"
      title: "Caption shown under the photo"

  Note: "url" and "image_path" are both relative to /images/ (this
  page's grid prepends "/images/" automatically) - don't include a
  leading "/images/" in either field or the link will 404.

  "title" is displayed as a visible caption under each photo; "alt"
  is accessibility-only text and isn't shown visibly.
{% endcomment %}

{% include base_path %}

<div class="photo-gallery">
  {% for img in page.gallery %}
    <figure class="photo-gallery__item">
      <a href="{{ img.url | prepend: '/images/' | prepend: base_path }}" target="_blank" rel="noopener">
        <img src="{{ img.image_path | prepend: '/images/' | prepend: base_path }}" alt="{{ img.alt }}">
      </a>
      {% if img.title %}<figcaption>{{ img.title }}</figcaption>{% endif %}
    </figure>
  {% endfor %}
</div>

{% if page.gallery.size == 0 %}
<p>Photos coming soon!</p>
{% endif %}

<style>
  .photo-gallery {
    column-count: 3;
    column-gap: 1.5em;
    margin: 1.5em 0;
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
