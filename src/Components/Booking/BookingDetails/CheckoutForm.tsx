import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({service, user}:any) => {
  const stripe = useStripe();
  const elements = useElements();
const [cardError, setCardError] = useState<string | undefined>("");
const [success, setSuccess] = useState("");
const [payment, setPayment] = useState("");

const [clientSecret, setClientSecret] = useState("");

const {price} = service;
const {name,email} = user;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({price}),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.clientSecret){
          setClientSecret(data.clientSecret)
        }
      });
  }, [price]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setSuccess("");
    setCardError((error?.message) || "");

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret ,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      },
    );
    if(confirmError){
      setCardError(confirmError?.message);
    }
    else{
      setCardError("");
      setPayment(paymentIntent.id)
      setSuccess("Congratulation your payment complete")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
        className=" bg-white p-2"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "green",
                "::placeholder": {
                  color: "Grey",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {
        cardError && success ? <p className="text-red-400 text-center mt-2">{cardError}</p> : ""
      }
        {
        success ? <div className="div">
          <p className="text-green-400 text-center mt-2">{success}</p>
          <p className="text-green-400 text-center mt-2">TrxId : <span className="text-orange-500">{payment}</span> </p>
        </div> : ""
      }
        <div className="flex justify-between items-center mt-6">
        
          <p className="text-md">Your Service charged $<span className="text-orange-500">{service.price}</span></p>
          <button
            className="btn btn-sm px-8 btn-primary"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default CheckoutForm;
