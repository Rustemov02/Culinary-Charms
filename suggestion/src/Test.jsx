import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Test() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ne8grdn', 'template_n7iku69', form.current, 'nhvADr2G-rlep_jlW')
            .then((result) => {
                console.log(result.text)
                // setSecondOpen(false)
                alert("Təşəkkür edirik mesajınız göndərildi :)")

            }, (error) => {
                console.log(error.text);
            })
    };


    return (
        <>
            <form ref={form} onSubmit={sendEmail}>
                <textarea name='message' />
                <button type='submit'>Send</button>
            </form>
        </>
    )
}