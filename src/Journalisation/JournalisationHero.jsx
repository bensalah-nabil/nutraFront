import { useTranslation } from 'react-i18next';
const JournalisationHero = () => {
    const { t } = useTranslation();
    return (
        <section class="consultation-hero">
        <div class="container text-center">
            <h1 class="display-4 fw-bold mb-3"><i class="fas fa-notes-medical me-2"></i>
            {t('journalisation.titre')}</h1>
            <p class="lead">
                {t('journalisation.sousTitre')}
            </p>
        </div>
    </section>

    );
};

export default JournalisationHero;