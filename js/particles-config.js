/**
 * 粒子背景配置 - 深蓝科技风格
 */
window.particlesConfig = {
  "particles": {
    "number": {
      "value": 100, // 增加粒子数量
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#0062ff", "#00d0ff", "#00e5ff", "#4fc3f7", "#03a9f4"] // 蓝色到青色渐变系列
    },
    "shape": {
      "type": ["circle", "edge"],
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.6, // 增加不透明度
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.2,
        "sync": false
      }
    },
    "size": {
      "value": 3, // 增加粒子大小
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 170, // 增加连接距离
      "color": "#00d0ff", // 亮青蓝色线条
      "opacity": 0.6, // 增加线条不透明度
      "width": 1.4, // 增加线条粗细
      "shadow": {
        "enable": true, // 启用线条阴影
        "color": "#00e5ff", // 线条阴影颜色
        "blur": 5 // 阴影模糊程度
      }
    },
    "move": {
      "enable": true,
      "speed": 1.0, 
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true, 
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // 悬停时连线
      },
      "onclick": {
        "enable": true,
        "mode": "push" // 点击添加粒子
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200, // 增加连接距离
        "line_linked": {
          "opacity": 0.9 // 增加悬停时连线不透明度
        }
      },
      "bubble": {
        "distance": 200,
        "size": 6,
        "duration": 0.4,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 150,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 5 // 每次点击添加更多粒子
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};