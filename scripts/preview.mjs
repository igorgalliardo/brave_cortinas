import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('out');
const base=(process.env.NEXT_PUBLIC_BASE_PATH||'').replace(/\/$/,'');
const port=Number(process.env.PORT||3001);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.ttf':'font/ttf','.woff2':'font/woff2','.xml':'application/xml'};
http.createServer(async(req,res)=>{
 try{
  let route=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(base && route!==base && !route.startsWith(`${base}/`)){res.writeHead(404);res.end('Not found');return;}
  route=route.slice(base.length);
  let file=path.resolve(root,`.${route || '/'}`);
  if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);res.end();return;}
  if((await stat(file)).isDirectory())file=path.join(file,'index.html');
  const body=await readFile(file);res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(body);
 }catch{res.writeHead(404);res.end('Not found');}
}).listen(port,'127.0.0.1',()=>console.log(`Prévia estática: http://localhost:${port}${base}/`));
