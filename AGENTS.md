<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# WaveBRAinBot Landing Page — Agent Context

## Project

Site público de vendas da WaveBRAinBot. Estático (SSG) — sem server actions, sem banco de dados.

- **Path:** `E:\VibeCoding\landingpage-wavebrainbot`
- **GitHub:** https://github.com/WaveBRAinBot/wavebrainbot-landing
- **Vercel:** https://landingpage-wavebrainbot.vercel.app
- **Domínio futuro:** wavebrainbot.com.br

## Stack

Next.js 16 App Router (SSG), TypeScript, Tailwind CSS, shadcn/ui (base-ui v1), Sonner, Lucide React, Canvas API.

## Brand

Cores CSS vars:
- `--brand-green: #39ff14` — neon verde (CTAs, destaques)
- `--brand-cyan: #00e5ff` — cyan (accents)
- `--brand-yellow: #ffe600` — amarelo (stats)
- `--brand-purple: #a855f7` — roxo (urgência, moderação)
- `--name-wave: #5eafc6` | `--name-brain: #7ab648` | `--name-bot: #c8922a`

Nome visual: Wave(`#5eafc6`) **BRA**(`#7ab648`) in(branco) **Bot**(`#c8922a`) — sem neon no nome.

## Regras Críticas

### 1. SSG apenas — sem server-side
Não usar `getServerSideProps`, server actions, ou qualquer lógica de servidor. Tudo estático.

### 2. Componentes pesados: lazy load obrigatório
`CosmicBackground`, `ExitIntent` e similares → sempre `dynamic(() => import(...), { ssr: false })`.

### 3. Build antes de commitar
```bash
npm run build   # deve passar com zero erros
```

### 4. Git — commits semânticos
`feat` | `fix` | `refactor` | `chore` | `docs`

## Seções do Site

Hero → SpeedToLead → Benefícios → Niches → Como Funciona → Agente de IA → Onboarding → Para Quem → Não É Pra Quem → Planos → Security/LGPD → FAQ → CTA → Footer

Blog: 4 artigos publicados em `/blog/[slug]`

## Planos Publicados

| Plano | Mensal | Setup |
|-------|--------|-------|
| Essencial | R$ 799 | R$ 700 |
| Performance | R$ 1.499 | R$ 1.000 |
| Automation | R$ 2.499 | R$ 1.400 |

## Nucleo Vault

Decisões e aprendizados em `E:\VibeCoding\Nucleo\`:
- Decisões → `03-Decisoes/`
- Aprendizados → `04-Aprendizados/`
- Estado do projeto → `01-Projetos/WaveBrainBot/index.md`
