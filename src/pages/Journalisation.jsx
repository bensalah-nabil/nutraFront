import React from 'react';
import JournalisationHero from '../Journalisation/JournalisationHero';
import CurrentJournalisation from '../Journalisation/CurrentJournalisation';
import HistoryTimeline from '../Journalisation/HistoryTimeline';
import VitalsCard from '../Journalisation/VitalsCard';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';

const Journalisation = () => {
    return (
        <div className="Journalisation-page">
         <Navigation activeLink="Journalisation" />   
            <JournalisationHero />
            
            <div className="container mb-5">
                <div className="row">
                    {/* Colonne principale */}
                    <div className="col-lg-8">
                        <CurrentJournalisation />
                        <HistoryTimeline />
                    </div>
                    
                    {/* Colonne latérale */}
                    <div className="col-lg-4">
                     
                        <VitalsCard />
        
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Journalisation;