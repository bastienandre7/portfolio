export default function MentionsLegales() {
  return (
    <main className="relative z-10 min-h-screen overflow-hidden rounded-b-[2.5rem] bg-white text-[#1F2A1F]">
      <div className="mx-auto w-full max-w-4xl px-6 pb-24 pt-32 sm:px-10 md:pb-32 md:pt-40 lg:px-12">
        <div className="mb-16 max-w-2xl space-y-5 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5E6B52]">
            Juridique
          </p>
          <h1 className="text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-[#1F2A1F] sm:text-5xl md:text-6xl">
            Mentions <span className="text-[#C97A3D]">Légales.</span>
          </h1>
          <p className="pt-2 text-xs text-[#1F2A1F]/50">
            Dernière mise à jour : Juin 2026
          </p>
        </div>

        <div className="max-w-3xl space-y-12 text-sm leading-7 text-[#1F2A1F]/65 sm:text-base">
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F2A1F]">
              1. Édition du site
            </h2>
            <p>
              En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004
              pour la confiance dans l&apos;économie numérique, il est précisé
              aux utilisateurs du site internet{" "}
              <strong className="font-medium text-[#1F2A1F]">
                bastienandredev.fr
              </strong>{" "}
              l&apos;identité des différents intervenants dans le cadre de sa
              réalisation et de son suivi :
            </p>
            <p className="border-l border-[#C97A3D]/40 pl-4">
              <strong className="font-medium text-[#1F2A1F]">
                Propriétaire du site :
              </strong>{" "}
              Bastien Andre — Entreprise Individuelle
              <br />
              <strong className="font-medium text-[#1F2A1F]">
                Contact :
              </strong>{" "}
              contact@bastienandredev.fr
              <br />
              <strong className="font-medium text-[#1F2A1F]">
                Adresse :
              </strong>{" "}
              200 rue de la Croix Nivert, 75015 Paris, France
              <br />
              <strong className="font-medium text-[#1F2A1F]">
                SIRET :
              </strong>{" "}
              943 199 257 00016
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F2A1F]">
              2. Directeur de la publication
            </h2>
            <p>
              Le Directeur de la publication et responsable du traitement des
              données est{" "}
              <strong className="font-medium text-[#1F2A1F]">
                Bastien Andre
              </strong>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F2A1F]">
              3. Hébergement
            </h2>
            <p>
              Le site est hébergé de manière sécurisée par l&apos;infrastructure
              suivante :
            </p>
            <p className="border-l border-[#C97A3D]/40 pl-4">
              <strong className="font-medium text-[#1F2A1F]">
                Hébergeur :
              </strong>{" "}
              Netlify, Inc.
              <br />
              <strong className="font-medium text-[#1F2A1F]">
                Adresse :
              </strong>{" "}
              512 2nd Street, Suite 200, San Francisco, CA 94107, USA
              <br />
              <strong className="font-medium text-[#1F2A1F]">
                Site Web :
              </strong>{" "}
              https://www.netlify.com
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F2A1F]">
              4. Propriété intellectuelle
            </h2>
            <p>
              Bastien Andre est propriétaire des droits de propriété
              intellectuelle ou détient les droits d’usage sur tous les éléments
              accessibles sur le site internet, notamment les textes, images,
              graphismes, logos, vidéos, architecture et icônes.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1F2A1F]">
              5. Données personnelles & Formulaire de contact
            </h2>
            <p>
              Conformément aux dispositions de la loi 78-17 du 6 janvier 1978
              modifiée et du RGPD, l&apos;utilisateur du site dispose d&apos;un
              droit d&apos;accès, de modification et de suppression des
              informations collectées.
            </p>
            <p>
              Les données collectées via le formulaire de contact (nom, e-mail,
              sujet, message) sont uniquement transmises par e-mail via le
              service{" "}
              <strong className="font-medium text-[#1F2A1F]">Resend</strong>{" "}
              dans le but exclusif de traiter votre demande de projet. Elles ne
              sont ni vendues, ni cédées à des tiers, et sont conservées pour
              une durée maximale de 3 ans.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
