import React, { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const comments = [
    {
        username: 'SilverLining22',
        comment: 'Wow, this post is a treasure trove of knowledge! The depth of analysis and the clear explanations have truly enriched my understanding of the topic. I am impressed by how you have managed to distill complex ideas into digestible chunks. Kudos to you!',
    },
    {
        username: 'SkyWatcher88',
        comment: 'Thank you for this insightful post. It is evident that a lot of effort went into researching and crafting this content. The way you are structured the information makes it easy to follow and absorb. Looking forward to more thought-provoking articles from you!',
    },
    {
        username: 'MarathonReader',
        comment: 'This is an exceptional piece of writing! Your ability to articulate nuanced concepts with such clarity is commendable. I appreciate the practical examples that illustrate your points effectively. Can`t wait to see what other gems you have in store!',
    },
    {
        username: 'CodeNinja42',
        comment: 'As someone deeply interested in this field, I must say this post exceeded my expectations. The depth of insight and the logical flow of ideas are outstanding. Your writing style is both informative and engaging. I eagerly await your next installment!',
    },
    {
        username: 'StarGazer77',
        comment: 'Im thoroughly impressed by the quality of this content. The meticulous research and the comprehensive coverage of the topic make it a valuable resource for anyone seeking to deepen their knowledge. Keep up the fantastic work!',
    },
    {
        username: 'CrystalClearMind',
        comment: 'This post is a gem! Your thorough exploration of the subject matter and your ability to break down complex ideas into easily understandable parts are remarkable. I appreciate the effort you`ve put into making this content accessible and insightful. Looking forward to more!',
    },
    {
        username: 'EagleEye99',
        comment: "Thank you for sharing your expertise on this topic. Your keen insights and well-supported arguments have broadened my understanding. The clarity of your explanations and the depth of your analysis are truly impressive. Can't wait to dive into more of your work!",
    },
    {
        username: 'GreenThumb2023',
        comment: "This post is a breath of fresh air! Your passion for the subject shines through in every paragraph. I admire how you've woven together theory and practical examples seamlessly. Your writing style is engaging, making complex concepts easy to grasp. Looking forward to your future posts!",
    },
    {
        username: 'TechSavvy123',
        comment: "I'm thoroughly impressed by the depth of knowledge and the clarity of presentation in this post. It's evident that you've done your research thoroughly. Your ability to make intricate details accessible is commendable. Keep up the excellent work!",
    },
    {
        username: 'MidnightReader2022',
        comment: "This post is a true masterpiece! The way you've structured your arguments and supported them with evidence shows a deep understanding of the topic. I appreciate the effort you've put into making this content both informative and engaging. Looking forward to more enlightening reads!",
    },
];


const animations = [
    'zoom-in',
    'zoom-in-up',
    'zoom-in-down',
    'zoom-in-left',
    'zoom-in-right',
];

const Comments = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 1;
            }
        }, 20); // Adjust scroll speed as needed

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const getRandomAnimation = () => animations[Math.floor(Math.random() * animations.length)];

    return (
        <div>
            <h5 className="mb-10 mt-20 text-2xl font-semibold tracking-tight text-gray-900 text-center" style={{ overflow:"hidden" }} data-aos={getRandomAnimation()}>
            Why CirclePOS Earns Top Marks
            </h5>
        <div className="flex overflow-x-auto p-4 mx-16 md:mx-16 lg:mx-32 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200" style={{ scrollbarWidth: 'thin',overflow:'hidden' }} ref={containerRef}>
            <div className="flex flex-no-wrap space-x-4">
                {comments.map((item, index) => (
                    <div key={index} className="bg-white max-w-xs
                     sm:max-w-sm lg:max-w-md p-6 shadow-md rounded-lg text-center" style={{ width: '600px', height: '300px' }} data-aos={getRandomAnimation()}>
                        <h3 className="text-lg font-bold">{item.username}</h3>
                        <p className="text-gray-600 mt-2">{item.comment}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Comments;