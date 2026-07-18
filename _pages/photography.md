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
---

{% comment %}
  To add photos: drop image files into /images/photography/ and add
  entries to the "gallery" list in this page's front matter, e.g.:

  gallery:
    - image_path: photography/example.jpg
      url: photography/example.jpg
      alt: "Short description of the photo"
      title: "Optional caption shown under the thumbnail"

  Note: "url" and "image_path" are both relative to /images/ (the
  gallery include prepends "/images/" automatically) - don't include
  a leading "/images/" in either field or the link will 404.

  "url" is optional (links the thumbnail to a larger version or the
  same image); "title"/"alt" are optional captions.
{% endcomment %}

{% include base_path %}

{% include gallery %}

{% if page.gallery.size == 0 %}
<p>Photos coming soon!</p>
{% endif %}
