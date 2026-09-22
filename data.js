const allApis = {
  sms: [
    { id:'sms_1', name:'国内短信接码', desc:'接收国内短信验证码', method:'POST', endpoint:'/api/v1/sms/cn', params:[{name:'phone',type:'string',required:true,desc:'手机号'}], example:'{"phone":"13800138000"}' },
    { id:'sms_2', name:'国际短信接码', desc:'接收国际短信验证码', method:'POST', endpoint:'/api/v1/sms/global', params:[{name:'country',type:'string',required:true,desc:'国家代码'}], example:'{"country":"US"}' }
  ],
  query: [
    { id:'query_1', name:'IP查询', desc:'查询IP归属地', method:'GET', endpoint:'/api/v1/query/ip', params:[{name:'ip',type:'string',required:true,desc:'IP地址'}], example:'{"ip":"8.8.8.8"}' },
    { id:'query_2', name:'天气查询', desc:'查询城市天气', method:'GET', endpoint:'/api/v1/query/weather', params:[{name:'city',type:'string',required:true,desc:'城市名'}], example:'{"city":"北京"}' },
    { id:'query_3', name:'手机归属地', desc:'查询手机号归属地', method:'GET', endpoint:'/api/v1/query/phone', params:[{name:'phone',type:'string',required:true,desc:'手机号'}], example:'{"phone":"13800138000"}' }
  ],
  service: [
    { id:'service_1', name:'短链接生成', desc:'生成短链接', method:'POST', endpoint:'/api/v1/service/shorturl', params:[{name:'url',type:'string',required:true,desc:'原始链接'}], example:'{"url":"https://example.com"}' },
    { id:'service_2', name:'二维码生成', desc:'生成二维码图片', method:'POST', endpoint:'/api/v1/service/qrcode', params:[{name:'text',type:'string',required:true,desc:'内容'}], example:'{"text":"https://example.com"}' }
  ],
  free: [
    { id:'free_1', name:'免费翻译', desc:'免费翻译接口', method:'POST', endpoint:'/api/v1/free/translate', params:[{name:'text',type:'string',required:true,desc:'文本'}], example:'{"text":"你好"}' },
    { id:'free_2', name:'免费热搜', desc:'获取全网热搜', method:'GET', endpoint:'/api/v1/free/hot', params:[], example:'{}' }
  ]
};