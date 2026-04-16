import https from 'https';

https.get('https://api.allorigins.win/raw?url=https://i.postimg.cc/fTQ9jrKd/year-2026-year-2025-year-2024-animated-production-art-promotional-art-no-t-s-1635970359-proces.png', (res) => {
  console.log('allorigins status:', res.statusCode);
});
