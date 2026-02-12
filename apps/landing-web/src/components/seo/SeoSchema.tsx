import { Helmet } from 'react-helmet-async';

export const SeoSchema = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Activa SL Digital",
        "url": "https://activa-sl.digital",
        "logo": "https://activa-sl.digital/favicon-512x512.png",
        "sameAs": [
            "https://www.linkedin.com/company/activamusicoterapia",
            "https://twitter.com/activa_sl"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+34-900-000-000",
            "contactType": "customer service",
            "areaServed": "ES",
            "availableLanguage": ["Spanish", "English"]
        },
        "description": "Consultora de ingeniería de software de alto impacto. Especialistas en Ecosistemas Digitales, CRMs y Apps Corporativas."
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};
