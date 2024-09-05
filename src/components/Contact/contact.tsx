import React from "react";
import "./contact.scss";

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact__title">
                Reach Me
            </div>
            <div className="contact__content">
                <div className="contact__content__text">
                    <h3>Let's Connect!</h3>
                    <p>
                        I'm always excited to collaborate with companies that see value in my skills and experience. If you think I could be a good fit for your team or project, I'd love to hear from you. Even if you just want to say hi or discuss ideas, feel free to reach out. Let's create something great together!
                    </p>
                </div>
                <div className="contact__content__details">
                    <div>
                        <div className="contact__content__details__title">Email</div>
                        <a href="mailto:shruti15bakutra@gmail.com">shruti15bakutra@gmail.com</a>
                    </div>
                    <div>
                        <div className="contact__content__details__title">Skype</div> 
                        <a href="skype:live:shruti15bakutra?chat">shruti15bakutra</a>
                    </div>
                    <div>
                        <div className="contact__content__details__title"> LinkedIn</div>
                        <a href="https://www.linkedin.com/in/shruti-bakutra-037829156/" target="_blank" rel="noopener noreferrer">shruti-bakutra-037829156</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;