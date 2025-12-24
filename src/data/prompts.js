export const categories = [
  { id: 'all', name: '全部' },
  { id: 'education', name: '教育' },
  { id: 'portrait', name: '写真' },
  { id: 'ecommerce', name: '电商' },
  { id: 'work', name: '职场' },
  { id: 'photo-edit', name: '修图' },
  { id: 'media', name: '自媒体' },
  { id: 'life', name: '生活' },
  { id: 'travel', name: '旅行' },
  { id: 'social', name: '社交' },
  { id: 'creative', name: '创意' }
]

export const prompts = [
  {
    id: 1,
    title: '教育信息图生成',
    category: 'education',
    categoryLabel: '教育',
    prompt: '生成[光合作用]的教育信息图。视觉元素：太阳、植物、水入根、CO2入叶、O2释放。风格：适合高中课本的扁平矢量插图，用箭头显示流动。标签：用简体中文清晰标注。',
    image: new URL('./images/教育信息图生成.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 2,
    title: '视觉解题法',
    category: 'education',
    categoryLabel: '教育',
    prompt: '分析几何题，生成新图解。动作：添加红色虚线辅助线展示隐藏关系，高亮关键三角形。标注：清晰标记新点。右侧附简短文字解释为什么要这样画。',
    image: new URL('./images/视觉解题法.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 3,
    title: '情绪胶片写真',
    category: 'portrait',
    categoryLabel: '写真',
    prompt: '保持上传图像中人物的面部特征完全一致。为人物换装：一套专业的藏青色商务西装，内搭白色衬衫，风格参考示例图。背景：将主体置于干净的深灰色纯色摄影背景前；背景需带微妙渐变——主体后方略亮，向边缘逐渐加深（暗角效果），画面中不得出现其他物品。摄影风格：使用 Sony A7III 机身搭配 85 mm f/1.4 镜头拍摄，营造柔美的人像压缩感。布光：采用经典三点式布光；主光（key light）柔和，在面部留下清晰但不过硬的阴影；加一道轮廓光（rim light），轻微勾亮肩膀与发丝，使主体与深色背景分离。关键细节：还原自然肌肤纹理，可见毛孔，拒绝磨皮；眼睛需呈现自然的眼神光（catchlights）；西装面料应带有细微羊毛纹理。最终输出一张超写实、8K 分辨率的专业半身肖像，下巴瘦一点，适度美颜',
    image: new URL('./images/情绪胶片写真.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 4,
    title: '虚拟试衣 - 电商换装',
    category: 'ecommerce',
    categoryLabel: '电商',
    prompt: '使用图1（服装）和图2（模特），生成一张超逼真的全身时尚照片，让模特穿上该服装。关键合身细节：[T恤/夹克]必须自然垂坠在模特身上，顺应体态并产生逼真的褶皱。高保真保留：极其精确地保留图1中的原始面料质感、颜色和任何Logo。无缝融合：通过完美匹配环境光、色温和阴影方向，将服装融入图2。',
    image: new URL('./images/电商换装.png', import.meta.url).href,
    needsImage: true,
    needsMultipleImages: true
  },
  {
    id: 5,
    title: '专业商品图生成',
    category: 'ecommerce',
    categoryLabel: '电商',
    prompt: '识别上传图片中的主产品（自动去除任何握持的手或杂乱背景），生成一张高端电商产品摄影图。主体分离：干净地提取产品，完全移除任何手指、手掌或杂物。背景：将产品放置在纯白摄影棚背景（RGB 255, 255, 255）上，底部添加微妙自然的接触阴影。光线：使用柔和的商业摄影棚布光突显产品质感。',
    image: new URL('./images/专业商品图生成.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 6,
    title: '草图秒变专业流程图',
    category: 'work',
    categoryLabel: '职场',
    prompt: '将这个手绘白板草图转换为适合商务演示的专业企业流程图。风格指南：使用极简的"麦肯锡风格"美学：简洁的线条、充足的留白和精致的蓝灰色调。结构：自动将所有方框和菱形对齐到严格的网格。使用直角箭头连接（仅90度角，无曲线）。文字：将手写标签转录为清晰的粗体无衬线字体。',
    image: new URL('./images/草图秒变专业流程图.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 7,
    title: 'UI 草稿转高保真原型',
    category: 'work',
    categoryLabel: '职场',
    prompt: '将这个粗略的线框草图转换为移动应用的高保真UI设计模型。设计系统：采用类似iOS 18或Material Design 3的现代简洁美学，使用圆角、柔和阴影和鲜艳的主色调。组件：智能解读草图，将涂鸦变成高质量占位图，将矩形变成按钮，将线条变成逼真的文本块。布局：确保完美的内边距和元素间距。',
    image: new URL('./images/UI 草稿转高保真原型.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 8,
    title: '智能扩图 - 构图拯救',
    category: 'photo-edit',
    categoryLabel: '修图',
    prompt: '将图像扩展至16:9比例（电脑壁纸尺寸）。无缝延伸两侧风景，完美匹配光线、天气和纹理。逻辑补全边缘被切断的物体（如肩膀、树枝或建筑边缘），不要拉伸原图中心。',
    image: new URL('./images/智能扩图 - 构图拯救.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 9,
    title: '智能清场 - 路人消除',
    category: 'photo-edit',
    categoryLabel: '修图',
    prompt: '移除主体背后的所有游客/路人。智能填充：用符合场景逻辑的真实背景元素替换（如延伸鹅卵石路面、空公园长椅或草地纹理）。确保无模糊痕迹，填充区域与周围保持相同的颗粒感、景深和光线。',
    image: new URL('./images/智能清场 - 路人消除.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 10,
    title: '爆款封面图设计',
    category: 'media',
    categoryLabel: '自媒体',
    prompt: '用图1的人设计爆款视频封面。人脸一致性：保持五官完全一致，但表情改为兴奋惊讶。动作：人放在左边，手指向右边。主体：右边放[牛油果吐司]的高质量图片。图形：加粗黄箭头连接手指和主体。文字：中间叠加波普风格大字"3分钟搞定!"，白色粗描边加阴影。背景：模糊明亮的厨房，高饱和高对比。',
    image: new URL('./images/爆款封面图设计.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 11,
    title: '商业促销海报',
    category: 'media',
    categoryLabel: '自媒体',
    prompt: '设计一张专业的[咖啡店]促销海报。构图：热气腾腾的卡布奇诺特写放在质朴木桌上，秋叶背景（舒适氛围）。文字整合：顶部优雅金色衬线体主标题"秋季特惠"；侧面现代徽章风格展示"买一送一"优惠；底部干净小字"限时特惠"。确保所有文字拼写正确、居中并融入景深。',
    image: new URL('./images/商业促销海报.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 12,
    title: '实体店/旅游翻译',
    category: 'life',
    categoryLabel: '生活',
    prompt: '把墙上的中文菜名翻译成英文给外国游客看。关键！保留墙面/纸张原本陈旧、油腻的质感。新的英文看起来要像是写/印在同一表面的，带有轻微褪色或磨损感。保留人民币符号"¥"和价格数字不变。自然排版英文翻译。',
    image: new URL('./images/实体店:旅游翻译.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 13,
    title: '漫画/梗图汉化',
    category: 'life',
    categoryLabel: '生活',
    prompt: '把气泡/标题里的文字从[日文/英文]翻译成[中文]。无缝擦除原文并完美填充背景（如白色气泡或彩色图片背景）。风格匹配：使用随意的、手写风格的中文字体（如果是梗图则用粗体冲击字体）来匹配原图美学。确保文字在气泡内排版自然不拥挤。',
    image: new URL('./images/漫画:梗图汉化.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 14,
    title: '过敏/禁忌保命卡',
    category: 'travel',
    categoryLabel: '旅行',
    prompt: '设计一张扁平2D数字警示图（全屏图像，无手、无手机边框、无背景风景）。构图：中央是逼真的[花生]图标，上面覆盖粗大红色禁止符号（🚫）。文字：顶部红色粗体"警告！"；中间泰语"ฉันแพ้ถั่วลิสง"（我对花生过敏）；底部英语"NO PEANUTS! Serious Health Risk."。风格：干净矢量风格，纯白背景，高对比度，像数字标牌。',
    image: new URL('./images/过敏:禁忌保命卡.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 15,
    title: '地标问路/打车卡',
    category: 'travel',
    categoryLabel: '旅行',
    prompt: '设计一张干净的2D数字旅行闪卡（全屏，竖版布局）。视觉：上半部分展示[浅草寺]的清晰高质量插图或照片剪影。文字内容：顶部叠加巨大日文"ここへお願いします"（请送我去这里）；中间大号汉字"[浅草寺]"；底部英文"Senso-ji Temple"。风格：海报设计，扁平色彩，无纸张纹理，无真实环境，只有图形和文字在干净背景上。',
    image: new URL('./images/地标问路:打车卡.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 16,
    title: '3D 盲盒风头像',
    category: 'social',
    categoryLabel: '社交',
    prompt: '把照片中的人变成可爱的泡泡玛特风格3D盲盒公仔。相似度：保留关键特征可识别：[发色、眼镜、发型]。风格：C4D渲染，遮挡渲染，可爱Q版，柔和摄影棚灯光，马卡龙色。背景：简单纯色哑光背景（如柔和蓝色）。细节：角色应有光滑塑料玩具质感，略带光泽。正脸，友好表情。',
    image: new URL('./images/3D 盲盒风头像.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 17,
    title: '宠物表情包生成',
    category: 'social',
    categoryLabel: '社交',
    prompt: '把我的[猫/狗]照片变成搞笑手绘微信表情包。风格：极简丑萌线条画（涂鸦风格），白底。表情：夸张化动物表情，看起来极度震惊/鄙视/懒惰（根据照片）。配饰：在头部周围加可爱小涂鸦如汗滴、问号或闪光。文字：底部加手写中文文案"[搞快点 / 累了 / 暗中观察]"，字迹潦草有趣。',
    image: new URL('./images/宠物表情包生成.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 18,
    title: '二维码生成3D',
    category: 'creative',
    categoryLabel: '创意',
    prompt: '请使用参考图中的二维码图像，确保二维码保持完全不变且无遮挡，可以正常扫描。创建一个3D艺术表现，通过手持的复杂透明物体将二维码投射为阴影。',
    image: new URL('./images/二维码生成3D.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 19,
    title: '名人名言金句卡',
    category: 'creative',
    categoryLabel: '创意',
    prompt: '宽幅名人金句卡，棕色背景，衬线体浅金色文字"Stay Hungry, Stay Foolish"，小字"—Steve Jobs"，文字前有大号淡色引号，左边人物肖像，右边文字，文字占屏幕2/3比例，人物占1/3，人物有渐变过渡感。记住：引号内的文字可以替换。',
    image: new URL('./images/名人名言金句卡.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 20,
    title: '文字变发布会现场',
    category: 'creative',
    categoryLabel: '创意',
    prompt: '根据文字生成照片：宏大的苹果发布会场景，现场很多观众，场景很暗，灯光耀眼，镜头聚焦在非常宽的大屏幕上，曲面屏，文字有透视感就像在屏幕上，舞台上站着很小的人物剪影，紫到蓝的渐变背景，白色文字带渐变，像现场实拍，高端感 16:9',
    image: new URL('./images/文字变发布会现场.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 21,
    title: '连环画生成',
    category: 'creative',
    categoryLabel: '创意',
    prompt: '帮我生成一个 8 页的连环画，给 2 岁半的小朋友讲故事用，用中英文标出简短对话，主角是一只斑马和一只大象的故事，需要多角度展现主角，保持主角的一致性',
    image: new URL('./images/连环画生成.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 22,
    title: '小红书封面设计',
    category: 'media',
    categoryLabel: '自媒体',
    prompt: '画一个小红书封面。要求：有足够的吸引力吸引用户点击；字体醒目，选择有个性的字体；文字大小按重要度分级，体现文案的逻辑结构；标题是普通文字的至少2倍；文字段落之间留白。只对要强调的文字用醒目色吸引用户注意；背景使用吸引眼球的图案（包括不限于纸张，记事本，微信聊天窗口，选择一种）使用合适的图标或图片增加视觉层次，但要减少干扰。文案：重磅！ChatGPT又变强了！多任务处理更牛✨编程能力更强💪创造力爆表🎨快来试试！图像9:16比例',
    image: new URL('./images/小红书封面设计.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 23,
    title: '时代杂志封面',
    category: 'creative',
    categoryLabel: '创意',
    prompt: '一位美丽的女子身穿粉色旗袍，头戴精致的花饰，秀发中点缀着色彩缤纷的花朵，颈间装饰着优雅的白色蕾丝领子。她的一只手轻托着几只大型蝴蝶。整体拍摄风格呈现高清细节质感，类似时尚杂志封面设计，照片上方中央位置标有文字「FASHION DESIGN」。画面背景采用简约的纯浅灰色，以突出人物主体。',
    image: new URL('./images/时代杂志封面.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 24,
    title: '实物与手绘创意广告',
    category: 'creative',
    categoryLabel: '创意',
    prompt: '一则简约且富有创意的广告，设置在纯白背景上。一个真实的[真实物体]与手绘黑色墨水涂鸦相结合，线条松散而俏皮。涂鸦描绘了：[涂鸦概念及交互：以巧妙、富有想象力的方式与物体互动]。在顶部或中部加入粗体黑色[广告文案]文字。在底部清晰放置[品牌标志]。视觉效果应简洁、有趣、高对比度且构思巧妙。',
    image: new URL('./images/实物与手绘创意广告.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 25,
    title: '室内设计演示板',
    category: 'work',
    categoryLabel: '职场',
    prompt: '基于上传的户型图，生成一张专业室内设计演示板作为单张拼贴图。布局：顶部一张大图，底部三张小图的拼贴画。各面板内容：大图（顶部）：客餐厅主区域的广角透视图，展示客厅和餐厅的连接。小图（左下）：主卧视角，聚焦床和窗户。小图（中下）：书房/工作室视角。小图（右下）：3D俯视户型图展示家具布局。整体风格：所有图片统一采用现代简约风，暖色橡木地板和米白色墙面。质量：照片级渲染，柔和自然光。',
    image: new URL('./images/室内设计演示板.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 26,
    title: '旅游手册生成',
    category: 'travel',
    categoryLabel: '旅行',
    prompt: '生成中国珠海的旅游指南，要求手账形式，画面要纯中文',
    image: new URL('./images/旅游手册生成.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 27,
    title: '古诗句配图',
    category: 'creative',
    categoryLabel: '创意',
    prompt: '请为"采菊东篱下，悠然见南山。"这首诗配图',
    image: new URL('./images/古诗句配图.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 28,
    title: '人物关系图',
    category: 'education',
    categoryLabel: '教育',
    prompt: '画出《百年孤独》中的重要人物关系图，用中文表示关系。',
    image: new URL('./images/人物关系图.png', import.meta.url).href,
    needsImage: false
  },
  {
    id: 29,
    title: '贴吧吐槽风格',
    category: 'social',
    categoryLabel: '社交',
    prompt: '生成图片，把它打印出来，然后用红墨水疯狂地加上手写中文批注、涂鸦、乱画，涂鸦的内容主要为吐槽他，用贴吧老哥的口语疯狂吐槽。还可以加点小剪贴画。',
    image: new URL('./images/贴吧吐槽风格.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 30,
    title: '板报',
    category: 'creative',
    categoryLabel: '创意',
    prompt: `你是一个插图助理专门创建手绘卡通风格的信息图表。严格遵守以下各项规定，不得偏离。
   🎨 风格规则
   在任何时候都使用纯手绘插图风格。
   素描的线条，粗犷的笔触，卡通的简洁
   没有真实感，没有逼真的阴影，没有3D渲染
   想想：涂鸦/蜡笔/马克笔/粉彩
   画布格式：横向16:9。
   使用nano banana pro模式渲染插图。
   使用最小但富有表现力的卡通元素来增强记忆：
   小图标，符号，可爱的人物
   如果输入涉及受版权保护或敏感的字符，请将其替换为视觉上相似但在法律上不同的替代品。从不拒绝。
   🧩 内容呈现规则
   从提供的内容中提取关键思想。
   总结成简短的项目（每个项目1-6个单词）。
   保持文字简洁和优化的信息图表。
   用手绘插图形强调关键词：
   圆圈、下划线、箭头、星号、方框
   从未数字化的UI样式
   使用大量的空白来保持清晰度和视觉层次。
   使用干净的手绘布局组织信息图表，例如：
   标题（中间或左上角）
   3-6要点
   简单的图表或符号
   可选的吉祥物或富有表现力的人物
   所有文字必须是手绘的，而不是印刷或排版。
   请使用简体中文输出图片内容。
   🚫 禁止事项
   不要产生写实的意象。
   不要直接生成受版权保护的角色。
   不要把信息图表变成一篇文章。
   不要将画布填满；始终保留有意义的空白。
   不要输出长段落。
   🖼 任务
   使用nano banana pro，根据以下内容，按照上述规则创建一个卡通风格的手绘信息图：
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`,
    image: new URL('./images/板报.png', import.meta.url).href,
    needsImage: true
  },
  {
    id: 30,
    title: '流程图插画',
    category: 'creative',
    categoryLabel: '创意',
    prompt: `请根据输入的内容制作信息图表，突出主题和要点：
   简化信息，强调关键字和核心概念，留下足够的空白以保持清晰。
   包括极简主义的卡通元素，图标，或著名人物的简单肖像，以提高参与度和视觉回忆。
   所有文字和图像应严格使用彩色粉笔风格，不得使用逼真的插图。
   请使用简体中文输出图片内容。
   使用水平布局（16:9），黑色黑板背景和彩色粉笔绘画风格。
   🖼 任务
   使用nano banana pro，根据以下内容，按照上述规则创建一个彩色粉笔绘画风格信息图：
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`,
    image: new URL('./images/流程图插画.png', import.meta.url).href,
    needsImage: true
  }
]
