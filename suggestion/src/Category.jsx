import React, { useEffect, useState, useRef } from 'react'
import Suggestion from './Suggestion'
import database from './database'
import { Backdrop, Dialog, DialogTitle } from '@mui/material'
import emailjs from '@emailjs/browser';


export default function Category({ name }) {

    const [open, setOpen] = useState(false) // for dialog
    const [secondDialogOpen, setSecondOpen] = useState(false) // for second dialog
    const category = ['Sulu yeməklər', "Ət yeməkləri", "Xəmir xörəkləri", "Quru yeməklər"]
    const [selectedItems, setSelectedItems] = useState([])
    const [randomItem, setRandomItem] = useState('null')
    const [value, setValue] = useState('')

    const getSuggestion = e => {
        const randomNumb = Math.floor(Math.random() * selectedItems.length)
        setSelectedItems(database.yemekler[e].items)
        setRandomItem(selectedItems[randomNumb])
        setOpen(true)
    }

    useEffect(() => {
        if (selectedItems.length > 0) {
            const randomNumb = Math.floor(Math.random() * selectedItems.length);
            setRandomItem(selectedItems[randomNumb]);
        }
    }, [selectedItems]);

    // for Dialog 
    const handleClose = () => {
        setOpen(false)
    }

    const mainMenu = () => {
        localStorage.clear()
        window.location.reload()
    }

    // SEND @MAIL 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ne8grdn', 'template_n7iku69', form.current, 'nhvADr2G-rlep_jlW')
            .then((result) => {
                if (result.text === 'OK') {
                    setSecondOpen(false)
                    alert("Təşəkkür edirik mesajınız göndərildi :)")
                } else {
                    alert('Bir xəta baş verdi..Yenidən cəhd edin')
                }
            })
    };


    return (
        <div className='category'>
            <p>Dəyərli {name} Xanım ! Xoş Gəlmisiniz <span>🤗</span> </p>

            <div>
                <h2>Seçiminizi edin...</h2>
                <div className='button-group'>

                    {category.map((item, index) => (
                        <button key={index} onClick={() => getSuggestion(index)}>{item}</button>
                    ))}
                </div>
            </div>
            <div>
                <button className='main-button' onClick={() => mainMenu()}>Geri qayıt</button>
                <button className='main-button' onClick={() => setSecondOpen(true)}>Qiymətləndir</button>
            </div>

            <Dialog onClose={handleClose} open={open} fullWidth={true} scroll='body' maxWidth='sm'>
                <DialogTitle sx={{
                    textAlign: 'center',
                    fontSize: '22px',
                    fontFamily: 'Poppins',
                    color: 'blue',
                    fontWeight: 900
                }}>Sizə təklif etdiyimiz yemək !</DialogTitle>
                <Suggestion randomItem={randomItem} isOpen={true} getSuggestion={getSuggestion} />
            </Dialog >
 
            {/* Comment area - send Email */}
            <Backdrop open={secondDialogOpen}>
                <div className='comment'>
                    <p>Təklif və fikirləriniz bizim üçün önəmlidir.. </p>
                    <button className='close' onClick={() => setSecondOpen(false)}>X</button>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" value={name} style={{ display: 'none' }} readOnly />
                        <textarea value={value} name='message' onChange={(e) => setValue(e.target.value)} placeholder='Mesajınız...' style={{
                            width: '100%',
                            height: '100px',
                            padding: '12px 10px',
                            fontSize: '20px',
                            border: 'none',
                            borderRadius: '5px'
                        }} />

                        <button type='submit' className='send-button' onClick={() => setValue('')}>Göndər</button>
                    </form>
                </div>
            </Backdrop>

        </div>
    )
}