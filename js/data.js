const programData = {
  title: "数智人文与翻译传播微专业",
  
  basicInfo: {
    goal: "立足于数字时代语言服务与国际传播领域的深度融合，聚焦翻译行业智能化升级与跨文化传播需求，融合语言文学、人工智能、数据科学与跨文化传播等多学科资源，是一个面向未来的创新型交叉学科项目。",
    features: [
      "紧扣\"一带一路\"倡议与中华文化国际传播战略",
      "强调\"人工智能+跨文化素养+翻译技术\"的能力结构",
      "联合多家行业领先企业，推行\"项目进课堂\"机制",
      "构建贯穿\"教—研—用\"的全流程人才培养体系",
      "教师团队由校内外语言、国际传播、数智人文、翻译技术等多领域专家组成",
      "自主开发\"数字人文智能分析平台\"与\"AIGC多面手智能应用平台\""
    ],
    coreCompetencies: [
      {
        title: "语言转换能力",
        description: "扎实掌握中英文双语表达与翻译技巧，具备高质量语言转换与重构能力"
      },
      {
        title: "跨文化传播能力",
        description: "理解不同文化语境下的传播逻辑，具备数字环境中的文化适应与内容本地化能力"
      },
      {
        title: "智能技术应用能力",
        description: "熟练使用AIGC工具、语言大模型、计算机辅助翻译工具及\"数智人文\"系列智能平台，实现高效内容生成与智能传播"
      },
      {
        title: "数据分析与研究能力",
        description: "掌握语料库建设、文本挖掘与翻译质量评估方法，能独立完成数据驱动的语言与传播研究"
      }
    ],
    career: "在文化传播、数字媒体、跨境电商等产业，对具备\"语言能力 + 人文素养 + 数智技能\"的复合型人才需求持续攀升，就业前景广阔，发展潜力巨大。"
  },
  
  enrollmentInfo: {
    target: "面向具有跨学科发展潜力与\"语言+技术\"学习兴趣的优秀本科生开放",
    conditions: [
      "凡取得本校正式学籍的全日制在校二、三年级外国语言文学类专业（翻译专业、英语、商务英语，兼顾其他语种），兼收新闻传播学类、中国语言文学类、计算机科学与技术、艺术设计等相关专业学生",
      "主修专业的已修课程平均学分绩点要求在2.0及以上",
      "对\"语言+技术\"方向具有浓厚兴趣和一定基础，有跨学科学习意愿与潜力",
      "遵纪守法，品行端正，无违纪记录"
    ],
    enrollmentNumber: "30人（开课在稽山校区）",
    certification: "在取得主修专业毕业证书、学位证书的前提下，修满微专业课程要求的所有学分，可获得微专业证书"
  },
  
  courses: [
    {
      id: 1,
      code: "W01001",
      name: "数智人文方法与实践",
      credits: 2,
      hours: {
        theory: 17,
        practice: 17
      },
      semester: 1,
      description: "引导学生掌握以数据驱动的人文研究方法，构建\"语言+技术+文化\"的融合认知框架。课程以\"远读—中读—近读\"三重阅读模式为核心，结合实际项目训练与语言数据分析任务，帮助学生建立跨学科研究能力。涵盖数字人文的基础理论与方法，重点讲授文本挖掘、语料库技术、语言大模型应用等关键技能。通过真实文本数据案例的分析与网页展示项目训练，学生将掌握文本结构化、语义建模与跨模态表达等核心技能。"
    },
    {
      id: 2,
      code: "W01002",
      name: "智能翻译技术与应用",
      credits: 2,
      hours: {
        theory: 17,
        practice: 17
      },
      semester: 1,
      description: "聚焦人工智能在翻译行业中的核心技术与平台应用。系统讲解人工智能辅助翻译（AI-assisted Translation, AIT）的工作原理与操作方法，涵盖神经机器翻译（NMT）、计算机辅助翻译（CAT）等关键环节。重点介绍并训练学生掌握多种主流翻译平台的使用方法，特别强化APE（Automatic Post-editing）与AIPE（AI-Powered Post-editing）的智能译后编辑技术。课程前瞻性引入\"翻译智能体（Translation Agent）\"的概念与原型设计，探讨集成大语言模型的未来翻译系统发展方向。"
    },
    {
      id: 3,
      code: "W01003",
      name: "数智翻译与国际传播",
      credits: 2,
      hours: {
        theory: 17,
        practice: 17
      },
      semester: 1,
      description: "系统构建学生在数字时代背景下的国际传播认知框架与叙事能力，实现\"翻译+传播+技术\"三位一体的能力跃升。系统介绍国际传播的演化逻辑、全球话语权结构、跨文化适配机制与国家叙事战略，突出\"国家翻译能力\"及其引领下的\"民间外交话语体系\"建设。深入引入\"翻译叙事（Translation as Narrative）\"视角，帮助学生理解翻译在国际传播中的深层功能。实践部分以多语种传播项目为核心，结合真实案例，开展翻译策略分析与传播效果评估。"
    },
    {
      id: 4,
      code: "W01004",
      name: "数智语料库创建与应用",
      credits: 2,
      hours: {
        theory: 17,
        practice: 17
      },
      semester: 2,
      description: "培养学生系统掌握语料库构建流程、语言数据分析技能以及人工智能技术在语料处理中的应用能力。介绍语料库语言学的基础理论，学习如何从实际文本中采集语料，掌握语料的清洗、格式转换、标注与结构化组织方法。课程涵盖多个主流语料库平台使用，帮助学生熟练掌握关键词提取、词频分析、搭配挖掘等核心分析技术。特别设置\"AI赋能语料库\"模块，结合语言大模型的能力，训练学生在语料处理关键环节中嵌入LLM驱动的自动化策略，实现智能语料生态的跃升。"
    },
    {
      id: 5,
      code: "W01005",
      name: "数智译后编辑与质量评估",
      credits: 2,
      hours: {
        theory: 17,
        practice: 17
      },
      semester: 2,
      description: "聚焦当前翻译行业的关键环节——智能译后编辑与多维度翻译质量控制。培养学生在AI译文优化、译文评价与跨语境适配方面的综合能力，特别是在语言大模型与评估算法高度集成的数智翻译环境中具备技术化与批判性双重思维。系统讲授APE与AIPE流程，训练学生在实际场景中执行术语一致、语法修复等译后任务。引入语言大模型，探索其在译文自动评分、错误检测、风格微调与智能建议生成中的应用。系统讲解并对比常用的自动化评价指标体系，如BLEU、TER、MIST、BERTScore、COMET等。"
    },
    {
      id: 6,
      code: "W01006",
      name: "数智视频创作与国际传播",
      credits: 3,
      hours: {
        theory: 17,
        practice: 34
      },
      semester: 3,
      description: "实现\"AI技术 + 内容策划 + 国际表达 + 跨平台传播\"四位一体能力培养。由英语学院与艺术学院联合开发，汇聚语言传播与视听艺术的跨学科优势，培养学生以人工智能为工具、多语种为载体创作国际传播向短视频内容的能力。课程结构包括：国际传播内容设计、AI辅助视频制作、字幕翻译与语言本地化三大模块。充分引入语言大模型与AIGC工具，支持学生完成剧本生成、旁白录制、语音合成等创作任务，实现\"AI协作式内容创作\"的新范式。学习如何针对不同平台设计传播策略与多平台适配方案，提升多语言内容本地化与跨文化视觉表达能力。"
    }
  ]
};

// QR Code placeholder data
const qrCodeData = {
  title: "扫码了解更多",
  description: "扫描二维码获取微专业最新招生信息",
  imageUrl: "qr-code-placeholder.png"  // 将在开发阶段生成
};

// Icons and visual elements for the tech style
const visualElements = {
  icons: [
    "translate", "code", "data_object", "analytics", 
    "hub", "language", "captive_portal", "smart_display"
  ],
  backgroundElements: [
    "circuit-pattern", "grid-lines", "data-flow", "tech-nodes"
  ]
};

// 将数据暴露给window对象
// 避免使用module导出，因为在浏览器环境中直接使用
window.programData = programData;
window.qrCodeData = qrCodeData;
window.visualElements = visualElements;