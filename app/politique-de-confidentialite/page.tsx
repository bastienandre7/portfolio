import LegalFooter from "@/components/legal-footer";

export default function PolitiqueDeConfidentialite() {
  return (
    <>
      <main className="relative z-10 min-h-screen overflow-hidden rounded-b-[2.5rem] bg-background text-foreground">
        <div className="mx-auto w-full max-w-[100rem] px-6 pb-24 pt-20 sm:px-10 sm:pb-32 sm:pt-24 lg:px-12">
          <div className="mb-14 max-w-4xl space-y-5 md:mb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-hero-accent">
              Confidentialité
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Politique de{" "}
              <span className="text-hero-accent">confidentialité.</span>
            </h1>
            <p className="pt-2 text-sm text-hero-subtitle/70">
              Dernière mise à jour : Juin 2026
            </p>
          </div>

          <div className="max-w-4xl space-y-12 text-base leading-8 text-hero-subtitle sm:text-lg">
            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                1. Introduction
              </h2>
              <p>
                La présente Politique de Confidentialité a pour but de vous
                informer en toute transparence sur la manière dont Bastien Andre
                (&quot;je&quot;, &quot;mon&quot;) collecte, utilise et protège
                les données personnelles que vous me transmettez lorsque vous
                utilisez le site{" "}
                <span className="font-semibold text-foreground">
                  bastienandredev.fr
                </span>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                2. Données collectées
              </h2>
              <p>
                Je collecte uniquement les données nécessaires pour répondre à
                vos demandes de contact et de projets. Ces données sont
                collectées lorsque vous remplissez volontairement le formulaire
                de contact sur le site :
              </p>
              <ul className="ml-2 list-disc space-y-2 border-l-2 border-hero-accent/40 pl-5">
                <li>
                  <strong className="font-semibold text-foreground">
                    Nom complet :
                  </strong>{" "}
                  Pour savoir comment vous adresser mes réponses.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">
                    Adresse email :
                  </strong>{" "}
                  Pour pouvoir vous recontacter.
                </li>
                <li>
                  <strong className="font-semibold text-foreground">
                    Sujet et Message :
                  </strong>{" "}
                  Pour comprendre votre besoin et votre projet informatique.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                3. Utilisation et Finalité des données
              </h2>
              <p>
                Vos données personnelles sont traitées exclusivement sur la base
                de votre consentement (lorsque vous cliquez sur
                &quot;Envoyer&quot;). Elles ont pour unique finalité la gestion
                de notre relation commerciale (répondre à votre message, établir
                un devis, échanger sur votre projet de site ou
                d&apos;application).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                4. Partage et Sous-traitants
              </h2>
              <p>
                Je m&apos;engage à ne jamais vendre, louer ni céder vos données
                personnelles à des tiers. Pour assurer l&apos;envoi technique
                des messages de mon formulaire vers ma boîte mail
                professionnelle, j&apos;utilise le sous-traitant suivant, qui
                garantit une stricte conformité RGPD :
              </p>
              <p className="border-l-2 border-hero-accent/40 pl-5">
                <strong className="font-semibold text-foreground">
                  Resend Inc.
                </strong>{" "}
                — Service d&apos;envoi d&apos;e-mails transactionnels sécurisé.
                Les données transitent par leurs serveurs pour m&apos;être
                acheminées.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                5. Durée de conservation
              </h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement de
                votre demande. Si notre échange n&apos;aboutit pas sur une
                collaboration contractuelle, vos données seront supprimées au
                maximum{" "}
                <span className="font-semibold text-foreground">3 ans</span>{" "}
                après
                notre dernier contact.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                6. Sécurité des données
              </h2>
              <p>
                Le site dispose d&apos;un certificat SSL (protocole HTTPS)
                garantissant que toutes les informations qui transitent via le
                formulaire de contact sont chiffrées et protégées contre les
                interceptions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                7. Vos Droits (RGPD)
              </h2>
              <p>
                Conformément à la réglementation européenne, vous disposez
                d&apos;un droit d&apos;accès, de rectification, de portabilité
                et d&apos;effacement de vos données personnelles. Vous pouvez
                également demander la limitation du traitement.
              </p>
              <p>
                Pour exercer ces droits, il vous suffit de m&apos;envoyer une
                demande par e-mail à l&apos;adresse suivante :{" "}
                <span className="font-semibold text-foreground">
                  bastienandredev@gmail.com
                </span>
                . Je m&apos;engage à vous répondre sous un délai maximum de 30
                jours.
              </p>
            </section>
          </div>
        </div>
      </main>
      <LegalFooter />
    </>
  );
}
