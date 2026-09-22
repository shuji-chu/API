export async function onRequest(context) {
  // 允许前端跨域调用
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // 处理浏览器的预检请求
  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // 这里可以写你的业务逻辑（查余额、扣费、调用第三方API）
  const data = {
    success: true,
    message: "你的后端接口已经成功运行！",
    time: new Date().toISOString()
  };

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders
    }
  });
}