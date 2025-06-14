# 微专业展示网页模块设计

## 模块结构

1. **网页主体模块**
   - index.html - 主页面
   - styles/main.css - 自定义样式
   - js/main.js - 主要交互逻辑

2. **数据模块**
   - js/data.js - 包含微专业和课程数据

3. **动效模块**
   - js/particles.min.js - 粒子效果库
   - js/particles-config.js - 粒子效果配置

4. **二维码模块**
   - js/qrcode.min.js - 二维码生成库
   - js/qrcode.js - 自定义二维码生成函数

## 数据结构

```typescript
// 微专业数据结构
interface ProgramData {
  title: string;
  basicInfo: {
    goal: string;
    features: string[];
    coreCompetencies: {
      title: string;
      description: string;
    }[];
    career: string;
  };
  enrollmentInfo: {
    target: string;
    conditions: string[];
    enrollmentNumber: string;
    certification: string;
  };
  courses: Course[];
}

// 课程数据结构
interface Course {
  id: number;
  code: string;
  name: string;
  credits: number;
  hours: {
    theory: number;
    practice: number;
  };
  semester: number;
  description: string;
}
```

## 接口设计

1. **卡片翻转功能**
   ```typescript
   /**
    * 初始化卡片翻转事件监听器
    */
   function initializeCardFlip(): void;
   
   /**
    * 翻转指定卡片
    * @param cardElement 要翻转的卡片DOM元素
    */
   function flipCard(cardElement: HTMLElement): void;
   ```

2. **粒子背景功能**
   ```typescript
   /**
    * 初始化粒子背景
    * @param containerId 粒子容器的ID
    */
   function initializeParticles(containerId: string): void;
   ```

3. **二维码生成功能**
   ```typescript
   /**
    * 生成二维码
    * @param text 二维码内容
    * @param elementId 容器元素ID
    */
   function generateQRCode(text: string, elementId: string): void;
   
   /**
    * 创建微专业招生咨询二维码
    */
   function createProgramQRCode(): void;
   ```

4. **响应式布局功能**
   ```typescript
   /**
    * 初始化响应式布局监听器
    */
   function initializeResponsiveLayout(): void;
   
   /**
    * 根据窗口大小调整UI
    */
   function adjustLayout(): void;
   ```