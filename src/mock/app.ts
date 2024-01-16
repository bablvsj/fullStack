import Mock from "mockjs";
// import qs from "qs";

export default () => {
  // 用户登录
  Mock.mock(/\/api\/login/, () => {
    return {
      msg: "操作成功",
      code: 200,
      token:
        "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6Ijc3NWY0NTFiLTIwZjQtNDdmOS1hOTVhLWI0MzY1NmM2MjYxYyJ9.GtTeGti5GkRi_SHkGXvR8-56ruuamYyE3sZgHUf5Ci5AjiYJrGE7Rh-3kuUkXi7aE6_P_PXAo-oleykoaPoRUQ",
    };
  });

  // 菜单获取
  Mock.mock(/\/api\/getInfo/, () => {
    return {
      msg: "操作成功",
      code: 200,
      permissions: ["*:*:*"],
      roles: ["admin"],
      user: {
        createBy: "admin",
        createTime: "2023-04-23 16:11:38",
        updateBy: null,
        updateTime: null,
        remark: "管理员",
        userId: 1,
        deptId: 103,
        userName: "admin",
        nickName: "1",
        email: "1",
        phonenumber: "15888888888",
        sex: "1",
        avatar: "",
        password:
          "$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2",
        status: "0",
        delFlag: "0",
        loginIp: "111.206.214.33",
        loginDate: "2023-09-20T10:26:07.000+08:00",
        dept: {
          createBy: null,
          createTime: null,
          updateBy: null,
          updateTime: null,
          remark: null,
          deptId: 103,
          parentId: 101,
          ancestors: "0,100,101",
          deptName: "研发部门",
          orderNum: 1,
          leader: "1",
          phone: null,
          email: null,
          status: "0",
          delFlag: null,
          parentName: null,
          children: [],
        },
        roles: [
          {
            createBy: null,
            createTime: null,
            updateBy: null,
            updateTime: null,
            remark: null,
            roleId: 1,
            roleName: "超级管理员",
            roleKey: "admin",
            roleSort: 1,
            dataScope: "1",
            menuCheckStrictly: false,
            deptCheckStrictly: false,
            status: "0",
            delFlag: null,
            flag: false,
            menuIds: null,
            deptIds: null,
            permissions: null,
            admin: true,
          },
        ],
        roleIds: null,
        postIds: null,
        roleId: null,
        admin: true,
      },
    };
  });

  Mock.mock(/\/api\/getRouters/, () => {
    return {
      msg: "操作成功",
      code: 200,
      data: [
        {
          name: "System",
          path: "/system",
          hidden: false,
          redirect: "noRedirect",
          component: "Layout",
          alwaysShow: true,
          meta: {
            title: "系统管理",
            icon: "system",
            noCache: false,
            link: null,
          },
          children: [
            {
              name: "User",
              path: "user",
              hidden: false,
              component: "system/user/index",
              meta: {
                title: "用户管理",
                icon: "user",
                noCache: false,
                link: null,
              },
            },
            {
              name: "Role",
              path: "role",
              hidden: false,
              component: "system/role/index",
              meta: {
                title: "角色管理",
                icon: "peoples",
                noCache: false,
                link: null,
              },
            },
            {
              name: "Menu",
              path: "menu",
              hidden: false,
              component: "system/menu/index",
              meta: {
                title: "菜单管理",
                icon: "tree-table",
                noCache: false,
                link: null,
              },
            },
          ],
        },
      ],
    };
  });
};
