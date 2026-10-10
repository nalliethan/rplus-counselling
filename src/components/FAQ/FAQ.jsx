import './FAQ.css'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation();
    const [openIds, setOpenIds] = useState([]);
    const faqData = t('faqData', { returnObjects: true });

    const toggleFAQ = (id) => {
        setOpenIds((prevOpenIds) => {
            // If the ID is already in the array, remove it (close the item)
            if (prevOpenIds.includes(id)) {
                return prevOpenIds.filter((itemOpenId) => itemOpenId !== id);
            }
            // Otherwise, add the ID to the array (open the item)
            else {
                return [...prevOpenIds, id];
            }
        });
    };

    return (
        <div id='faq' className="min-w-[55vw] w-full px-[9%] py-10 md:py-20">
            <h1 className='text-4xl sm:text-5xl font-semibold text-[#c3a082] mb-10'>Frequently Asked Questions</h1>

            <div className='flex flex-col gap-8 text-lg'>
                {faqData.map((item) => {
                    const isOpen = openIds.includes(item.id);

                    return (
                        <div key={item.id} className="faq-item border-b border-gray-100 pb-4">
                            <div
                                className="question cursor-pointer flex justify-between items-center hover:text-[#c3a082] transition-colors"
                                onClick={() => toggleFAQ(item.id)}
                            >
                                <span>{item.id}. {item.question}</span>
                                <span className={`text-2xl transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}>
                                    {isOpen ? '−' : '+'}
                                </span>
                            </div>

                            <div className={`faq-content-wrapper ${isOpen ? 'open' : ''}`}>
                                <div className="faq-content-inner pt-4 flex flex-col gap-4">
                                    {item.answers.map((ans, index) => (
                                        <div key={index} className="answer text-gray-600 leading-relaxed">
                                            {ans}
                                        </div>
                                    ))}

                                    {item.highlight && (
                                        <div className="mx-4 p-4 rounded-lg font-semibold text-[#55675b] border-l-4 border border-[#55675b]">
                                            {item.highlight}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FAQ