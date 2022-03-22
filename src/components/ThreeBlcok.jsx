import smProtect1 from '../assets/images/smart-protect-1.jpg'
import smProtect2 from '../assets/images/smart-protect-2.jpg'
import smProtect3 from '../assets/images/smart-protect-3.jpg'

export const ThreeBlcok = () => {
    return (
        // <!-- three-blcok -->
        <div class="container my-5 py-2">
            <h2 class="text-center font-weight-bold my-5">Smartest protection for your site</h2>
            <div class="row">
                <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center">
                    <img src={ smProtect1 } alt="Anti-spam" class="mx-auto" />
                    <h4>Anti-spam</h4>
                    <p>Lorem ipsum dolor sit amet porro his no his deleniti</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center">
                    <img src={ smProtect2 } alt="Phishing Detect" class="mx-auto" />
                    <h4>Phishing Detect</h4>
                    <p>Ne error antiopam usu. Sed vocen concludaturque ea</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-once="true" class="col-md-4 text-center">
                    <img src={ smProtect3 } alt="Smart Scan" class="mx-auto" />
                    <h4>Smart Scan</h4>
                    <p>Et usu ocurreret elaboraret doctus prodesse assueverit.</p>
                </div>
            </div>
        </div>
    )
}
