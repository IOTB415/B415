# B415
B415

使用说明：整体框架基于angular7构建而成，如需修改请参考angular7相关内容。

文件说明：

----assets 

​	----db存放相关介绍

​		----study 存放style介绍的详细文件

​		----team 存放team介绍的详细文件

​		----study.json 存放主页面中study索引

​		----team.json 存放主页面中team索引



study.json 

| 字段名      | 用途     | 其他                                                         |
| ----------- | -------- | ------------------------------------------------------------ |
| name        | 名称     |                                                              |
| id          | id编码   | id要与study文件夹中的文件名一致，根据此id作为跳转地址。      |
| imgurl      | 图片地址 | 支持两种方式，网络地址；将图片放入db/imgs文件夹中按照实例地址引用。 |
| description | 摘要介绍 |                                                              |
| url         | 没什么用 |                                                              |

team.json

和study.json实现方式一样的