---
layout: single
permalink: /photography/
title: "Photography"
author_profile: true
gallery: [/images/photography/Salk.jpg]
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
