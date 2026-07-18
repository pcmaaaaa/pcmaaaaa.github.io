---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div style="text-align: center; margin-bottom: 1em;">
  <p style="font-size: 0.9em; color: #767676;">Last updated: June 25, 2026</p>
</div>

<div id="cv-pdf-pages" style="width: 100%; max-width: 900px; margin: 0 auto;">
  <p>Loading CV preview&hellip;</p>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="{{ base_path }}/assets/js/pdf-viewer.js"></script>
<script>
  window.addEventListener('load', function () {
    renderPdfPages('cv-pdf-pages', '{{ base_path }}/files/cv.pdf');
  });
</script>
