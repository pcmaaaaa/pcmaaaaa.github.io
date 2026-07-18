(function () {
  function renderPdfPages(containerId, url) {
    var container = document.getElementById(containerId);
    if (!container || typeof pdfjsLib === 'undefined') {
      return;
    }

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    container.innerHTML = '';

    pdfjsLib.getDocument(url).promise.then(function (pdf) {
      function renderPage(pageNum) {
        pdf.getPage(pageNum).then(function (page) {
          var containerWidth = container.clientWidth || (container.parentElement && container.parentElement.clientWidth) || 800;
          var unscaledViewport = page.getViewport({ scale: 1 });
          var scale = containerWidth / unscaledViewport.width;
          var viewport = page.getViewport({ scale: scale });

          var canvas = document.createElement('canvas');
          canvas.className = 'pdf-page-canvas';
          canvas.style.display = 'block';
          canvas.style.margin = '0 auto 16px auto';
          canvas.style.maxWidth = '100%';
          canvas.style.height = 'auto';
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          container.appendChild(canvas);

          page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport });

          if (pageNum < pdf.numPages) {
            renderPage(pageNum + 1);
          }
        });
      }
      renderPage(1);
    }).catch(function (err) {
      container.innerHTML =
        '<p>Unable to load the CV preview. <a href="' + url + '">Download the PDF</a> instead.</p>';
      if (window.console) {
        console.error('PDF.js failed to load ' + url, err);
      }
    });
  }

  window.renderPdfPages = renderPdfPages;
})();
