import market from '../assets/market.jpg'
export default function About(){
    return(
        <div>
            <div className="about-container">
                <div className="about-card">
                    <div className="about-image">
                        <img src={market} alt="" />
                    </div>
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
            </div>
        </div>
    )
}