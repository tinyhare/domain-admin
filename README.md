# Domain Admin

基于Python + Vue.js 技术栈实现的域名SSL证书监测平台

用于解决，不同业务域名SSL证书，申请自不同的平台，到期后不能及时收到通知，导致线上访问异常，被老板责骂的问题

运行环境：

- Python 3.7.0

安装

```bash
$ pip install domain_admin

# 启动运行
$ gunicorn 'domain_admin.main:app'
```

默认的管理员账号：admin 密码：123456

> 注意：后端服务依赖 `curl`

## 项目简介

- https://gitee.com/mouday/domain-admin
- https://github.com/mouday/domain-admin
- https://pypi.org/project/domain-admin/

项目截图


网页版：

![](image/screencapture.png)

桌面端：

![](image/screencapture-desktop.png)

功能：

- 手动 + 自动查询证书信息
- 定时监控域名证书信息，到期邮件提醒
- 域名添加、删除、搜索管理
- 域名批量导入，导出功能
- 用户登录、退出
- 修改密码
- 多用户模式
- 用户管理
- 调度历史日志
- api接口 浏览器 桌面 ~~移动端（app+小程序）~~


前端选型（网页版）

- Node.js
- Vite.js
- Vue3.js
- Vue Router
- Pinia
- Element Plus
- Tailwind CSS

前端选型（桌面版）

- node.js v16.15.1
- vue3.js
- quasar + electron

后端选型

- Python3.7.0
- Flask https://flask.palletsprojects.com/en/2.2.x/
- jinja2 https://jinja.palletsprojects.com/en/3.1.x/
- peewee（sqlite） http://docs.peewee-orm.com/en/latest/index.html#
- apscheduler https://apscheduler.readthedocs.io/en/3.x/
- supervisord http://supervisord.org/index.html
- gunicorn https://docs.gunicorn.org/

## 二次开发

接口文档：[/doc/index.md](/doc/index.md)

```bash
git clone https://github.com/mouday/domain-admin.git

# 安装依赖
pip install -r requirements.txt

# 启动开发服务
make dev
```

代码推送

```bash
# github
git push -u origin master

# gitee
git push -u gitee master
```

## 问题

1、暂不支持多进程方式启动

使用 master + 多worker 方式启动应用，会启动多个定时任务Scheduler，导致多次执行任务

如果小规模使用，启动一个进程即可

如果是需要支持并发访问，可自行改进应用

将定时器独立出来，单独一个进程控制，行成 scheduler + Flask（master + 多worker）