import './FAQ.css'
import React, { useState } from 'react';

const FAQ = () => {
   const [openIds, setOpenIds] = useState([]);

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

    const faqData = [
        {
            id: 1,
            question: "What is counselling?",
            answers: ["Counselling is a professional and confidential space where you can explore your thoughts, emotions, and experiences with the support of a trained and licensed counsellor. It aims to help you gain clarity, develop coping strategies, and better understand yourself."]
        },
        {
            id: 2,
            question: "Who is counselling for?",
            answers: [
            "Counselling is for individuals who may be experiencing emotional difficulties, life challenges, or simply a sense that something feels off or unclear.",
            "You do not need to have a clearly defined problem. Some people come with specific concerns, while others are looking for a space to reflect, understand themselves better, and gain clarity over time."
            ]
        },
        {
            id: 3,
            question: "What happens in the first session?",
            answers: ["The first session is an opportunity to get to know each other, understand your concerns, and explore what you might want from counselling. There is no pressure to share everything at once."]
        },
        {
            id: 4,
            question: "What can I talk about in counselling?",
            answers: [
            "You may talk about anything that feels important to you. This may include emotional difficulties, stress, relationships, life transitions, or simply a desire to understand yourself better."
            ],
            highlight: "All sessions are conducted in a safe and confidential space, in accordance with professional ethical guidelines, except in situations where there is a risk of harm to self or others."
        },
        {
            id: 5,
            question: "How are sessions conducted?",
            answers: ["Sessions are currently available online.", "In-person sessions in Seremban 2 will be available at a later stage. Further details will be shared upon confirmation."]
        },
        {
            id: 6,
            question: "How do I book a session?",
            answers: ["You may reach out via WhatsApp to enquire or book a session. "]
        },
        {
            id: 7,
            question: "Can I claim counselling under insurance or company benefits?",
            answers: ["Some organisations provide coverage for counselling or mental health support under employee benefits or insurance plans. You may check with your HR department or insurance provider for eligibility. Receipts can be provided upon request."]
        },
        {
            id: 8,
            question: "Is counselling eligible for income tax relief in Malaysia?",
            answers: ["According to the latest LHDN guidelines, certain medical and mental health-related expenses may be eligible for tax relief, which may include services provided by mental health professionals such as psychiatrists, clinical psychologists, and licensed counsellors, subject to LHDN assessment.", "Clients are advised to consult their tax agent for confirmation."]
        }
    ];

  return (
    <div class="min-w-[55vw] w-full px-[9%] py-20">
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