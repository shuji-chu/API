// ============================================================
// 绘画类 + AI 对话接口（单独文件，方便维护）
// 以后加绘画/AI接口，只改这个文件
// ============================================================

// 绘画类
allApis.draw = [
  { id:'draw_1', name:'ModelScope 绘画', desc:'主力绘画，画质高', method:'POST', endpoint:'/api/draw/modelscope', params:[{name:'prompt',type:'string',required:true,desc:'绘画提示词'}], example:'{"prompt":"一只猫"}' },
  { id:'draw_2', name:'智谱绘画', desc:'智谱BigModel cogview-3-flash', method:'POST', endpoint:'/api/draw/zhipu', params:[{name:'prompt',type:'string',required:true,desc:'绘画提示词'}], example:'{"prompt":"一只猫"}' },
  { id:'draw_3', name:'智谱视频', desc:'智谱cogvideox-flash视频生成', method:'POST', endpoint:'/api/draw/zhipu-video', params:[{name:'prompt',type:'string',required:true,desc:'视频提示词'}], example:'{"prompt":"一只猫在跑"}' },
  { id:'draw_4', name:'Cloudflare 绘画', desc:'Cloudflare Workers AI flux-1-schnell', method:'POST', endpoint:'/api/draw/cf', params:[{name:'prompt',type:'string',required:true,desc:'绘画提示词'}], example:'{"prompt":"一只猫"}' },
  { id:'draw_5', name:'Agnes 绘画', desc:'Agnes AI agnes-image-2.1-flash', method:'POST', endpoint:'/api/draw/agnes', params:[{name:'prompt',type:'string',required:true,desc:'绘画提示词'}], example:'{"prompt":"一只猫"}' },
  { id:'draw_6', name:'Agnes 改图', desc:'Agnes AI agnes-image-2.5-flash', method:'POST', endpoint:'/api/draw/agnes-edit', params:[{name:'prompt',type:'string',required:true,desc:'修改提示词'},{name:'image_url',type:'string',required:true,desc:'原图地址'}], example:'{"prompt":"改成蓝色","image_url":"https://example.com/cat.jpg"}' }
];

// AI 对话类（追加到 service 里）
allApis.service = allApis.service.concat([
  { id:'ai_1', name:'DeepSeek 对话', desc:'DeepSeek AI 在线聊天', method:'POST', endpoint:'/api/nz/43', params:[{name:'text',type:'string',required:true,desc:'对话内容'}], example:'{"text":"你好"}' },
  { id:'ai_2', name:'智谱 GLM 对话', desc:'智谱 GLM 大模型对话', method:'POST', endpoint:'/api/zhipu/chat', params:[{name:'prompt',type:'string',required:true,desc:'对话内容'}], example:'{"prompt":"你好"}' },
  { id:'ai_3', name:'ModelScope 对话', desc:'ModelScope AI 对话', method:'POST', endpoint:'/api/modelscope/chat', params:[{name:'prompt',type:'string',required:true,desc:'对话内容'}], example:'{"prompt":"你好"}' }
]);