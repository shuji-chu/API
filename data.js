const allApis = {
    sms: [
        { 
            id: 'sms_1', 
            name: '国内短信接码', 
            desc: '接收国内短信验证码', 
            method: 'POST', 
            endpoint: '/api/v1/sms/cn', 
            params: [{ name: 'phone', type: 'string', required: true, desc: '手机号' }], 
            example: '{"phone": "13800138000"}' 
        }
    ],
    query: [
        { 
            id: 'query_1', 
            name: 'IP查询', 
            desc: '查询IP归属地', 
            method: 'GET', 
            endpoint: '/api/v1/query/ip', 
            params: [{ name: 'ip', type: 'string', required: true, desc: 'IP地址' }], 
            example: 'GET /api/v1/query/ip?ip=8.8.8.8' 
        }
    ],
    service: [
        { 
            id: 'service_1', 
            name: '短链接生成', 
            desc: '生成短链接', 
            method: 'POST', 
            endpoint: '/api/v1/service/shorturl', 
            params: [{ name: 'url', type: 'string', required: true, desc: '原始链接' }], 
            example: '{"url": "https://example.com"}' 
        }
    ],
    free: [
        { 
            id: 'free_1', 
            name: '免费翻译', 
            desc: '免费翻译接口', 
            method: 'POST', 
            endpoint: '/api/v1/free/translate', 
            params: [{ name: 'text', type: 'string', required: true, desc: '文本' }], 
            example: '{"text": "你好"}' 
        }
    ]
};