import client1 from '../assets/images/client-1.png'
import client2 from '../assets/images/client-2.png'
import client3 from '../assets/images/client-3.png'
import client4 from '../assets/images/client-4.png'
import client5 from '../assets/images/client-5.png'
import client6 from '../assets/images/client-6.png'

export const Clients = () => {
    return (
        // <!-- client -->
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={ client1 } class="mx-auto d-block" />
                    </div>
                    <div class="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={ client2 } class="mx-auto d-block" />
                    </div>
                    <div class="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={ client3 } class="mx-auto d-block" />
                    </div>
                    <div class="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={ client4 } class="mx-auto d-block" />
                    </div>
                    <div class="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={ client5 } class="mx-auto d-block" />
                    </div>
                    <div class="col-sm-4 col-md-2 py-2 align-self-center">
                        <img src={ client6 } class="mx-auto d-block" />
                    </div>
                </div>
            </div>
        </div>
    )
}
