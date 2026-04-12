import { Shield, Lock, Eye, FileCheck, Server, UserCheck } from "lucide-react";

const pillars = [
  {
    icon: Lock,
    title: "Criptografia Ponta a Ponta",
    description:
      "Todas as conversas trafegam via WhatsApp Business API oficial (Meta), com criptografia E2E nativa. Nenhum dado de conversa é armazenado sem consentimento explícito.",
    color: "var(--brand-green)",
  },
  {
    icon: Shield,
    title: "Sem Acesso a Dados Sensíveis",
    description:
      "O agente nunca solicita dados bancários, senhas ou informações confidenciais. Configuramos barreiras rígidas para impedir solicitações indevidas em qualquer cenário.",
    color: "var(--brand-cyan)",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description:
      "O cliente decide se o agente se apresenta como IA ou não. Nunca enganamos o consumidor final. Toda configuração é documentada e auditável.",
    color: "var(--brand-yellow)",
  },
  {
    icon: FileCheck,
    title: "LGPD — Lei Geral de Proteção de Dados",
    description:
      "Operamos em conformidade com a LGPD (Lei 13.709/2018). Coletamos apenas dados necessários, com base legal definida. Você pode solicitar exclusão, portabilidade ou correção a qualquer momento.",
    color: "var(--brand-green)",
  },
  {
    icon: Server,
    title: "Infraestrutura Segura",
    description:
      "Hospedagem em servidores certificados (AWS/GCP), com backups automáticos, controle de acesso por perfil e monitoramento 24/7 de anomalias.",
    color: "var(--brand-cyan)",
  },
  {
    icon: UserCheck,
    title: "Direitos do Titular",
    description:
      "Qualquer usuário pode solicitar acesso, correção ou exclusão dos próprios dados. Respondemos em até 15 dias conforme exige a LGPD. Contato: wavebrainbot@gmail.com.",
    color: "var(--brand-yellow)",
  },
];

const lgpdRights = [
  { right: "Acesso", desc: "Ver quais dados temos sobre você" },
  { right: "Correção", desc: "Corrigir dados incorretos ou desatualizados" },
  { right: "Exclusão", desc: "Solicitar remoção dos seus dados" },
  { right: "Portabilidade", desc: "Receber seus dados em formato legível" },
  { right: "Revogação", desc: "Retirar consentimento a qualquer momento" },
  { right: "Oposição", desc: "Contestar tratamento de dados indevido" },
];

export default function Security() {
  return (
    <section id="seguranca" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm mb-6"
            style={{
              borderColor: "rgba(57,255,20,0.3)",
              background: "rgba(57,255,20,0.08)",
              color: "var(--brand-green)",
            }}
          >
            <Shield size={14} />
            <span>Segurança & Privacidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Seus dados e dos seus clientes{" "}
            <span style={{ color: "var(--brand-green)" }}>protegidos</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto leading-relaxed">
            Cybersegurança e conformidade LGPD não são opcionais — são fundação.
            Cada configuração do seu agente segue padrões rigorosos de proteção de dados.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="gradient-border rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${p.color}15` }}
              >
                <p.icon size={20} style={{ color: p.color }} />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* LGPD rights table */}
        <div
          className="rounded-3xl p-6 sm:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(57,255,20,0.04) 100%)",
            border: "1px solid rgba(0,229,255,0.2)",
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,229,255,0.15)" }}
            >
              <FileCheck size={20} style={{ color: "var(--brand-cyan)" }} />
            </div>
            <div>
              <h3 className="text-white font-bold">Seus direitos garantidos pela LGPD</h3>
              <p className="text-white/40 text-xs">Lei 13.709/2018 — em vigor desde setembro de 2020</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {lgpdRights.map((r) => (
              <div
                key={r.right}
                className="rounded-xl p-3 bg-white/[0.03] border border-white/5"
              >
                <p
                  className="font-bold text-sm mb-1"
                  style={{ color: "var(--brand-cyan)" }}
                >
                  {r.right}
                </p>
                <p className="text-white/50 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/40">
            <span>Para exercer seus direitos: <span className="text-white/70">wavebrainbot@gmail.com</span></span>
            <span>Resposta em até 15 dias conforme LGPD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
