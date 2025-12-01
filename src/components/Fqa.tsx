import { useState } from 'react';
import FaqHeader from './fqa/FaqHeader';
import FaqItem from './fqa/FaqItem';
import { faqData } from './fqa/faqData';

const Fqa = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <FaqHeader />

                {/* FAQ Grid */}
                <div className="grid md:grid-cols-2 gap-6 items-start">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => toggleFaq(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fqa;
