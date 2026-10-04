# THREAD / WORLD — 游戏作品集 V5

这是一套纯静态网站，不需要租服务器、数据库、API 密钥或付费插件。网站以 Wonder Webby 为代表项目，其他两项保留占位。姓名沿用此前的 Rong Guo；具体职责、邮箱、简历仍待确认。

## 本次交付状态

网站代码已写好，并在本地 Git 仓库中提交。**尚未推送到 GitHub，尚未发布到公网。**当前对话的 GitHub 连接提供读取接口，没有建仓库、写文件或推送接口。发布脚本必须在你自己的电脑上，经 GitHub 官方登录和公开发布确认后执行。

## Windows 发布

解压整个 ZIP，不要直接在压缩包内运行。打开目录并双击 `PUBLISH.cmd`。

脚本会检查 Git 和 GitHub CLI。工具缺失时，脚本先询问，再调用官方文档提供的 WinGet 安装命令。没有 WinGet 时会停止并提示安装地址。浏览器登录由 `gh auth login --web` 发起；不要向聊天发送令牌或密码。

登录账号应为 `lostkityx0728-droid`。脚本默认创建 **公开** 仓库 `game-portfolio`，上传网页和素材，再配置 GitHub Pages 从 `main` 分支根目录发布。它会显示公开范围，并要求输入 `PUBLISH` 才继续。

仓库公开后，网页源码、游戏截图和短片也会公开。请先确认团队素材可以用于公开作品集。

脚本不会覆盖不匹配的远程仓库，不会强制推送，不会删除仓库。已有不同 Pages 配置时会停止，不会擅自修改。发布地址来自 GitHub API 的返回值，不是预先宣称已上线的地址。Windows 脚本会等待构建并检查 HTTP 响应，失败或仍在构建时会如实提示。

`PUBLISH.cmd` 中的 ExecutionPolicy Bypass 只对该次 PowerShell 进程生效，不修改系统全局策略。你可以先用文本编辑器查看 `publish.ps1` 的全部代码。脚本未在真实 Windows/GitHub 账号环境中进行端到端执行验证。

## macOS / Linux

安装 Git 和 GitHub CLI 后，在目录中运行 `bash publish.sh`。它同样使用官方登录、账号校验和公开发布确认。构建完成与否请查看脚本打印的 GitHub Actions 地址。

## 预览

单文件预览 `preview.html` 随包附带，直接用浏览器打开即可。它不参与 Git 提交或自动上传，避免重复上传已经独立存放的图片与视频。也可以使用熟悉的本地静态预览工具打开当前目录。`index.html` 是部署入口，`wonderwebby.html` 是真实项目详情页。

## 交互

首屏由实时生成的丝线圆形图案开始，鼠标改变纹理的形变，滚动逐渐将其展开为实际游戏画面。中段使用固定视口内的三幕演示，滚动控制图片的曲面擦除与文本切换。三个时间轴按钮提供点击入口。菜单与页面跳转使用统一的曲线幕布，作品索引提供跟随鼠标的项目图像。

没有劫持滚轮或触摸滚动。右上角和页尾可以关闭 Motion。系统开启减少动态效果时，固定滚动演出变为普通可读内容。视频详情保留原生控制、图片放大和键盘操作。

渲染优先使用 WebGL。不能使用 WebGL 时，Canvas2D 仍会生成动态丝线、圆形展开和曲线换幕，而不是退回静态效果图。硬件加速分支与低功耗兼容分支在细节上不会完全相同。本次容器浏览器无法创建 WebGL 上下文，因此实际截图与交互测试使用 Canvas2D 兼容分支；WebGL 分支尚未完成真实 GPU 浏览器验证。

## 修改位置

| 文件 | 内容 |
| --- | --- |
| `site-data.js` | 姓名、公开邮箱、简历地址、中英文文案、演示片段 |
| `index.html` | 首页结构 |
| `wonderwebby.html` | 项目详情、个人贡献、署名 |
| `styles.css` | 字体、版式、响应式设计 |
| `experience.js` | 滚动时间轴、菜单、页面转场、无障碍降级 |
| `render.js` | 原创 WebGL 着色器与 Canvas2D 兼容实现 |
| `app.js` | 中英切换、视频控制、图像灯箱、单文件预览路由 |
| `assets/` | 已打包的游戏图像与短片 |

## 官方发布文档

- GitHub CLI 建仓库与推送：https://cli.github.com/manual/gh_repo_create
- GitHub CLI 官方浏览器登录：https://cli.github.com/manual/gh_auth_login
- GitHub Pages API：https://docs.github.com/en/rest/pages/pages
- GitHub Pages 创建说明：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Git 安装：https://git-scm.com/install/windows
- GitHub CLI 安装：https://github.com/cli/cli/blob/trunk/docs/install_windows.md

媒体与署名见 `SOURCES.md`、`ASSET-NOTICE.md`，测试范围见 `CHECKS.md`。
