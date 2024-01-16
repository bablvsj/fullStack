import Mock from "mockjs";

export default () => {
  // 测试数据
  Mock.mock(/\/system\/dict\/data\/type\/sys_normal_disable/, () => ({
    "msg": "操作成功",
    "code": 200,
    "data": [{
      "searchValue": null,
      "createBy": "admin",
      "createTime": "2022-08-01 12:01:42",
      "updateBy": null,
      "updateTime": null,
      "remark": "显示菜单",
      "params": {
        "@type": "java.util.HashMap"
      },
      "dictCode": 4,
      "dictSort": 1,
      "dictLabel": "显示",
      "dictValue": "0",
      "dictType": "sys_show_hide",
      "cssClass": "",
      "listClass": "primary",
      "isDefault": "Y",
      "status": "0",
      "default": true
    }, {
      "searchValue": null,
      "createBy": "admin",
      "createTime": "2022-08-01 12:01:42",
      "updateBy": null,
      "updateTime": null,
      "remark": "隐藏菜单",
      "params": {
        "@type": "java.util.HashMap"
      },
      "dictCode": 5,
      "dictSort": 2,
      "dictLabel": "隐藏",
      "dictValue": "1",
      "dictType": "sys_show_hide",
      "cssClass": "",
      "listClass": "danger",
      "isDefault": "N",
      "status": "0",
      "default": false
    }]
  }));


};