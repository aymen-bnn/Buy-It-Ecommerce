import React from 'react'

const Head = () => {
  return (
    <section className="Head">
        <div className="container mx-auto items-center justify-between flex">
            <div className="infos flex">
                <div className="info flex">
                    <ion-icon name="call-outline"></ion-icon>
                    <label>+2137777777</label>
                </div>
                <div className="info flex">
                    <ion-icon name="mail-outline"></ion-icon>
                    <label>Buy-it@gmail.com</label>
                </div>
            </div>
            <div className="helps flex">
                <div className="info">
                    <label>Theme FAQ's</label>
                </div>
                <div className="info">
                    <label>Need Help ?</label>
                </div>
                <div className="info">
                    English
                    <ul className='hidden'>
                        <li>French</li>
                        <li>Arabic</li>
                        <li>German</li>
                    </ul>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Head