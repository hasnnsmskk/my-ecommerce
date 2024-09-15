import React from 'react'
import Header from './components/ContactPageCom/Header'
import QuestionsAnswers from './components/ContactPageCom/QuestionsAnswers'
import ContactSection from './components/ContactPageCom/ContactSection'
import GrowYours from './components/ContactPageCom/GrowYours'

function ContactPage() {
    return (
        <div>
            <Header />
            <QuestionsAnswers />
            <ContactSection />
            <GrowYours />
        </div>
    )
}

export default ContactPage