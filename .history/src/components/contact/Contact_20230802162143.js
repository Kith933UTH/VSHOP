import './index.css'
import './reponsive.css'

export function Contact() {
    return (
        <div className="contact-section max-w-[1240px] mx-auto py-2 text-sm sm:text-base" id="contact">
            <div className="form-area max-w-[1240px] in-h-fit block">
                <div className="form-wrap"> 
                <div className="title">
                    <h1>Contact Us</h1>
                </div>

                <div className="contact-area pb-4">
                    <div className="contact-info">
                        <div className="contact-address">
                            <span className="icon-map-marked-alt"></span>
                            <p>To Ky Street, Tan Chanh Hiep Ward, District 12, Ho Chi Minh City</p>
                        </div>

                        <div className="contact-mail">
                            <span className="icon-envelope"></span>
                            <p>VShop@gmail.com</p>
                        </div>

                        <div className="contact-phone">
                            <span className="icon-phone-alt"></span>
                            <p>+84 0123-456-789</p>
                        </div>
                        <div className="contact-map">
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3390703814566!2d106.61467747476733!3d10.861794557613885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d58b31498a03%3A0x9eaeeacae530bd0b!2zVMO0IEvDvSwgUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1690732012415!5m2!1svi!2s" width="100%" height="270" ></iframe>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="name-field">
                            <div className="input-area">
                                <input type="text" id="fname" autoComplete="off" required />
                                <label htmlFor="fname">First Name</label>
                            </div>

                            <div className="input-area">
                                <input type="text" id="lname" autoComplete="off" required />
                                <label htmlFor="lname">Last Name</label>
                            </div>
                        </div>

                        <div className="input-area">
                            <input type="email" id="email" autoComplete="off" required />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="message-area">
                            <textarea id="message" required></textarea>
                            <label htmlFor="message">Message</label>
                        </div>

                        <div className="btn">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}