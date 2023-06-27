### git 远端存放的代码工具

* gitHub
* gitLab
* gitee
* Svn


### 1.集中式控制、分布式控制、本地版本控制的区别

* 本地版本控制
  * 优点：本地保存代码，方便个人操作，个人保管代码
  * 缺点：一旦本地机器销毁，代码将会丢失
* 集中版本控制 svn
  * 优点：所有东西都放在服务器上，本地内存占用少，安全性高
  * 缺点：一旦中央服务器崩溃，代码将不存在和丢失
* 分布式版本控制 git
  * 优点：每个人都是单独的一个服务器，所有人都拥有完整代码历史记录，不管服务器怎么崩，代码始终能够找回
  * 缺点：本地内存占用大，安全性比较弱

---



### 2.开发环境

* 本地开发环境：devlpoment
* 测试环境：testing  ---测试人员使用
* 灰度环境：staging ---staging/replse（也叫做：备机环境，半线上环境）
* 线上环境：production ---master  （全量环境，上机环境）

---



### git指令

git config --global user.name xxx    --配置用户名
git config --global user.email xxx	--配置邮箱
git config --global user.phone xxxx	--配置手机号

git config --list --查看个人信息

git init  --初始化仓库

git add .  --将文件上传暂存区

git status --查看文件状态

git commit -m '描述'   --提交本地仓库

git push --向GitHub仓库提交代码

git pull --从GitHub仓库往下拉代码

git log --查看修改的版本

git reflog --查看所有版本

git branch '分支名'  --创建分支

git checkout '分支名'  --切换分支

git checkout -b '分支名'  --创建一个分支切换过去

git clone 'GitHub地址'   --将仓库中的内容克隆到本地仓库

git remote add origin 'ssh地址 或者是 https地址'  --链接GitHub仓库

git branch -d '分支名'  --删除本地分支名

git branch origin -d '分支名' --删除GitHub中分支名

git merge 分支名  --合并分支
