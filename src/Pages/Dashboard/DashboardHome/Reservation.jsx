import { loadStripe } from "@stripe/stripe-js";
import Title from "../../../Component/ShareTitle/Title";
import { Elements } from "@stripe/react-stripe-js";

import CheckOutForm from "../../../Hooks/CheckOutForm";

const stripPromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Reservation = () => {
 
  // payment form working

  return (
    <section>
      <Title subheading="Payment"></Title>
      <div>
        <Elements stripe={stripPromise}>
          {/* <CheckOutForm /> */}
          <CheckOutForm />
        </Elements>
      </div>
    </section>
  );
};

export default Reservation;
