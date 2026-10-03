# Verificação da atualização — dados reais e identidade oficial

- Build de produção aprovado em Next.js 16.3.8, com TypeScript.
- Logo oficial exibida como imagem no header e footer, sem recriação tipográfica.
- Paleta preta, dourada (#D4AF37 / #E0C064) e off-white.
- 15 links comerciais inspecionados: todos usam wa.me/5519982768475 com mensagem codificada e nova aba.
- Links Como chegar usam o endereço completo fornecido em Google Maps e target=_blank.
- Mapa ausente do DOM no carregamento inicial; iframe montado ao aproximar a seção do viewport.
- Schema LocalBusiness contém nome, telefone, logradouro, bairro, cidade, estado, CEP e país reais; sem dados não fornecidos.
- Title e meta description atualizados para Sumaré.
- Menu mobile abre, navega e fecha corretamente.
- Layout verificado em desktop de 1280 px e mobile de 360/390 px, sem overflow horizontal.
- Imagens inspecionadas no navegador: nenhuma quebrada. Hero conceitual gerado, convertido para WebP e armazenado localmente.
- Campo de telefone: número formatado aceito, texto inválido rejeitado por pattern.
- Nenhuma mensagem real enviada. O formulário prepara o pedido para o usuário confirmar no WhatsApp.
- Depoimentos fictícios removidos; estrutura pronta para avaliações reais autorizadas.

## Pendências editoriais

Configure o domínio público em lib/config.ts antes de publicar para gerar sitemap/canonical e URLs absolutas definitivas. E-mail, Instagram e horário permanecem ocultos até serem fornecidos. Substitua imagens de referência por fotos oficiais quando disponíveis. Não houve publicação externa nem auditoria Lighthouse/WCAG completa.

## Ajustes de legibilidade e preparação para GitHub Pages

- Textos principais com 16 px; descrição do hero 18 px no desktop; interface e textos secundários ampliados.
- Botão flutuante de WhatsApp dourado, sem texto visível e com aria-label.
- Build estático aprovado com NEXT_PUBLIC_BASE_PATH=/brave-cortinas; fontes empacotadas e fotos/logos com o prefixo correto.
- Prévia exportada testada no navegador: nenhuma foto quebrada, fonte carregada, sem overflow em 1280/360 px, menu mobile e expansão da galeria funcionando.
- Workflow de GitHub Pages preparado. Publicação remota depende do repositório informado pelo usuário.
