import React from 'react'
import Rave from 'react-flutterwave-rave'
import { useRavePayment, RaveProvider, RavePaymentButton } from "react-ravepayment";
import { PBFPubKey } from '../../rave.config';
import  './rave-button.css'

const RaveButton = ({price}) => {
    const config = {
        txref: "rave-123456",
        customer_email: "user@example.com",
        customer_phone: "234099940409",
        amount: price,
        PBFPubKey: PBFPubKey.PBFPubKey,
        production: false,
        onSuccess: (e) => {
            console.log(e)
        },
        onClose: (e) => {
            console.log(e)
        }
      };
      const { initializePayment } = useRavePayment(config);
    
    return (
        <div className="rave-container">
            <button className="custom-button rave-btn" onClick={() => initializePayment()}>Pay &nbsp; ₦{price}</button>
            
        </div>
    )
}

export default RaveButton
