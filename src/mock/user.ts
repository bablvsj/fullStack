import Mock from 'mockjs'


const Random = Mock.Random

// post请求,带参数,参数会在data中返回,会返回url,type,body三个参数,可以把data打印出来看看
Mock.mock('http://localhost:8080/test/login', 'post', (data) => {
   const users = [
       {
           name: 'superadmin',
           password: '123456'
       },
       {
            name: 'admin',
            password: '123456'
        },
        {
            name: 'seller',
            password: '123456'
        },
        {
            name: '123456',
            password: '123456'
        },
        {
            name: 'zhangzhiwen',
            password: '123456'
        }
   ]  

  // 请求传过来的参数在body中,传回的是json字符串,需要转义一下
  const info= JSON.parse(data.body)
  
  users.forEach((item,index) => {
    if (info.username === item.name && info.password === item.password) {
        return {
            ok: true,
            message: '登录成功',
            data: info
        };
    } else {
        return {
            ok: false,
            message: '用户名或密码错误',
            data: info
        };
    }
  })
  


  
})