
const ProductCarousel = () => {

    return (
        <div className="image">
            <section className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">
                    <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
                        <div className="carousel__snapper">
                            <a href="#carousel__slide4" className="carousel__prev">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"
                                    fill="none">
                                    <path className="arrow_path"
                                          d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                                          fill="black"/>
                                </svg>
                            </a>
                            <a href="#carousel__slide2" className="carousel__next">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31"
                                    fill="none">
                                    <path className="arrow_path"
                                          d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                                          fill="black"/>
                                </svg>
                            </a>
                        </div>
                    </li>
                    <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide1" className="carousel__prev">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                                      fill="black"/>
                            </svg>
                        </a>
                        <a href="#carousel__slide3" className="carousel__next">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                                      fill="black"/>
                            </svg>
                        </a>
                    </li>
                    <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide2" className="carousel__prev">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                                      fill="black"/>
                            </svg>
                        </a>
                        <a href="#carousel__slide4" className="carousel__next">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                                      fill="black"/>
                            </svg>
                        </a>
                    </li>
                    <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
                        <div className="carousel__snapper"></div>
                        <a href="#carousel__slide3" className="carousel__prev">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                                      fill="black"/>
                            </svg>
                        </a>
                        <a href="#carousel__slide1" className="carousel__next">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path className="arrow_path"
                                      d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                                      fill="black"/>
                            </svg>
                        </a>
                    </li>
                </ol>
            </section>
        </div>
    );
};

export default ProductCarousel;