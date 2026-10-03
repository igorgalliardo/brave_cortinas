# Brave Cortinas e Persianas

Landing page em Next.js 16, TypeScript e Tailwind CSS 4, com identidade preta, dourada e off-white.

## Executar

```sh
npm install
npm run dev
```

Abra http://localhost:3000. Produção: `npm run build` e `npm start`.

## Configuração

`lib/config.ts` centraliza WhatsApp, mensagem, endereço, cidade, CEP, siteUrl, catálogo de produtos e depoimentos. Telefone oficial: (19) 98276-8475. Endereço: R. Izaíra Ôngaro Zague, 136, Jardim São Carlos, Sumaré - SP, CEP 13170-110.

Configure NEXT_PUBLIC_SITE_URL antes do build de publicação: gera canonical e sitemap. O workflow do GitHub Pages configura essa variável automaticamente. E-mail, Instagram e horário não foram informados e ficam ocultos enquanto vazios. Schema LocalBusiness usa os dados reais fornecidos, sem avaliações, fundação ou outros dados inventados.

## Atendimento e localização

Todos os CTAs comerciais abrem https://wa.me/5519982768475 com mensagem codificada. O formulário prepara os dados em uma mensagem; o visitante confirma o envio no WhatsApp. Não há armazenamento de leads ou servidor de e-mail. Links Como chegar abrem o endereço no Google Maps em nova aba. O iframe do mapa só é montado quando a seção chega a 250 px do viewport.

## Identidade e imagens

A logo oficial está em public/images/logo/logo-brave.png, logo-brave-header.png e logo-brave-footer.png. Os PNGs usam o novo arquivo oficial horizontal (2172 × 724), preservado integralmente. O componente Brand exibe a imagem na proporção 3:1, sem recorte ou recriação das letras.

As fotografias são referências de interiores, sem alegar projetos executados pela Brave. Substitua-as pelos materiais oficiais. Os depoimentos reais autorizados podem ser adicionados ao array testimonials em lib/config.ts; enquanto vazio, a seção exibe uma mensagem neutra, sem avaliações fictícias. O catálogo products permite adicionar categorias com id, título, descrição e imagem, incluindo papel de parede.

Fontes hospedadas em public/fonts com font-display swap, fotos WebP locais com variantes menores e lazy loading. Respeita prefers-reduced-motion e possui galeria navegável por teclado.

## Validação

`npm run build` inclui compilação e verificação TypeScript. Resultados em VERIFICACAO.md.
## Hero cinematográfico

A imagem public/images/hero/cinematic.webp (e cinematic-small.webp) foi criada com a ferramenta integrada image_gen como referência conceitual, sem representar um projeto real da Brave. A logo oficial não foi recriada.

Prompt utilizado: fotografia editorial arquitetônica fotorrealista de uma sala contemporânea sofisticada, janelas do piso ao teto, cortinas de linho translúcidas e tecido taupe, sofá curvo claro, detalhes de nogueira e mesa de travertino; luz de fim de tarde, sombras naturais, composição horizontal 16:9, área tranquila à esquerda para o título; sem pessoas, texto, logo ou marca-d'água. O original gerado foi convertido para WebP em 1600 e 640 pixels para uso no site.


## GitHub Pages

Projeto preparado para exportação estática (`out/`) e publicação automática em `.github/workflows/pages.yml`. Consulte PUBLICAR-GITHUB-PAGES.md. O domínio agora é configurado por NEXT_PUBLIC_SITE_URL; o subdiretório por NEXT_PUBLIC_BASE_PATH. O workflow define ambos a partir do GitHub Pages. Para prévia estática local: `npm run build` e `npm run preview` (porta 3001).

Textos principais ampliados para 16 px, descrição do hero para 18 px no desktop e menus, botões e rodapé ajustados para facilitar a leitura. O botão flutuante exibe somente um ícone dourado do WhatsApp, com nome acessível para leitores de tela.

