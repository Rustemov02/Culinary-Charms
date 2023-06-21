import React from 'react'

export default function Login({ name, changeValue, login }) {
 
    return (
        <div className='login'>
            <div className='inputDiv'>
                <h2>Xoş Gəlmisiniz !</h2>
                <input type='text' value={name} onChange={(e) => {
                    changeValue(e)
                }} placeholder='Adınızı daxil edin !' />
                <button onClick={() => login()}>Daxil ol!</button>
            </div>
        </div>
    )
}