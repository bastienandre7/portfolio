import Navigation from "@/components/navigation";

export default function PolitiqueDeConfidentialite() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FAFBF9] text-[#14171C] py-24 md:py-32">
        <div className="mx-auto max-w-3xl w-full px-6">
          <div className="space-y-4 mb-16">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2F6B4F]">
              Confidentialité
            </p>
            <h1
              className="text-4xl md:text-5xl leading-[1.08] tracking-tight text-[#14171C]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
            >
              Politique de{" "}
              <span className="italic text-[#2F6B4F] font-normal">
                Confidentialité.
              </span>
            </h1>
            <p className="text-xs text-[#5B6168]/70 font-light pt-2">
              Dernière mise à jour : Juin 2026
            </p>
          </div>

          <div className="space-y-10 text-sm text-[#5B6168] font-light leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-[#14171C]">
                1. Introduction
              </h2>
              <p>
                La présente Politique de Confidentialité a pour but de vous
                informer en toute transparence sur la manière dont Bastien Andre
                (&quot;je&quot;, &quot;mon&quot;) collecte, utilise et protège
                les données personnelles que vous me transmettez lorsque vous
                utilisez le site{" "}
                <span className="font-medium text-[#14171C]">
                  bastienandredev.fr
                </span>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-[#14171C]">
                2. Données collectées
              </h2>
              <p>
                Je collecte uniquement les données nécessaires pour répondre à
                vos demandes de contact et de projets. Ces données sont
                collectées lorsque vous remplissez volontairement le formulaire
                de contact sur le site :
              </p>
              <ul className="list-disc pl-5 space-y-1 border-l border-[#E4E6E0] ml-2">
                <li>
                  <strong className="font-medium text-[#14171C]">
                    Nom complet :
                  </strong>{" "}
                  Pour savoir comment vous adresser mes réponses.
                </li>
                <li>
                  <strong className="font-medium text-[#14171C]">
                    Adresse email :
                  </strong>{" "}
                  Pour pouvoir vous recontacter.
                </li>
                <li>
                  <strong className="font-medium text-[#14171C]">
                    Sujet et Message :
                  </strong>{" "}
                  Pour comprendre votre besoin et votre projet informatique.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-[#14171C]">
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

            <section className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-[#14171C]">
                4. Partage et Sous-traitants
              </h2>
              <p>
                Je m&apos;engage à ne jamais vendre, louer ni céder vos données
                personnelles à des tiers. Pour assurer l&apos;envoi technique
                des messages de mon formulaire vers ma boîte mail
                professionnelle, j&apos;utilise le sous-traitant suivant, qui
                garantit une stricte conformité RGPD :
              </p>
              <p className="pl-4 border-l border-[#E4E6E0]">
                <strong className="font-medium text-[#14171C]">
                  Resend Inc.
                </strong>{" "}
                — Service d&apos;envoi d&apos;e-mails transactionnels sécurisé.
                Les données transitent par leurs serveurs pour m&apos;être
                acheminées.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-[#14171C]">
                5. Durée de conservation
              </h2>
              <p>
                Vos données sont conservées le temps nécessaire au traitement de
                votre demande. Si notre échange n&apos;aboutit pas sur une
                collaboration contractuelle, vos données seront supprimées au
                maximum{" "}
                <span className="font-medium text-[#14171C]">3 ans</span> après
                notre dernier contact.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-[#14171C]">
                6. Sécurité des données
              </h2>
              <p>
                Le site dispose d&apos;un certificat SSL (protocole HTTPS)
                garantissant que toutes les informations qui transitent via le
                formulaire de contact sont chiffrées et protégées contre les
                interceptions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-[#14171C]">
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
                <span className="font-medium text-[#14171C]">
                  contact@bastienandredev.fr
                </span>
                . Je m&apos;engage à vous répondre sous un délai maximum de 30
                jours.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
