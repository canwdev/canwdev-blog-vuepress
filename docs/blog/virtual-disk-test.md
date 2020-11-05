# 虚拟磁盘用于前端开发的可能

考虑到现代前端开发使用 npm 会在 node_modules 中产生成千上万的小文件，这使得系统迁移变成了一项漫长且痛苦的工作。而这些恰好考验的是硬盘的 4KB 小文件读写能力，于是我想能不能通过创建虚拟磁盘的方式，在虚拟磁盘中完成项目开发，迁移的时候直接复制虚拟磁盘文件，从而解决这个问题。

首先我们来看看在固态硬盘下的 AS SSD Benchmak 跑分：

![计算机生成了可选文字: 」ASSSD巳n〔卜m2．0731534247 FileEditView ToolsLanguageHelp 亡mlGSTONSÅ4囗化12囗G KINGSTON S8FK61El iaStorAC_OK 5548K一OK 11179Ga Seq 4K 4K-64Thrd Acc.time Score: 1〔 Read: Write. 07 ．05MB/',.26．70MB/ 04 00458MB s'015．02MB/s 18．95MB/ 265 ．369](./virtual-disk-test.assets/clip_image001.png)

然后我通过 Windows 磁盘管理工具新建了一块 10GB 的虚拟磁盘（vhd），选的是动态扩展大小，再进行跑分：

![计算机生成了可选文字: 」ASSSD巳n〔卜m2．0731534247 FileEditView ToolsLanguageHelp “Et虚拟煮盘 虚拟盘 Microsoft vhdmp_OK 15334K一OK 100Ga Seq 4K 4K-64Thrd Acc.time Score: 1〔 Read: 84．36MB/ 47．27MB/ 050 Write. 057．53MB/ 764 89．51MB/ ．360](./virtual-disk-test.assets/clip_image002.png)

第一次跑分：由于磁盘是动态分配的，AS SSD 写入 1GB 的数据需要事实扩展大小，所以速度不如第二次

![计算机生成了可选文字: 」ASSSD巳n〔卜m2．0731534247 FileEditView ToolsLanguageHelp “Et虚拟煮盘 虚拟盘 Microsoft vhdmp_OK 15334K一OK 100Ga Seq 4K 4K-64Thrd Acc.time Score: 1〔 Read: 0 Write. 93．39MB/ 43．03MB/ 01§9．59MB/ 0孬161 s'077．25MB/s 054 ．239](./virtual-disk-test.assets/clip_image003.png)

第二次跑分才能体现真实成绩，可以看出虽然连续读写速度不如物理硬盘，但 4K 读写速度居然比物理硬盘要快！~~(微软NB)~~
 

后面我还用 VMware Workstation 创建、分区并挂载了 VMDK，可惜只能在资源管理器里看到，无论是 AS SSD 还是磁盘管理都无法识别，所以没能跑分。

结论：

- 前端开发过程中webpack一般都只是操作代码一类的 4KB 小文件，所以使用虚拟硬盘，理论上可以胜任。但是要注意数据丢失的可能性，所以最好通过 git 进行备份，永远不要只在本地保存代码。
- ~~使用 Linux 性能更高~~

另外，在机械硬盘跑分：

![计算机生成了可选文字: 」ASSSD巳n〔卜m2．0731534247 FileEditView ToolsLanguageHelp STI囗囗囗49一2172 STIO開LM049．2GH172Read: 1〔 SDM2 iaStorAC_OK 124K一OK g3151Ga Seq 4K 4K-64Thrd Acc.time Score: 51．49MB/',. 0．00MB/s 0．00MB/s 0．000ms Write. 131．88MB/s 0．00MB/s 0．000ms 17](./virtual-disk-test.assets/clip_image004.png)

太慢了，跑了17分钟4K写入还没跑完👎
