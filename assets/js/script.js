function downloadImage() {
    // Get the current text overlay
    var currentText = document.getElementById('overlayText').innerHTML;

    // Create an image object to load the original image source
    var img = new Image();
    img.onload = function() {
      // Create a canvas element and draw the image with the current text overlay
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      ctx.font = 'bold 36px sans-serif';
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'black';
      ctx.shadowBlur = 10;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(currentText, img.width/2, img.height/2);

      // Convert the canvas contents to a data URL with a MIME type of "image/jpeg"
      var dataURL = canvas.toDataURL('image/jpeg');

      // Create a link element to download the modified image
      var link = document.createElement('a');
      link.download = 'your-image-with-text.jpg';
      link.href = dataURL;
      link.style.display = 'none';

      // Add the link to the document and simulate a click on it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    img.src = document.getElementById('image').src;
  }

  function updateText(event) {
    event.preventDefault();
    var inputText = document.getElementById('textInput').value;
    document.getElementById('overlayText').innerHTML = inputText;
  }