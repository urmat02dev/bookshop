import React from 'react';
import "./Payments.scss"
import card from "../../../assets/img/image 19.png"
import card2 from "../../../assets/img/image 20.png"
import card3 from "../../../assets/img/image 21.png"

const Payments = () => {

    return (
        <div id="pay">
            <div className="container">
                <div className="pay">
                    <h1>Payments methods</h1>
                    <div className="page">
                        <div className="tittle">
                            <h2>Payment methods for orders in the online store MIDNIGHTS</h2>
                            <p className="words">Choose a convenient way to pay for orders in book24.ru -
                                the official online store of the publishing group EKSMO-AST.</p>

                               <p> ✔ Low prices</p>
                               <p> ✔ Quality Assurance</p>
                               <p> ✔ Personal discounts</p>
                            <p className="word">We accept all types of payment</p>
                            <div className="img">
                                <img src={card} className="card" alt=""/>
                                <img src={card2} className="card" alt=""/>
                                <img src={card3} className="card" alt=""/>
                            </div>

                        </div>
                        <div className="tittle2">
                            <h3>By bank card</h3>
                            <h4>You can pay for the order on the website with MIR, Visa, MasterCard bank cards, as well as via Yandex Pay.</h4>
                            <p className="text"> Pay for orders on book24.ru using bank cards is safe. We do not receive your payment card data, you directly transfer them to the payment system via a secure data transfer protocol. When paying with bank cards, additional one-time SMS codes sent to your mobile phone are also used.</p>
                            <p className="text2"> After payment of the order, an electronic receipt will be sent to the email address that you specified during the payment.</p>
                             <p className="text3"> Please note, when choosing this type of payment, the product is booked for you for 7 days, during this time it is possible to make a payment. If the order is not paid within the specified period, the reservation is withdrawn and the order is automatically canceled.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payments;