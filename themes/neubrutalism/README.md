# Neubrutalism Theme for Hexo

一个使用Neubrutalism设计风格和丰富马卡龙配色的Hexo博客主题。

## 特性

- 🎨 **Neubrutalism设计风格** - 粗犷的边框、阴影和几何形状
- 🌈 **马卡龙配色方案** - 丰富的色彩搭配，支持多种主题切换
- 📱 **响应式设计** - 完美适配桌面和移动设备
- ⚡ **现代化交互** - 流畅的动画效果和悬停状态
- 🎯 **用户友好** - 直观的导航和清晰的布局
- ♿ **无障碍支持** - 键盘导航和屏幕阅读器友好

## 安装

1. 在Hexo博客根目录下克隆主题：
```bash
cd themes
git clone https://github.com/yourusername/hexo-theme-neubrutalism.git neubrutalism
```

2. 在Hexo配置文件 `_config.yml` 中设置主题：
```yaml
theme: neubrutalism
```

3. 安装依赖并启动服务器：
```bash
npm install
hexo server
```

## 配置

主题配置文件位于 `themes/neubrutalism/_config.yml`：

### 基础配置

```yaml
# 头部设置
header:
  bg_color: "#FF6B9D"      # 头部背景色
  text_color: "#FFFFFF"    # 头部文字色
  show_title: true         # 显示网站标题
  show_subtitle: true      # 显示网站副标题
  menu:                    # 导航菜单
    Home: /
    Archives: /archives
    Categories: /categories
    Tags: /tags
    About: /about

# 侧边栏设置
sidebar:
  position: right          # 侧边栏位置：left, right, none
  bg_color: "#FFE66D"      # 侧边栏背景色
  show_author: true        # 显示作者信息
  show_recent_posts: true  # 显示最新文章
  recent_posts_count: 5    # 最新文章数量
  show_categories: true    # 显示分类
  show_tags: true          # 显示标签
  show_archives: true      # 显示归档

# 文章设置
post:
  title_color: "#FF6B9D"   # 文章标题颜色
  meta_color: "#95E1D3"    # 文章元信息颜色
  content_bg: "#FFFFFF"    # 文章内容背景
  border_color: "#FF9A8B"  # 文章边框颜色
  show_nav: true           # 显示文章导航
  show_tags: true          # 显示文章标签
  show_categories: true    # 显示文章分类
  show_date: true          # 显示发布日期
  show_author: true        # 显示作者
```

### 颜色配置

主题提供多种预设的马卡龙配色方案：

```yaml
# 颜色配置
colors:
  primary: "#FF6B9D"      # 主色调（粉色）
  secondary: "#4ECDC4"    # 次要色（青绿色）
  accent: "#FFE66D"       # 强调色（黄色）
  warm: "#FF9A8B"         # 暖色（珊瑚色）
  cool: "#95E1D3"         # 冷色（薄荷绿）
  neutral: "#F7F7F7"      # 中性色（浅灰）
  dark: "#2C3E50"         # 深色（深蓝）
  white: "#FFFFFF"        # 白色
  black: "#000000"        # 黑色
```

### 社交链接

```yaml
# 社交媒体链接
social:
  github: "https://github.com/yourusername"
  twitter: "https://twitter.com/yourusername"
  facebook: "https://facebook.com/yourusername"
  instagram: "https://instagram.com/yourusername"
  linkedin: "https://linkedin.com/in/yourusername"
  email: "your.email@example.com"
```

## 自定义

### 修改颜色主题

主题支持实时颜色切换，用户可以通过右上角的主题切换器选择不同的配色方案：

- **Macaron** - 经典马卡龙配色
- **Sunset** - 日落配色
- **Ocean** - 海洋配色
- **Forest** - 森林配色

### 添加自定义CSS

在 `themes/neubrutalism/source/css/` 目录下创建自定义CSS文件，然后在主题配置中引用。

### 修改布局

主题使用EJS模板引擎，所有模板文件位于 `themes/neubrutalism/layout/` 目录下。

## 功能特性

### 交互效果

- **悬停动画** - 卡片和按钮的悬停效果
- **滚动动画** - 页面元素的滚动显示动画
- **平滑滚动** - 锚点链接的平滑滚动
- **移动端菜单** - 响应式移动端导航菜单

### 用户体验

- **返回顶部** - 滚动时显示返回顶部按钮
- **加载动画** - 页面加载时的动画效果
- **键盘导航** - 支持键盘快捷键操作
- **主题记忆** - 记住用户的主题选择

### 内容展示

- **文章卡片** - 美观的文章预览卡片
- **分类标签** - 彩色分类和标签显示
- **归档页面** - 按年份组织的归档页面
- **侧边栏** - 丰富的侧边栏信息展示

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 贡献

欢迎提交Issue和Pull Request来改进这个主题！

## 许可证

MIT License

## 致谢

- [Hexo](https://hexo.io/) - 静态博客框架
- [Google Fonts](https://fonts.google.com/) - 字体服务
- [Neubrutalism Design](https://www.behance.net/gallery/115531545/Neubrutalism-Design-System) - 设计灵感

---

**享受你的Neubrutalism风格博客！** 🎨✨ 