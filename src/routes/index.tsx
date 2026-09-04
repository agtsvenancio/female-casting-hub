import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.webp";
import model1 from "@/assets/model-1.jpg";
import model2 from "@/assets/model-2.jpg";
import model3 from "@/assets/model-3.jpg";
import model4 from "@/assets/model-4.jpg";
import model5 from "@/assets/model-5.jpg";
import model6 from "@/assets/model-6.jpg";
import model7 from "@/assets/model-7.jpg";
import model8 from "@/assets/model-8.jpg";
import model9 from "@/assets/model-9.jpg";

const WHATSAPP =
  "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20me%20candidatar%20ao%20casting%20feminino%20da%20BOSSA%20Mgt.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casting Feminino BOSSA Mgt | Inscreva-se" },
      {
        name: "description",
        content:
          "A BOSSA Mgt está selecionando novas modelos femininas para campanhas, editoriais e desfiles. Envie sua candidatura pelo WhatsApp.",
      },
      { property: "og:title", content: "Casting Feminino BOSSA Mgt" },
      {
        property: "og:description",
        content:
          "Agência de modelos BOSSA Mgt abre casting feminino. Sem experiência prévia necessária. Fale com a equipe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ label = "Quero me candidatar" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-brand px-7 py-4 text-sm font-semibold tracking-tight text-brand-foreground transition-colors hover:bg-foreground"
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-5 py-5 sm:px-10">
        <img src={logo} alt="BOSSA Mgt" className="h-6 w-auto sm:h-7" />
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-xs font-medium tracking-tight underline underline-offset-4 sm:text-sm"
        >
          Falar com a agência
        </a>
      </header>

      <main>
        {/* HERO */}
        <section className="grid gap-10 border-b border-border lg:grid-cols-2 lg:gap-0">
          <div className="flex flex-col justify-between px-5 pt-12 pb-10 sm:px-10 lg:py-16">
            <div>
              <p className="label-eyebrow">Casting feminino — 2026</p>
              <h1 className="tight-display mt-6 text-[3.25rem] sm:text-7xl xl:text-8xl">
                Seu rosto
                <br />
                pode ser a
                <br />
                próxima capa<span className="text-brand">.</span>
              </h1>
              <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
                A BOSSA Mgt está selecionando novas modelos femininas para campanhas,
                editoriais, e-commerce e desfiles no Brasil e fora dele.
              </p>
              <div className="mt-8">
                <Cta />
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Inscrição gratuita. Não é necessária experiência prévia.
              </p>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <dt className="label-eyebrow">Perfil</dt>
                <dd className="mt-1 text-sm">Mulheres, 15 a 35 anos</dd>
              </div>
              <div>
                <dt className="label-eyebrow">Altura</dt>
                <dd className="mt-1 text-sm">A partir de 1,70m</dd>
              </div>
              <div>
                <dt className="label-eyebrow">Seleção</dt>
                <dd className="mt-1 text-sm">Online, em 48h</dd>
              </div>
            </dl>
          </div>

          <div className="relative min-h-[70vh] lg:min-h-[85vh]">
            <img
              src={model2}
              alt="Modelo feminina em ensaio editorial da BOSSA Mgt"
              width={1200}
              height={1500}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* O QUE OFERECEMOS */}
        <section className="border-b border-border px-5 py-16 sm:px-10">
          <p className="label-eyebrow">O que a agência faz por você</p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Book profissional",
                d: "Direção de imagem, testes fotográficos e composição de book alinhado ao mercado atual.",
              },
              {
                n: "02",
                t: "Acesso a clientes reais",
                d: "Marcas de moda, beleza, e-commerce e publicidade que trabalham com a nossa base de talentos.",
              },
              {
                n: "03",
                t: "Carreira acompanhada",
                d: "Agenda, cachês, contratos e orientação de imagem conduzidos pelo booking da BOSSA.",
              },
            ].map((i) => (
              <div key={i.n} className="border-t border-foreground pt-5">
                <span className="text-xs font-semibold text-brand">{i.n}</span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight">{i.t}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{i.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALERIA */}
        <section className="border-b border-border">
          <div className="px-5 pt-16 sm:px-10">
            <p className="label-eyebrow">Talentos BOSSA</p>
            <h2 className="tight-display mt-4 max-w-2xl text-4xl sm:text-5xl">
              O padrão de imagem que construímos.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {[
              { src: model1, alt: "Modelo em desfile com vestido azul" },
              { src: model3, alt: "Editorial de moda com óculos e alfaiataria" },
              { src: model4, alt: "Ensaio externo com casaco de pelo claro" },
              { src: model5, alt: "Detalhe de top branco em ensaio editorial" },
              { src: model6, alt: "Retrato em preto e branco com casaco de pelo" },
              { src: model7, alt: "Retrato de beleza natural com sardas" },
              { src: model8, alt: "Retrato de casting com vestido preto" },
              { src: model9, alt: "Retrato editorial com blazer de tweed" },
            ].map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[3/4] w-full bg-background object-cover"
              />
            ))}
          </div>
        </section>

        {/* REQUISITOS */}
        <section className="grid border-b border-border lg:grid-cols-[1fr_1fr]">
          <div className="px-5 py-16 sm:px-10">
            <p className="label-eyebrow">Requisitos</p>
            <h2 className="tight-display mt-4 text-4xl sm:text-5xl">
              Você se encaixa?
            </h2>
            <ul className="mt-8 max-w-md">
              {[
                "Mulheres de 15 a 35 anos",
                "Altura a partir de 1,70m",
                "Boa apresentação e cuidado pessoal",
                "Disponibilidade para testes e trabalhos",
                "Experiência não é obrigatória",
              ].map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-4 border-b border-border py-4 text-sm"
                >
                  <span className="text-brand" aria-hidden="true">
                    —
                  </span>
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Cta label="Enviar minha candidatura" />
            </div>
          </div>
          <div className="min-h-[60vh] lg:min-h-full">
            <img
              src={model8}
              alt="Modelo feminina em estúdio para casting da BOSSA Mgt"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="px-5 py-16 sm:px-10">
          <p className="label-eyebrow">Como funciona</p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { n: "Passo 1", t: "Clique no botão", d: "Você fala direto com nossa equipe de booking pelo WhatsApp." },
              { n: "Passo 2", t: "Envie suas fotos", d: "Duas fotos simples, sem edição: rosto e corpo inteiro." },
              { n: "Passo 3", t: "Receba o retorno", d: "Se o perfil for aprovado, agendamos seu teste em até 48h." },
            ].map((s) => (
              <li key={s.n} className="border-t border-foreground pt-5">
                <span className="label-eyebrow">{s.n}</span>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA FINAL */}
        <section className="bg-foreground px-5 py-20 text-background sm:px-10">
          <h2 className="tight-display max-w-3xl text-4xl sm:text-6xl">
            As vagas do casting são limitadas por temporada.
          </h2>
          <p className="mt-6 max-w-xl text-sm text-background/70">
            Se você tem perfil, o próximo passo leva menos de um minuto. Fale agora com
            a equipe da BOSSA Mgt.
          </p>
          <div className="mt-10">
            <Cta label="Quero participar do casting" />
          </div>
        </section>
      </main>

      <footer className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border px-5 py-8 sm:px-10">
        <img src={logo} alt="BOSSA Mgt" className="h-5 w-auto" />
        <p className="shrink-0 text-xs text-muted-foreground">
          © {new Date().getFullYear()} BOSSA Mgt
        </p>
      </footer>
    </div>
  );
}
