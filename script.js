
    document.addEventListener('DOMContentLoaded', () => {
      const textInput = document.getElementById('text-input');
      const generateBtn = document.getElementById('generate-btn');
      const qrResult = document.getElementById('qr-result');
      const qrcodeDiv = document.getElementById('qrcode');
      const downloadBtn = document.getElementById('download-btn');
      const clearBtn = document.getElementById('clear-btn');

      let qrCode = null;

      generateBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (!text) {
          alert('Please enter some text or URL');
          return;
        }

        // Clear previous QR code
        qrcodeDiv.innerHTML = '';

        // Generate new QR code
        qrCode = new QRCode(qrcodeDiv, {
          text: text,
          width: 200,
          height: 200,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });

        qrResult.classList.remove('hidden');
      });

      downloadBtn.addEventListener('click', () => {
        const canvas = qrcodeDiv.querySelector('canvas');
        if (!canvas) return;

        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });

      clearBtn.addEventListener('click', () => {
        textInput.value = '';
        qrcodeDiv.innerHTML = '';
        qrResult.classList.add('hidden');
        qrCode = null;
      });
    });
  