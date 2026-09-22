export async function onRequest(context) {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: cors });
  }

  const url = new URL(context.request.url);
  const p = url.pathname.split('/').filter(Boolean);
  const platform = p[1];
  const subPath = p.slice(2).join('/');
  const qs = url.search;
  const method = context.request.method;

  let target = '';
  const headers = new Headers(context.request.headers);
  headers.delete("host");

  if (platform === 'uapi') {
    target = `https://uapis.cn/api/v1/${subPath}${qs}`;
    headers.set("Authorization", `Bearer ${context.env.UAPI_KEY}`);
  } else if (platform === 'zhipu') {
    target = `https://open.bigmodel.cn/api/paas/v4/${subPath}${qs}`;
    headers.set("Authorization", `Bearer ${context.env.ZHIPU_KEY}`);
  } else if (platform === 'modelscope') {
    target = `https://api-inference.modelscope.cn/v1/${subPath}${qs}`;
    headers.set("Authorization", `Bearer ${context.env.MODELSCOPE_KEY}`);
  } else if (platform === 'agnes') {
    target = `https://apihub.agnes-ai.com/v1/${subPath}${qs}`;
    headers.set("Authorization", `Bearer ${context.env.AGNES_KEY}`);
  } else if (platform === 'nz') {
    target = `http://www.apitg.net/api/${subPath}${qs}`;
    headers.set("Authorization", `Bearer ${context.env.NZ_KEY}`);
  } else if (platform === 'nzsms') {
    target = `https://nzsms.com/api/${subPath}${qs}`;
    headers.set("Authorization", `Bearer ${context.env.NZSMS_KEY}`);
  } else if (platform === 'cf') {
    const model = '@cf/' + p.slice(3).join('/');
    target = `https://api.cloudflare.com/client/v4/accounts/${context.env.CF_ACCOUNT_ID}/ai/run/${model}${qs}`;
    headers.set("Authorization", `Bearer ${context.env.CF_API_TOKEN}`);
  } else if (platform === 'tron') {
    target = `https://api.trongrid.io/${subPath}${qs}`;
    headers.set("TRON-PRO-API-KEY", context.env.TRON_KEY);
  } else if (platform === 'mail') {
    target = `https://api.resend.com/${subPath}${qs}`;
    headers.set("Authorization", `Bearer ${context.env.RESEND_KEY}`);
  } else {
    return new Response(JSON.stringify({ error: "未配置的平台" }), {
      status: 404,
      headers: { "Content-Type": "application/json", ...cors }
    });
  }

  try {
    const body = (method === "POST" || method === "PUT") ? await context.request.text() : null;
    const resp = await fetch(target, { method, headers, body });
    const data = await resp.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json", ...cors }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...cors }
    });
  }
}