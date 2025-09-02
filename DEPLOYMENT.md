# DILI TRADING SDN. BHD. 网站 - GitHub Pages 部署版本

这是专为GitHub Pages部署准备的DILI Trading网站源代码。

## 🚀 快速部署步骤

### 1. 创建GitHub仓库
1. 在GitHub创建新仓库，名称建议：`dili-trading-website`
2. 设置为Public（GitHub Pages免费版需要）

### 2. 上传代码到GitHub
```bash
git init
git add .
git commit -m "Initial commit: DILI Trading website"
git remote add origin https://github.com/YOUR_USERNAME/dili-trading-website.git
git branch -M main
git push -u origin main
```

### 3. 配置GitHub Pages
1. 进入仓库的 Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. 点击Save

### 4. 等待部署完成
- GitHub Actions会自动构建和部署
- 访问地址：`https://YOUR_USERNAME.github.io/dili-trading-website/`

## ⚙️ 重要配置

### Vite配置
`vite.config.ts`已配置GitHub Pages路径：
```typescript
base: '/dili-trading-website/', // 需要匹配您的仓库名
```

**如果您的仓库名不是`dili-trading-website`，请修改这个路径！**

### GitHub Actions
已包含自动部署工作流（`.github/workflows/deploy.yml`），每次推送到main分支都会自动部署。

## 📁 项目结构
```
dili-trading-website/
├── .github/workflows/deploy.yml  # GitHub Actions部署配置
├── src/                          # 源代码
├── public/                       # 静态资源
├── package.json                  # 依赖配置
├── vite.config.ts               # Vite配置
└── README.md                    # 项目说明
```

## 🛠️ 本地开发
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🔧 自定义域名（可选）
如果您有自定义域名：
1. 在仓库根目录添加`CNAME`文件
2. 文件内容：您的域名（如：`dilitrade.com`）
3. 在域名DNS设置中添加CNAME记录指向GitHub Pages

## 📱 功能特性
- ✅ 响应式设计，完美适配移动端
- ✅ 现代化UI设计
- ✅ 快速加载和SEO友好
- ✅ Google Maps集成
- ✅ 专业的国际化英文内容

## 🔄 更新网站
每次修改后：
```bash
git add .
git commit -m "Update website"
git push origin main
```
GitHub Actions会自动重新部署。

## 📞 技术支持
- 检查Actions标签页查看构建状态
- 确保所有文件都正确推送到GitHub
- 验证vite.config.ts中的base路径与仓库名匹配

---
**🎉 部署成功后，您的DILI TRADING网站就可以通过GitHub Pages免费访问了！**