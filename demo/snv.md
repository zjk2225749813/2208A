### SVN 简介

**Subversion(SVN)** 是一个开源的版本控制系統, 也就是说 **Subversion** 管理着随时间改变的数据。

这些数据放置在一个中央资料档案库(repository) 中。

这个档案库很像一个普通的文件服务器, 不过它会记住每一次文件的变动。

这样你就可以把档案恢复到旧的版本, 或是浏览文件的变动历史。

---

### SVH下载

下载地址：[https://sourceforge.net/projects/win32svn/](https://sourceforge.net/projects/win32svn/)

---

### SVN 的主要功能

1. 目录版本控制
2. 真实版本控制
3. 自动提交
4. 纳入版本控管的元数据
5. 选择不同的网络层
6. 一致的数据处理方式
7. 有效的分支(branch)与标签(tag)

---

### SVN 的生命周期

1. **创建（Create）**：在SVN中创建新文件或目录。
2. **检出（Checkout）**：从SVN仓库中获取文件或目录的复制，以便进行工作副本的编辑。
3. **修改（Modify）**：在工作副本中修改文件或目录。
4. **提交（Commit）**：将修改后的工作副本内容提交到SVN仓库，使其他开发者能够获取到这些更改。
5. **更新（Update）**：从SVN仓库中获取其他开发者提交的修改内容，以便更新自己的工作副本。
6. **合并（Merge）**：将不同的开发者提交的修改内容合并到同一个文件或目录中，以便协同开发。
7. **分支（Branch）**：从主干（即仓库中的trunk）中创建一个新的副本，以便进行并行开发或版本管理。
8. **标签（Tag）**：为某个特定版本的文件或目录打上标签，以便在未来能够快速找到该版本。

### SVN的启动模式

首先,在服务端进行SVN版本库的相关配置

手动新建版本库目录

```
mkdir /opt/svn
```

利用svn命令创建版本库

```
svnadmin create /opt/svn/runoob
```

使用命令svnserve启动服务

```
svnserve -d -r 目录--listen-port 端口号
```

* **-r:** 配置方式决定了版本库访问方式。
* **--listen-port:** 指定SVN监听端口，不加此参数，SVN默认监听3690

---

### SVN的指令

1. svn checkout：从远程仓库获取到本地仓库的目录  `svn checkout [路径] []`
2. svn update：更新本地代码库，以便与远程SVN仓库保持同步  `svn update [local-path]`
3. svn commit：将您对本地代码库所做的更改提交到远程SVN仓库中 `svn commit [local-path] -m "[message]"`
4. svn add：将一个新文件或目录添加到本地代码库中，并准备提交到远程SVN仓库 `svn add [local-path]`
5. svn delete/remove：从本地代码库中删除一个文件或目录，并准备提交到远程SVN仓库 `svn delete [local-path] -m[message]"`
6. svn status：检查本地代码库中的文件/目录的状态（基于版本控制）`svn status [local-path]`
7. svn diff：显示本地代码库中文件的变化 `svn diff [local-path]`
8. svn merge：合并两个版本之间的更改。`svn merge -r[old-version]:[new-version] [local-path]`


---
