import AboutHeader from './about/AboutHeader';
import PrivacyCard from './about/PrivacyCard';
import MissionCard from './about/MissionCard';
import CorePrinciples from './about/CorePrinciples';
import KeyFeatures from './about/KeyFeatures';

const About = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AboutHeader />

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-24">
                    {/* Left Column */}
                    <div className="flex flex-col gap-8">
                        <PrivacyCard />
                        <MissionCard />
                    </div>

                    {/* Right Column */}
                    <CorePrinciples />
                </div>

                {/* Key Features Banner */}
                <KeyFeatures />
            </div>
        </section>
    );
};

export default About;
