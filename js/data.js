const programData = {
  title: "数智人文与翻译传播微专业",
  
  basicInfo: {
    goal: "“数智人文与翻译传播”微专业立足于数字时代语言服务与国际传播的深度融合，聚焦翻译行业智能化转型与全球传播生态的变革需求，融合语言文学、人工智能、数据科学与跨文化传播等多学科资源，打造面向未来的复合型交叉学科平台。项目紧扣“一带一路”倡议与中华文化国际传播战略，强调“人工智能 + 跨文化素养 + 翻译技术”的核心能力结构，注重人文底蕴与技术工具的双向赋能。",
    features: [
      "紧扣“一带一路”倡议与中华文化国际传播战略",
      "注重人文底蕴与技术工具的双向赋能",
      "联合多家行业头部企业实施“项目进课堂”",
      "构建贯通“教学—科研—实践—应用”的一体化育人体系",
      "汇聚校内外语言学、国际传播、数智人文与翻译技术领域专家",
      "自主研发“数字人文智能分析平台”与“AIGC多面手智能应用平台”"
    ],
    coreCompetencies: [
      {
        title: "语言转换能力",
        description: "系统掌握中英双语表达与翻译方法，具备高质量语言转换、语体风格调控与语义重构能力"
      },
      {
        title: "跨文化传播能力",
        description: "理解多元文化语境与传播逻辑，具备全球语境下内容本地化、文化适配与叙事转化能力"
      },
      {
        title: "智能技术应用能力",
        description: "熟练运用语言大模型、AIGC工具、CAT系统及“数智人文”智能平台，实现高效内容生成与智能传播"
      },
      {
        title: "数据分析与研究能力",
        description: "掌握语料库构建、文本挖掘、译文评估与可视化分析等方法，具备开展数据驱动语言与传播研究的能力"
      }
    ],
    career: "本微专业面向文化传播、数字媒体、跨境电商、语言服务等新兴产业，服务国家国际传播与数字丝路发展需求，着力培养具备“语言能力 + 人文素养 + 数智技能”三位一体的复合型创新人才。毕业生在学术、行业与技术交叉领域具备广阔的发展空间与竞争优势。"
  },
  
  enrollmentInfo: {
    target: "本微专业面向具有跨学科发展潜力与“语言+技术”学习兴趣的优秀本科生开放",
    conditions: [
      "凡取得本校正式学籍的全日制在校二、三年级外国语言文学类专业（翻译专业、英语、商务英语，兼顾其他语种），兼收新闻传播学类、中国语言文学类、计算机科学与技术、艺术设计等相关专业学生",
      "主修专业的已修课程平均学分绩点要求在2.0及以上（无挂科）",
      "对“语言+技术”方向具有浓厚兴趣和一定基础，有跨学科学习意愿与潜力",
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
      description: "微专业的基础课程，面向外语与人文学科学生，旨在构建“语言—技术—文化”三位一体的认知框架。课程以“远读—中读—近读”三重阅读范式为路径，融合文本挖掘、语料库分析、主题建模（LDA）、聚类分析、情感分析等核心技能。突出大语言模型与智能体的实用场景，引导学生使用 ChatGPT、DeepSeek 等生成式 AI 工具完成语言生成、风格模仿等任务。采用“AI-in-the-Loop”教学模式，构建沉浸式学习体验。"
    },
    {
      id: 2,
      code: "W01007",
      name: "大语言模型与智能翻译技术",
      credits: 3,
      hours: {
        theory: 17,
        practice: 34
      },
      semester: 1,
      description: "微专业的核心课程，聚焦人工智能与语言服务的深度融合。由原“智能翻译技术与应用”与“数智译后编辑与质量评估”两门课程整合升级而成。课程围绕“生成—优化—评估”三大环节展开，引导学生设计 Prompt 与多轮对话策略；结合人机协同的译后编辑任务，训练学生利用智能体辅助完成术语统一、逻辑修复等环节；深入介绍 BLEU、BERTScore、COMET 等主流自动质量评估方法。"
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
      description: "系统构建学生在数字时代背景下的国际传播认知框架与叙事能力，实现“翻译+传播+技术”三位一体的能力跃升。课程理论部分系统介绍国际传播的演化逻辑、全球话语权结构等。引入“翻译叙事”视角，帮助学生理解翻译在国际传播中的深层功能。实践部分以多语种传播项目为核心，结合真实案例，开展翻译策略分析与传播效果评估。学生将使用 LLM 进行内容生成、语境适配与翻译优化。"
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
      description: "重要技术实践课程，旨在培养学生系统掌握语料库构建、语言数据分析与人工智能融合应用的综合能力。学生将学习语料的采集、清洗、格式转换与结构化标注等操作流程，使用 AntConc, Sketch Engine 等工具。特别设置“AI赋能语料库”模块，引入 ChatGPT, DeepSeek 等语言大模型，在语料清洗、语义标注、智能检索等关键环节实现自动化处理。"
    },
    {
      id: 5,
      code: "W01006",
      name: "数智视频创作与国际传播",
      credits: 3,
      hours: {
        theory: 17,
        practice: 34
      },
      semester: 2,
      description: "学时最长、实践强度最高的核心课程，聚焦“AI技术 + 内容策划 + 国际表达 + 跨平台传播”的复合能力培养。课程设有三大模块：国际传播内容设计、AI辅助视频制作、字幕翻译与本地化。充分引入 ChatGPT, DeepSeek, 腾讯元宝等 AIGC 工具，支持学生进行剧本撰写、语音合成、AI剪辑等创作任务。学生将以小组为单位，完成从选题策划到成片发布的完整流程。"
    }
  ]
};

// QR Code placeholder data
const qrCodeData = {
  title: "扫码了解更多",
  description: "扫描二维码获取微专业最新招生信息",
  imageUrl: "qr-code-placeholder.png"
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
window.programData = programData;
window.qrCodeData = qrCodeData;
window.visualElements = visualElements;