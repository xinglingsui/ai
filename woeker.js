export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }

    const url = 'https://api.deepseek.com/v1/chat/completions';
    const API_KEY = env.DEEPSEEK_API_KEY;

    // 设置CORS头
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });

    try {
      if (request.method === 'POST') {
        const userData = await request.json();
        
        const payload = {
          model: "deepseek-chat",
          messages: userData.messages,
          temperature: 0.5,
          max_tokens: 1024,
        };

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), { headers });
      }

      return new Response('Method not allowed', { status: 405, headers });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers
      });
    }
  }
};

function handleOptions(request) {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

