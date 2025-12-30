/**
 * 微专业展示网页主JavaScript文件 - 深蓝科技风格
 */

// 性能指标收集
const perfMetrics = {
  startTime: performance.now(),
  DOMLoaded: 0,
  pageFullyLoaded: 0
};

// 当DOM加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
  // 记录DOM加载时间
  perfMetrics.DOMLoaded = performance.now() - perfMetrics.startTime;
  console.log('DOM加载完成');

  // 确保数据已加载 - 将解构移到事件处理函数内部
  try {
    // 从window对象获取数据
    const { programData, qrCodeData, visualElements } = window;

    if (!programData) {
      console.error('错误：programData未加载，请检查data.js是否正确引入');
      displayErrorMessage('课程数据加载失败，请刷新页面重试。');
      return;
    }

    console.log('数据加载成功：', {
      hasProgramData: !!programData,
      hasQRCodeData: !!qrCodeData,
      hasVisualElements: !!visualElements
    });

    // 课程Emoji映射表
    const courseEmojis = {
      "数智人文方法与实践": "📊",
      "大语言模型与智能翻译技术": "🤖",
      "数智翻译与国际传播": "🌐",
      "数智语料库创建与应用": "📚",
      "数智视频创作与国际传播": "🎬"
    };

    // 核心能力Emoji映射表
    const competencyEmojis = {
      "语言转换能力": "🔤",
      "跨文化传播能力": "🌍",
      "智能技术应用能力": "💻",
      "数据分析与研究能力": "📈"
    };

    // 初始化页面数据
    initializePageData(programData, courseEmojis, competencyEmojis);

    // 初始化粒子背景（延迟加载）
    setTimeout(() => {
      initializeParticles();
    }, 300); // 减少延迟，更快加载粒子效果

    // 生成二维码
    if (typeof window.createProgramQRCode === 'function') {
      window.createProgramQRCode();
    }

    // 初始化响应式布局
    initializeResponsiveLayout();

    // 添加滚动动画效果
    initializeScrollAnimations();
  } catch (error) {
    console.error('初始化失败:', error);
    displayErrorMessage('页面加载失败，请刷新页面重试。');
  }

  // 注册页面完全加载的事件
  window.addEventListener('load', () => {
    perfMetrics.pageFullyLoaded = performance.now() - perfMetrics.startTime;
    console.log('性能指标:', perfMetrics);
  });
});

/**
 * 显示错误消息
 */
function displayErrorMessage(message) {
  // 创建一个错误消息元素
  const errorElement = document.createElement('div');
  errorElement.className = 'bg-red-900 border-l-4 border-red-500 text-red-100 p-4 mb-4 mt-4 mx-auto max-w-2xl'; // 调整为暗色模式下的错误消息样式
  errorElement.innerHTML = `
    <p class="font-bold">加载错误</p>
    <p>${message}</p>
  `;

  // 插入到页面顶部
  const firstSection = document.querySelector('section');
  if (firstSection && firstSection.parentNode) {
    firstSection.parentNode.insertBefore(errorElement, firstSection);
  } else {
    document.body.insertBefore(errorElement, document.body.firstChild);
  }
}

/**
 * 初始化页面数据
 */
function initializePageData(programData, courseEmojis, competencyEmojis) {
  console.log('初始化页面数据');

  if (!programData) {
    console.error('Program data not found');
    return;
  }

  // 填充特色列表
  const featuresListElement = document.getElementById('features-list');
  if (featuresListElement && programData.basicInfo && programData.basicInfo.features) {
    console.log('填充特色列表', programData.basicInfo.features.length);
    programData.basicInfo.features.forEach(feature => {
      const featureElement = document.createElement('div');
      featureElement.className = 'flex items-start space-x-3';
      featureElement.innerHTML = `
        <span class="text-tech-cyan text-xl">•</span>
        <p class="text-blue-200">${feature}</p>
      `;
      featuresListElement.appendChild(featureElement);
    });
  } else {
    console.warn('特色列表元素或数据缺失', {
      hasElement: !!featuresListElement,
      hasBasicInfo: !!(programData && programData.basicInfo),
      hasFeatures: !!(programData && programData.basicInfo && programData.basicInfo.features)
    });
  }

  // 填充核心能力
  const coreCompetenciesElement = document.getElementById('core-competencies');
  if (coreCompetenciesElement && programData.basicInfo && programData.basicInfo.coreCompetencies) {
    console.log('填充核心能力', programData.basicInfo.coreCompetencies.length);
    programData.basicInfo.coreCompetencies.forEach(competency => {
      const emoji = competencyEmojis[competency.title] || "💡";

      const competencyElement = document.createElement('div');
      competencyElement.className = `p-8 rounded-2xl shadow-tech apple-border`;
      competencyElement.innerHTML = `
        <h4 class="text-xl font-semibold mb-4 text-apple-white flex items-center tech-glow">
          <span class="text-2xl mr-3">${emoji}</span>
          ${competency.title}
        </h4>
        <p class="text-blue-200">${competency.description}</p>
      `;
      coreCompetenciesElement.appendChild(competencyElement);
    });
  } else {
    console.warn('核心能力元素或数据缺失', {
      hasElement: !!coreCompetenciesElement,
      hasBasicInfo: !!(programData && programData.basicInfo),
      hasCoreCompetencies: !!(programData && programData.basicInfo && programData.basicInfo.coreCompetencies)
    });
  }

  // 填充就业前景
  const careerElement = document.getElementById('career-prospect');
  if (careerElement && programData.basicInfo) {
    careerElement.textContent = programData.basicInfo.career;
    console.log('填充就业前景完成');
  } else {
    console.warn('就业前景元素或数据缺失');
  }

  // 填充修读对象与条件
  const targetElement = document.getElementById('enrollment-target');
  if (targetElement && programData.enrollmentInfo) {
    targetElement.textContent = programData.enrollmentInfo.target;
    console.log('填充修读对象完成');
  } else {
    console.warn('修读对象元素或数据缺失');
  }

  const conditionsElement = document.getElementById('enrollment-conditions');
  if (conditionsElement && programData.enrollmentInfo && programData.enrollmentInfo.conditions) {
    console.log('填充修读条件', programData.enrollmentInfo.conditions.length);
    programData.enrollmentInfo.conditions.forEach(condition => {
      const li = document.createElement('li');
      li.textContent = condition;
      li.className = 'text-blue-200'; // 设置为浅蓝色文本
      conditionsElement.appendChild(li);
    });
  } else {
    console.warn('修读条件元素或数据缺失');
  }

  const numberElement = document.getElementById('enrollment-number');
  if (numberElement && programData.enrollmentInfo) {
    numberElement.textContent = programData.enrollmentInfo.enrollmentNumber;
    console.log('填充招生人数完成');
  } else {
    console.warn('招生人数元素或数据缺失');
  }

  const certElement = document.getElementById('certification');
  if (certElement && programData.enrollmentInfo) {
    certElement.textContent = programData.enrollmentInfo.certification;
    console.log('填充证书授予完成');
  } else {
    console.warn('证书授予元素或数据缺失');
  }

  // 创建新版知识卡片形式的课程展示
  createGlassCourseCards(programData, courseEmojis);
}

/**
 * 创建磨砂玻璃效果的课程卡片
 */
function createGlassCourseCards(programData, courseEmojis) {
  console.log('创建课程卡片');

  const courseCardsElement = document.getElementById('course-cards');

  if (!courseCardsElement) {
    console.error('找不到课程卡片容器元素');
    return;
  }

  if (!programData || !programData.courses) {
    console.error('找不到课程数据');
    return;
  }

  console.log('创建课程卡片，数量:', programData.courses.length);

  // 清空现有内容
  courseCardsElement.innerHTML = '';

  // 为每个课程创建卡片
  programData.courses.forEach((course, index) => {
    const emoji = courseEmojis[course.name] || "📚";

    // 创建卡片容器元素
    const cardElement = document.createElement('div');
    cardElement.className = 'fade-in';
    cardElement.classList.add(`delay-${(index % 5 + 1) * 100}`); // 添加交错的动画延迟

    // 创建卡片内容
    cardElement.innerHTML = `
      <div class="glass-card">
        <div class="card-content">
          <div class="flex justify-between items-center mb-3">
            <span class="text-tech-cyan font-mono">${course.code}</span>
            <span class="bg-[rgba(0,99,255,0.2)] text-tech-cyan px-3 py-1 rounded-full text-sm font-medium">学期 ${course.semester}</span>
          </div>
          
          <h3 class="text-xl font-semibold mb-4 text-apple-white flex items-center tech-glow">
            <span class="text-2xl mr-2">${emoji}</span>
            ${course.name}
          </h3>
          
          <div class="flex flex-wrap items-center mb-4">
            <div class="course-tag">
              <span>${course.credits} 学分</span>
            </div>
            <div class="course-tag">
              <span>理论 ${course.hours.theory}h</span>
            </div>
            <div class="course-tag">
              <span>实践 ${course.hours.practice}h</span>
            </div>
          </div>
          
          <p class="text-blue-200 leading-relaxed text-sm course-description">
            ${course.description}
          </p>
        </div>
      </div>
    `;

    courseCardsElement.appendChild(cardElement);
  });

  console.log('课程卡片创建完成');
}

/**
 * 初始化滚动动画效果
 */
function initializeScrollAnimations() {
  console.log('初始化滚动动画');

  // 获取所有需要动画的元素
  const animatedElements = document.querySelectorAll('.fade-in');

  if (animatedElements.length === 0) {
    console.warn('没有找到需要动画的元素');
    return;
  }

  console.log('找到需要动画的元素:', animatedElements.length);

  // 创建IntersectionObserver实例
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 当元素进入视口时
      if (entry.isIntersecting) {
        // 添加可见类，触发动画
        entry.target.style.visibility = 'visible';
        // 停止观察该元素
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // 使用视口作为根元素
    threshold: 0.1, // 当10%的元素可见时触发
    rootMargin: '0px 0px -50px 0px' // 底部有50px的缓冲区
  });

  // 观察所有动画元素
  animatedElements.forEach(el => {
    el.style.visibility = 'hidden'; // 初始设置为隐藏
    observer.observe(el);
  });
}

/**
 * 初始化粒子背景
 */
function initializeParticles() {
  console.log('初始化粒子背景');

  // 检查是否有particles-js库和配置
  if (window.particlesJS) {
    try {
      // 使用外部配置文件中的配置
      if (typeof window.particlesConfig !== 'undefined') {
        window.particlesJS('particles-js', window.particlesConfig);
      } else {
        // 使用默认配置
        window.particlesJS('particles-js', {
          "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 1000 } },
            "color": { "value": ["#0062ff", "#00d0ff", "#00e5ff"] },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00d0ff", "opacity": 0.4, "width": 1.5 },
            "move": { "enable": true, "speed": 1.0 }
          }
        });
      }
      console.log('Particles.js initialized');
    } catch (error) {
      console.error('Error initializing particles.js:', error);
    }
  } else {
    console.warn('particles.js library not loaded');
  }
}

/**
 * 初始化响应式布局
 */
function initializeResponsiveLayout() {
  console.log('初始化响应式布局');

  const handleResize = () => {
    const isMobile = window.innerWidth < 768;

    // 在移动设备上应用特定的样式
    if (isMobile) {
      document.querySelectorAll('.flex-col-mobile').forEach(el => {
        el.style.flexDirection = 'column';
      });

      document.querySelectorAll('.text-center-mobile').forEach(el => {
        el.style.textAlign = 'center';
      });

      document.querySelectorAll('.mb-4-mobile').forEach(el => {
        el.style.marginBottom = '1rem';
      });
    } else {
      // 重置样式
      document.querySelectorAll('.flex-col-mobile').forEach(el => {
        el.style.flexDirection = '';
      });

      document.querySelectorAll('.text-center-mobile').forEach(el => {
        el.style.textAlign = '';
      });

      document.querySelectorAll('.mb-4-mobile').forEach(el => {
        el.style.marginBottom = '';
      });
    }
  };

  // 初始调用
  handleResize();

  // 监听窗口大小变化
  window.addEventListener('resize', handleResize);
}

// 检查断言，确保代码正常运行
// Syntax self-check
try {
  console.log("Syntax check passed");
}
catch (error) {
  console.error("Syntax error:", error.message);
}

// Function verification
console.assert(typeof initializePageData === 'function', 'initializePageData function exists');
console.assert(typeof createGlassCourseCards === 'function', 'createGlassCourseCards function exists');
console.assert(typeof initializeParticles === 'function', 'initializeParticles function exists');

// ================== 项目图片轮播 ==================
(function initializeProjectCarousel() {
  // 定义轮播内容，支持图片和视频
  const items = [
    // 新增的视频案例
    {
      type: 'video',
      src: 'videos/xu_xia_ke.mp4',
      title: '徐霞客 — 时空·事件·情感 行迹图'
    },
    // 原有的图片
    { type: 'image', src: 'images/微信图片_20250618015618.png' },
    { type: 'image', src: 'images/微信图片_20250618015601.png' },
    { type: 'image', src: 'images/微信图片_20250618015552.png' },
    { type: 'image', src: 'images/微信图片_20250618015544.png' },
    { type: 'image', src: 'images/微信图片_20250618015539.png' },
    { type: 'image', src: 'images/微信图片_20250618015533.png' },
    { type: 'image', src: 'images/微信图片_20250618015523.png' },
    { type: 'image', src: 'images/微信图片_20250618015516.png' },
    { type: 'image', src: 'images/微信图片_20250618015508.png' },
    { type: 'image', src: 'images/微信图片_20250618015503.png' },
    { type: 'image', src: 'images/微信图片_20250618015455.png' },
    { type: 'image', src: 'images/微信图片_20250618015451.png' },
    { type: 'image', src: 'images/微信图片_20250618015439.png' },
    { type: 'image', src: 'images/微信图片_20250618015431.png' },
    { type: 'image', src: 'images/微信图片_20250618015414.png' },
    { type: 'image', src: 'images/微信图片_20250618015407.png' },
    { type: 'image', src: 'images/微信图片_20250618015402.png' },
    { type: 'image', src: 'images/微信图片_20250618015353.png' },
    { type: 'image', src: 'images/微信图片_20250618015343.png' },
    { type: 'image', src: 'images/微信图片_20250618015329.png' },
    { type: 'image', src: 'images/微信图片_20250618015254.png' },
  ];

  let current = 0;
  let timer = null;

  function showItem(idx) {
    const imgElement = document.getElementById('carousel-image');
    const videoElement = document.getElementById('carousel-video');

    if (!imgElement || !videoElement) return;

    const item = items[idx];

    // 暂停视频（如果之前在播放）
    videoElement.pause();

    if (item.type === 'video') {
      // 显示视频，隐藏图片
      imgElement.classList.add('hidden');
      videoElement.classList.remove('hidden');

      // 更新视频源（仅当源改变时，避免闪烁）
      // 注意：直接修改src可能导致闪烁，这里简化处理
      if (!videoElement.src.endsWith(item.src)) {
        videoElement.src = item.src;
      }
    } else {
      // 显示图片，隐藏视频
      videoElement.classList.add('hidden');
      imgElement.classList.remove('hidden');

      imgElement.src = item.src;
      imgElement.alt = item.title || "项目图片";
    }

    updateIndicators(idx);
  }

  function updateIndicators(idx) {
    const indicators = document.getElementById('carousel-indicators');
    if (!indicators) return;
    indicators.innerHTML = '';

    // 只显示前5个和当前相关的点，或者是全部点？由于图片很多，显示全部点可能会挤
    // 这里保持原有逻辑显示所有点，但样式上可能需要优化如果点太多
    // 为避免过多点，这里可以限制显示数量，或者简单地全部显示但缩小尺寸

    items.forEach((_, i) => {
      const dot = document.createElement('span');
      // 指示器样式
      dot.className = 'w-3 h-3 rounded-full cursor-pointer transition-all ' + (i === idx ? 'bg-tech-cyan shadow-tech' : 'bg-apple-gray opacity-60');
      dot.onclick = () => {
        current = i;
        showItem(current);
        resetTimer();
      };
      indicators.appendChild(dot);
    });
  }

  function prev() {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
    resetTimer();
  }

  function next() {
    current = (current + 1) % items.length;
    showItem(current);
    resetTimer();
  }

  function resetTimer() {
    if (timer) clearInterval(timer);

    // 如果当前是视频且正在播放，则不启动自动轮播
    const videoElement = document.getElementById('carousel-video');
    if (items[current].type === 'video' && videoElement && !videoElement.paused) {
      return;
    }

    timer = setInterval(next, 4000);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('project-carousel')) return;

    document.getElementById('carousel-prev').onclick = prev;
    document.getElementById('carousel-next').onclick = next;

    const videoElement = document.getElementById('carousel-video');
    if (videoElement) {
      // 视频播放时停止轮播，暂停或结束时恢复
      videoElement.addEventListener('play', () => {
        if (timer) clearInterval(timer);
      });
      videoElement.addEventListener('pause', resetTimer);
      videoElement.addEventListener('ended', next); // 视频结束后自动下一页
    }

    showItem(current);
    resetTimer();
  });
})();
// ================== 轮播结束 ==================