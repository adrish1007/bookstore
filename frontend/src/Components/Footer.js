const Footer = () => {
    return (
        <div className="foot">
            <div className="wrapper">
                <div className="part1">
                    <div className="item1">
                        <h1>Bookly</h1>
                    </div>
                    <div className="item2">
                        <h1 className="about">
                            About Us
                        </h1>
                        <p>We are a leading bookstore committed to offering an exceptional selection of high-quality books at the most affordable prices available.</p>
                    </div>
                    <div className="item3">
                        <h1 className="contact">Contact Us</h1>
                        <h3>Ph: +91997997673</h3>
                        <h3>roybookstore@gmail.com</h3>
                    </div>
                </div>
                <div className="part2">
                    <h1>Information</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Testnomials</li>
                        <li>Events</li>
                    </ul>
                </div>
                <div className="part3">
                    <h1>Helpful Links</h1>
                    <ul>
                        <li>Services</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="part4">
                    <h2>Subscribe More Info</h2>
                    <input type="text" placeholder="Enter your Email" className="subscriber" />
                    <button onClick={() => window.location.href = "http://localhost:3000"}>Subscribe</button>
                </div>
            </div>
            <hr />
            <div className="social">
                <i class="fa fa-facebook-square"></i>
                <i class="fa fa-linkedin-square"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-twitter"></i>
            </div>
        </div>
    );
}

export default Footer;