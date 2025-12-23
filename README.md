# Nano Banana Pro 提示词大全

一个基于 Vue3 + Vite 的图像生成提示词展示和生成工具。

## 功能特性

- 🔍 **搜索功能** - 支持按关键词搜索提示词
- 🏷️ **分类筛选** - 支持按类别（教育、写真、电商、职场、修图、自媒体、生活、旅行、社交、创意）筛选
- 🔑 **API Key 管理** - 右上角设置 API Key，本地存储安全保存
- 📋 **一键复制** - 快速复制提示词到剪贴板
- 🎨 **在线生成** - 直接调用 API 生成图片
- 📷 **图片上传** - 支持上传参考图片进行图像生成

## 技术栈

- Vue 3
- Vite 4
- 原生 CSS（无框架依赖）

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 使用说明

1. 打开应用后，可以浏览所有提示词卡片
2. 使用顶部搜索框搜索感兴趣的提示词
3. 点击分类标签筛选特定类别
4. 点击卡片查看详细提示词内容
5. 点击右上角设置 API Key（从 chatfire.site 获取）
6. 点击"生成图片"按钮，可以编辑提示词并上传参考图片
7. 点击"开始生成"调用 API 生成图片

## API 接口

```
POST https://api.chatfire.site/v1/images/generations
Header: Authorization: Bearer YOUR_API_KEY

Body:
{
  "model": "nano-banana",
  "prompt": "你的提示词",
  "image": ["图片URL1", "图片URL2"]  // 可选
}
```

## 项目结构

```
nano-prompt-app/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── main.js
    ├── App.vue
    ├── assets/
    │   └── style.css
    └── data/
        └── prompts.js
```

## 提示词分类

- **教育** - 信息图、解题、人物关系图等
- **写真** - 胶片风格、情绪写真等
- **电商** - 虚拟试衣、商品图生成等
- **职场** - 流程图、UI原型、室内设计等
- **修图** - 智能扩图、路人消除等
- **自媒体** - 封面设计、促销海报等
- **生活** - 翻译、汉化等
- **旅行** - 过敏卡、打车卡等
- **社交** - 3D头像、表情包等
- **创意** - 二维码3D、名言卡、发布会等
