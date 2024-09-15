import React from 'react';
import question from "../../assets/ContactPageImg/question.jpg"
function QuestionsAnswers() {
    return (
        <div className="relative w-full h-screen">
            {/* Arka plandaki resim */}
            <img src={question} alt="Background" className="w-full h-full object-cover" />

            {/* Yazılar */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center mb-52">
                <h2 className="text-4xl font-bold mb-4">Questions & Answers</h2>
                <p className="text-xl mb-4 text-gray-600">
                    Problems trying to resolve the conflict between the two major realms of Classical physics:
                </p>
                <button className=" text-blue-500 font-bold px-6 py-2 rounded">Contact Us</button>
            </div>
        </div>


    );
}

export default QuestionsAnswers;
