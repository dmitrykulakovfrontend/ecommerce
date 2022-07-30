import React from "react";
import styles from "./checkout.module.css";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Header from "../../components/Header";
import TotalPrice from "../../components/TotalPrice";

const {
  shippingInfoContainer,
  shippingInfoHeader,
  shippingInfoMain,
  shippingInfoItem,

  paymentInfoContainer,
  paymentInfoHeader,
  paymentInfoMain,
  paymentInfoOption,
  paymentInfoCardWrapper,
  totalPriceWrapper,
} = styles;

export default function Checkout() {
  return (
    <Container backgroundColor="rgb(245, 245, 248)">
      <Header title="Checkout" />

      <div className={shippingInfoContainer}>
        <div className={shippingInfoHeader}>
          <h2>Shiping Information</h2>
          <span>change</span>
        </div>
        <div className={shippingInfoMain}>
          <div className={shippingInfoItem}>
            <img
              src="../../assets/profile.png"
              width="18px"
              height="auto"
              alt="profile"
            />
            <p>Rosina Doe</p>
          </div>
          <div className={shippingInfoItem}>
            <img
              src="../../assets/location.png"
              width="20px"
              height="auto"
              alt="shipping address"
            />
            <p>43 Oxford Road M13 4GR Manchester, UK</p>
          </div>
          <div className={shippingInfoItem}>
            <img
              src="../../assets/call.png"
              width="20px"
              height="auto"
              alt="telephone"
            />
            <p>+234 9011039271</p>
          </div>
        </div>
      </div>

      <div className={paymentInfoContainer}>
        <h2 className={paymentInfoHeader}>Payment Method</h2>
        <div className={paymentInfoMain}>
          <div className={paymentInfoOption}>
            <input type="radio" name="payment-card" />
            <div className={paymentInfoCardWrapper}>
              <img
                src="../../assets/visa.png"
                width="40px"
                height="auto"
                alt="visa"
              />
            </div>
            <span>**** **** **** 1234</span>
          </div>
          <div className={paymentInfoOption}>
            <input type="radio" name="payment-card" />
            <div className={paymentInfoCardWrapper}>
              <img
                alt="mastercard"
                src="../../assets/master-card.png"
                width="40px"
                height="auto"
              />
            </div>
            <span>**** **** **** 1234</span>
          </div>
        </div>
      </div>

      <div className={totalPriceWrapper}>
        <TotalPrice amount={954} />
      </div>

      <Button inverted>Confirm and Pay</Button>
    </Container>
  );
}
