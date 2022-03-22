import logo from '../assets/images/logo.png'
export const HeaderPage = () => {
    return (
        <div class="jumbotron jumbotron-fluid" id="banner" >
            <div class="container text-center text-md-left">
                <header>
                    <div class="row justify-content-between">
                        <div class="col-2">
                            <img src={ logo } alt="logo" />
                        </div>
                        <div class="col-6 align-self-center text-right">
                            <span role="button" href="#" class="text-white lead pointer">Get Early Access</span>
                        </div>
                    </div>
                </header>
                <h1 data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" class="display-3 text-white font-weight-bold my-5">
                    A New Way<br />
                    To Start Business
                </h1>
                <p data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" class="lead text-white my-4">
                    Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico mentitum duo.
                    <br /> Illum iusto laoreet his te. Lorem partiendo mel ex. Ad vitae admodum voluptatum per.
                </p>
                <button href="#" data-aos="fade" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true" class="btn my-4 font-weight-bold atlas-cta cta-green">Get Started</button>
            </div>
        </div>
    )
}
