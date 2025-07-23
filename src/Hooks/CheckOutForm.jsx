import { useEffect, useState } from "react";
import useCards from "./useCards";
import useAxios from "./useAxios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOutForm = () => {
  const navigate = useNavigate();
  const [transition, setTransition] = useState("");
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [card] = useCards();
  //  payment set database
  const cardIds = card?.map((item) => item._id);
  const menuIds = card?.map((item) => item.menuId);

  const totalPrice = card?.reduce((sum, item) => sum + item.price, 0);

  const axiosSecure = useAxios();
  const [error, setError] = useState("");
  // payment form working

  const strips = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (card?.length && totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [card, totalPrice, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!strips || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await strips.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment methods error", error);
      setError(error.message);
    } else {
      console.log("payment method success", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await strips.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("payment is error", confirmError);
    } else {
      console.log("payment is success", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        console.log("transition", paymentIntent.id);
        setTransition(paymentIntent.id);
        // store the payment success document
        const paymentDetails = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), //must be added moment js
          cardIds: cardIds,
          menuIds: menuIds,
          status: "pending",
        };
        axiosSecure.post("/payments", paymentDetails).then((res) => {
          console.log(res.data.result);
          if (res.data.result.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Your Payment has been success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/payment_history");
          }
        });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <div>
        <h5 className="text-green-500">{transition}</h5>
      </div>
      <button
        className="btn btn-sm btn-primary"
        type="submit"
        disabled={!strips || !clientSecret}
      >
        Pay
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default CheckOutForm;
