function extractText() {
    const paragraphs = document.querySelectorAll('.mw-parser-output p');
    let text = '';
    for (let i = 0; i < paragraphs.length; i++) {
      text += paragraphs[i].textContent + '\n\n';
    }
    return text;
  }
  
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'extractText') {
      const text = extractText();
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:5000/api/words');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
        console.log(xhr.responseText);
      };
      xhr.send(JSON.stringify({ text }));
    }
  });
  