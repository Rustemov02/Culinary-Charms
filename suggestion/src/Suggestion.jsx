import React, { useState } from 'react'

export default function Suggestion({ randomItem = null, getSuggestion }) {

    const [isActiveSteps, setActiveSteps] = useState(false)
    const [isActiveEval, setActiveEval] = useState(true)
    const [liked, setLiked] = useState(false)


    return (
        <>
            {randomItem && (
                <div className='suggestion'>

                    <div style={{ padding: '12px 10px' }}>
                        <h2>  {randomItem.name} </h2>

                        <div className='recipe-content'>
                            <img src={randomItem.img} />
                            <div className='recipe'>
                                <h4>Tərkibi : </h4>
                                {randomItem.recipe.map((item, index) => <p key={index}>{item}</p>)}
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className='steps-button'>
                            <button onClick={() => {
                                setActiveSteps(!isActiveSteps)
                            }}>Hazırlanma ardıcıllığı</button>
                            <button onClick={() => {
                                { randomItem.videoLink == null ? alert('Təəssüf ki video tapılmadı,zəhmət olmasa tanışlardan dəstək alın :)') : window.location.href = `${randomItem.videoLink}` }
                            }}>Video izlə</button>
                        </div>
                    </div>

                    {isActiveSteps ? (
                        <div className='steps-content'>
                            {randomItem.steps.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                    ) : ''}

                    {isActiveEval && (
                        <div className='evaluation'>
                            <p>Təklifi bəyəndinizmi?</p>
                            <div>
                                <button onClick={() => { setLiked(true), setActiveEval(false) }}>Bəli</button>
                                <button onClick={() => {
                                    const randomNumb = Math.floor(Math.random() * 4)
                                    getSuggestion(randomNumb)
                                }}>Xeyr</button>
                            </div>
                        </div>
                    )}

                    {liked && <div style={{
                        textAlign: "center",
                        fontFamily: 'Poppins',
                        fontSize: '20px',
                        fontWeight: 900
                    }}>Çox sevindim <span>😊</span><br />Nuş olsun !</div>}
                </div>
            )
            }
        </>
    )
}