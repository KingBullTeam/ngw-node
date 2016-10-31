# 牛股王node服务器搭建

# 线上Linux目录(/home/cuiyukun)

 * download(文件下载目录)
  - node
  - mongodb (mongodb安装目录)

 * app(项目目录)
  - ngw-node(使用git同步版本, ``` npm start & ``` 后台运行, pm2安装权限不足)
 * mongodb(mongodb目录)
  - data
  - log

# mongodb绝对路径启动(已设置默认自启动)：

 ``` /home/cuiyukun/download/mongodb/bin/mongod --dbpath=/home/cuiyukun/mongodb/data --logpath /home/cuiyukun/mongodb/logs/log.log -fork ```

# [测试](http://192.168.6.159:2333/) (需要连接vpn)

# 本地运行
  - 安装mongodb [安装教程](https://docs.mongodb.com/manual/installation/)
  - ``` npm install ```
  - ``` npm start ```
  - 浏览器打开[http://localhost:2333/](http://localhost:2333/)
# demo使用了vue和vue-resource
