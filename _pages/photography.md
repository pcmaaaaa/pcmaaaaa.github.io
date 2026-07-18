---
layout: single
permalink: /photography/
title: "Photography"
author_profile: true
gallery: 
- image_path: photography/Salk.jpg
  url: /images/photography/Salk.jpg
  alt: "Salk Institute ocean view"
  title: "Salk Institute"

- image_path: photography/Seaside.jpg
  url: /images/photography/Seaside.jpg
  alt: "La Jolla Cove"
  title: "La Jolla Cove"
---

{% comment %}
  To add photos: drop image files into /images/photography/ and add
  entries to the "gallery" list in this page's front matter, e.g.:

  gallery:
    - url: /images/photography/example.jpg
      image_path: photography/example.jpg
      alt: "Short description of the photo"
      title: "Optional caption shown under the thumbnail"

  "url" is optional (links the thumbnail to a larger version or the
  same image); "title"/"alt" are optional captions.
{% endcomment %}

{% include base_path %}

{% include gallery %}

{% if page.gallery.size == 0 %}
<p>Photos coming soon!</p>
{% endif %}
