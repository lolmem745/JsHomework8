
const Contact = () => {
    
    return (
        <div className="contact">
            <div className="background__fill"></div>
            <div className="contact__content center">
                <div className="manager">
                    <div className="manager__items">
                        <img src="/img/contact/face.png" alt="face"/>
                            <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
                            </p>
                    </div>
                </div>
                <div className="subscribe">
                    <div className="subscribe__text">
                        <h2>SUBSCRIBE</h2>
                        <p>FOR OUR NEWLETTER AND PROMOTION</p>
                    </div>
                    <form action="#" className="subscribe__entry">
                        <input type="email" required placeholder="Enter Your Email" className="subscribe__input"/><button
                            type="submit" className="subscribe__button">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;