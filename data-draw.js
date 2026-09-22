// ============================================================
// 绘画类 + AI对话（追加到 allApis，不能覆盖）
// ============================================================

allApis.draw = [
  { id:'draw_1', name:'ModelScope 绘画', desc:'主力绘画，画质高，模型Tongyi-MAI/Z-Image-Turbo', price:0.05, method:'POST', endpoint:'/api/draw/modelscope',
    params:[{name:'prompt',type:'string',required:true,desc:'绘画提示词'}],
    responseParams:[{name:'url',type:'string',desc:'图片URL'}],
    example:'{"prompt":"一只猫"}', response:'{"url":"https://..."}' },

  { id:'draw_2', name:'智谱绘画', desc:'智谱BigModel cogview-3-flash', price:0.05, method:'POST', endpoint:'/api/draw/zhipu',
    params:[{name:'prompt',type:'string',required:true,desc:'绘画提示词'}],
    responseParams:[{name:'url',type:'string',desc:'图片URL'}],
    example:'{"prompt":"一只猫"}', response:'{"url":"https://..."}' },

  { id:'draw_3', name:'智谱视频', desc:'智谱cogvideox-flash视频生成', price:0.10, method:'POST', endpoint:'/api/draw/zhipu-video',
    params:[{name:'prompt',type:'string',required:true,desc:'视频提示词'}],
    responseParams:[{name:'url',type:'string',desc:'视频URL'}],
    example:'{"prompt":"一只猫在跑"}', response:'{"url":"https://..."}' },

  { id:'draw_4', name:'Cloudflare 绘画', desc:'Cloudflare Workers AI flux-1-schnell', price:0.03, method:'POST', endpoint:'/api/draw/cf',
    params:[{name:'prompt',type:'string',required:true,desc:'绘画提示词'}],
    responseParams:[{name:'url',type:'string',desc:'图片URL'}],
    example:'{"prompt":"一只猫"}', response:'{"url":"https://..."}' },

  { id:'draw_5', name:'Agnes 绘画', desc:'Agnes AI agnes-image-2.1-flash', price:0.04, method:'POST', endpoint:'/api/draw/agnes',
    params:[{name:'prompt',type:'string',required:true,desc:'绘画提示词'}],
    responseParams:[{name:'url',type:'string',desc:'图片URL'}],
    example:'{"prompt":"一只猫"}', response:'{"url":"https://..."}' },

  { id:'draw_6', name:'Agnes 改图', desc:'Agnes AI agnes-image-2.5-flash 改图', price:0.05, method:'POST', endpoint:'/api/draw/agnes-edit',
    params:[{name:'prompt',type:'string',required:true,desc:'修改提示词'},{name:'image_url',type:'string',required:true,desc:'原图地址'}],
    responseParams:[{name:'url',type:'string',desc:'新图URL'}],
    example:'{"prompt":"改成蓝色","image_url":"https://example.com/cat.jpg"}', response:'{"url":"https://..."}' }
];