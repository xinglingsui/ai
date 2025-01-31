# 零星AI（借助Cloudflare实现使用DeepSeek API）

## 演示地址：

[零星AI](https://ai.0xwl.top/)

## 使用教程：

#### 1.后端

采用Cloudflare Workers来部署。

部署后，粘贴[代码](https://github.com/xinglingsui/deepseek-ai/blob/main/woeker.js)
之后创建环境变量：DEEPSEEK_API_KEY，值填入你在[官网](https://platform.deepseek.com/)申请的API key。
之后可以加入自定义域名

#### 2.后端

借助Cloudflare pages

fork本仓库。
修改**index.html**中第408行`const workerUrl = 'https://ai-api.0xwl.top/';`中的域名替换为你前面后端设置的workers域名。
之后部署到Cloudare pages就好了。可以添加自定义域名
