// 二维码生成函数 - 深蓝科技风格
function generateQRCode(text, elementId) {
  const container = document.getElementById(elementId);
  if (!container) {
    console.error('QR code container not found:', elementId);
    return;
  }
  
  // 清空容器内容
  container.innerHTML = '';

  try {
    // 添加占位图备用
    const placeholderImg = document.createElement('img');
    placeholderImg.src = 'images/qr-code-placeholder.png';
    placeholderImg.alt = '二维码';
    placeholderImg.className = 'qr-placeholder';
    placeholderImg.style.display = 'none'; // 默认隐藏占位图
    placeholderImg.width = 128;
    placeholderImg.height = 128;
    container.appendChild(placeholderImg);
    
    // 使用QRCode.js库生成二维码
    if (typeof window.QRCode === 'undefined') {
      console.warn('QRCode library not loaded, showing placeholder instead');
      placeholderImg.style.display = 'block';
      return;
    }

    // eslint-disable-next-line no-new
    new window.QRCode(container, {
      text: text,
      width: 128,
      height: 128,
      colorDark: "#00e5ff",  // 亮青色
      colorLight: "#ffffff",
      correctLevel: window.QRCode.CorrectLevel.H
    });
    
    // 监听二维码生成过程
    const checkQrGenerated = setInterval(() => {
      const qrImg = container.querySelector('img:not(.qr-placeholder)');
      if (qrImg) {
        clearInterval(checkQrGenerated);
        // 为生成的二维码添加样式
        qrImg.style.borderRadius = '8px';
        qrImg.style.boxShadow = '0 0 15px rgba(0, 229, 255, 0.3)'; // 添加青色发光效果
        qrImg.style.border = '1px solid rgba(0, 99, 255, 0.3)'; // 添加蓝色边框
        qrImg.onerror = function() {
          placeholderImg.style.display = 'block';
          qrImg.style.display = 'none';
        };
      }
    }, 100);
    
    // 5秒后如果二维码还没生成，显示占位图
    setTimeout(() => {
      clearInterval(checkQrGenerated);
      const qrImg = container.querySelector('img:not(.qr-placeholder)');
      if (!qrImg || qrImg.complete === false) {
        placeholderImg.style.display = 'block';
      }
    }, 5000);
  } catch (error) {
    console.error('Error generating QR code:', error);
    const placeholderImg = container.querySelector('.qr-placeholder');
    if (placeholderImg) {
      placeholderImg.style.display = 'block';
    }
  }
}

// 这个函数将用于生成微专业的招生咨询二维码
function createProgramQRCode() {
  console.log('创建微专业二维码');
  const qrText = "https://example.com/digital-humanities-program";
  generateQRCode(qrText, "qrcode");
}

// 将函数暴露给window对象
window.generateQRCode = generateQRCode;
window.createProgramQRCode = createProgramQRCode;