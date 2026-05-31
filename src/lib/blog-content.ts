export type ContentType = "blog" | "article"

export interface BlogContent {
  id: number
  type: ContentType
  title: string
  preview: string
  content: string
  publishedAt: string
  readTime: string
  category: string
  author: string
  insights: string[]
  tags: string[]
}

export const blogContents: BlogContent[] = [
  {
    id: 1,
    type: "article",
    title: "Como revisar contratos antes de assinar e reduzir riscos jurídicos",
    preview: "Um checklist prático para identificar cláusulas sensíveis em contratos empresariais e civis.",
    content:
      "A revisão contratual começa pela leitura dos pontos de maior impacto financeiro e operacional: multa, rescisão, foro, prazo, garantias e obrigações de confidencialidade. Em seguida, é importante verificar se o contrato realmente reflete a negociação realizada entre as partes.\n\nQuando há desalinhamento entre proposta e contrato, o risco não é apenas jurídico, mas também reputacional e comercial. A prática recomendada é sempre avaliar cenários de inadimplemento, hipóteses de encerramento antecipado e eventual responsabilização por danos indiretos.\n\nUma revisão cuidadosa costuma reduzir litígios, evitar interpretações ambíguas e fortalecer a posição negocial do cliente antes da assinatura.",
    publishedAt: "2026-05-21",
    readTime: "6 min de leitura",
    category: "Contratos",
    author: "Equipe Oliveira",
    insights: [
      "Leia cláusulas de multa e rescisão antes das demais",
      "Confirme se o foro escolhido faz sentido estratégico",
      "Formalize alterações fora do texto principal por aditivo",
    ],
    tags: ["Contratos", "Empresarial", "Risco Jurídico"],
  },
  {
    id: 2,
    type: "blog",
    title: "Provas digitais no processo: prints, e-mails e mensagens valem?",
    preview: "Entenda como organizar evidências eletrônicas para que tenham maior força probatória.",
    content:
      "Provas digitais são cada vez mais comuns em disputas civis, trabalhistas e empresariais. Prints de tela, e-mails, mensagens e arquivos compartilhados podem ser úteis, desde que preservem contexto, origem e integridade.\n\nO ideal é reunir o máximo de elementos possíveis: data, horário, sequência completa das conversas e, quando necessário, ata notarial ou extração técnica do conteúdo. A prova isolada, sem contexto, tende a perder força diante de uma contestação bem estruturada.\n\nOrganização e autenticidade fazem diferença. Em casos relevantes, o assessoramento jurídico ajuda a escolher o formato de preservação adequado antes que a evidência seja questionada.",
    publishedAt: "2026-05-18",
    readTime: "5 min de leitura",
    category: "Provas Digitais",
    author: "Redação Jurídica",
    insights: [
      "Guarde a conversa completa, não apenas um recorte",
      "Preserve metadados e contexto da comunicação",
      "Considere ata notarial em situações sensíveis",
    ],
    tags: ["Prova Digital", "Processo", "Tecnologia"],
  },
  {
    id: 3,
    type: "article",
    title: "Recuperação de crédito empresarial: quando agir e como negociar",
    preview: "Estratégias para cobrar de forma eficiente sem romper de vez a relação comercial.",
    content:
      "A recuperação de crédito não se resume à cobrança judicial. Em muitos casos, uma proposta bem estruturada de negociação evita a escalada do conflito e aumenta a chance de recebimento.\n\nAntes de ajuizar uma demanda, vale mapear documentos, conferir prazos prescricionais e avaliar o comportamento de pagamento do devedor. Se houver espaço para composição, a solução pode passar por parcelamento, desconto condicionado ou garantias adicionais.\n\nQuando a negociação falha, a atuação contenciosa precisa ser rápida, técnica e alinhada ao valor recuperável. A escolha da medida correta impacta diretamente o custo do processo e a efetividade da cobrança.",
    publishedAt: "2026-05-16",
    readTime: "7 min de leitura",
    category: "Cobrança",
    author: "Equipe Oliveira",
    insights: [
      "Mapeie documentos e prazos antes de cobrar",
      "Use negociação como ferramenta estratégica",
      "Compare custo do processo com chance real de recuperação",
    ],
    tags: ["Cobrança", "Crédito", "Negociação"],
  },
  {
    id: 4,
    type: "blog",
    title: "Jornada de trabalho e horas extras: erros mais comuns na gestão",
    preview: "Boas práticas para reduzir passivo trabalhista e evitar autuações por registros inconsistentes.",
    content:
      "A gestão de jornada exige consistência entre escala, banco de horas, registros e pagamentos. Problemas recorrentes surgem quando a empresa adota controles formais, mas não os aplica corretamente na rotina.\n\nA inconsistência nos registros pode gerar presunções desfavoráveis e elevar o risco de condenações por horas extras, intervalos suprimidos e adicionais. Em muitos casos, a prevenção depende mais de disciplina operacional do que de grandes mudanças estruturais.\n\nTreinamento de lideranças, auditoria periódica e revisão dos controles internos costumam ser as medidas mais eficientes para conter passivos.",
    publishedAt: "2026-05-13",
    readTime: "6 min de leitura",
    category: "Trabalhista",
    author: "Redação Jurídica",
    insights: [
      "Jornada inconsistente é um dos maiores riscos",
      "Banco de horas precisa de controle e prova documental",
      "Auditoria preventiva reduz passivo trabalhista",
    ],
    tags: ["Trabalhista", "Jornada", "Compliance"],
  },
  {
    id: 5,
    type: "article",
    title: "LGPD para pequenas empresas: o básico que já precisa estar funcionando",
    preview: "Uma visão objetiva sobre dados pessoais, consentimento e medidas mínimas de adequação.",
    content:
      "A adequação à LGPD não exige soluções extravagantes, mas requer organização mínima. É importante mapear quais dados a empresa coleta, com qual finalidade, quem acessa essas informações e por quanto tempo elas são armazenadas.\n\nPolíticas internas, cláusulas contratuais e respostas a titulares precisam estar alinhadas com a prática real da empresa. Sem isso, a conformidade fica apenas no papel.\n\nO objetivo não é burocratizar a operação, mas reduzir risco jurídico e dar previsibilidade ao tratamento de dados pessoais em atividades cotidianas.",
    publishedAt: "2026-05-10",
    readTime: "4 min de leitura",
    category: "LGPD",
    author: "Equipe Oliveira",
    insights: [
      "Mapeie os dados coletados e sua finalidade",
      "Faça políticas compatíveis com a operação real",
      "Treine a equipe sobre respostas a titulares",
    ],
    tags: ["LGPD", "Dados Pessoais", "Compliance"],
  },
  {
    id: 6,
    type: "blog",
    title: "Sociedade empresária: pontos críticos no contrato social que evitam conflito",
    preview: "Cláusulas sobre retirada, sucessão e administração podem evitar disputas futuras entre sócios.",
    content:
      "O contrato social é o documento que organiza o jogo empresarial. Se ele estiver genérico demais, conflitos societários tendem a aparecer justamente nos momentos de maior pressão.\n\nCláusulas sobre pró-labore, retirada de sócios, sucessão, administração e resolução de conflitos ajudam a reduzir incertezas. Também é recomendável revisar quóruns de deliberação e regras de saída para que o negócio tenha previsibilidade em cenários de crise.\n\nUma boa estrutura societária protege a empresa e evita que divergências pessoais comprometam o funcionamento da operação.",
    publishedAt: "2026-05-08",
    readTime: "5 min de leitura",
    category: "Societário",
    author: "Redação Jurídica",
    insights: [
      "O contrato social deve refletir a realidade do negócio",
      "Regras de saída precisam ser claras desde o início",
      "Cláusulas de resolução de conflito evitam litígios longos",
    ],
    tags: ["Societário", "Contrato Social", "Empresarial"],
  },
]