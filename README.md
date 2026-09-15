# eSIM / Telegram Commerce Layer

独立的 eSIM 产品与 Telegram 下单机器人介绍页，采用静态 HTML/CSS/JS，无后端依赖。

## 公开范围

- eSIM 产品能力：快速交付、4G/5G 移动数据、旅行/香港/备用/短信等场景
- Telegram 用户流程：选择场景 → 查看公开套餐信息 → 付款 → 获取安装信息
- 轻量化渠道价值：余额制拿货、手动或自动化运营、适配 Telegram 生态
- 安全边界：只展示公开能力，不展示 API 地址、Token、Webhook、供应商、库存或后台细节

## 本地预览

直接用浏览器打开 `index.html`，或在此目录运行任意静态文件服务器。

```powershell
python -m http.server 8080
```

然后打开 `http://localhost:8080`。

## 注意

页面中的“进入 Telegram”按钮当前为页面内演示锚点，未写入真实机器人用户名或接口地址。上线前只需替换为公开入口，不要把密钥、Webhook、内部管理链接或供应商接口放入前端文件。
