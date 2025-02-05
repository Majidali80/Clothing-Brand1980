"use client";

import { useState } from "react";
import { useCart } from "../context/cartContext";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";
import Link from "next/link";
import { createClient } from "@sanity/client";
import Swal from "sweetalert2";

// Sanity client configuration
const sanityClient = createClient({
  projectId: "ilhf9wt8", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name
  apiVersion: "2023-05-03", // Replace with your API version
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Add this token in .env.local
});

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    country: "Pakistan",
    subscribe: false,
    comment: "",
  });
  const [paymentOption, setPaymentOption] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const requiredFields = ["firstName", "lastName", "email", "phone", "address1", "city"];
    return requiredFields.every((field) => Boolean(formData[field as keyof typeof formData]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire("Error", "Please fill in all required fields.", "error");
      return;
    }

    if (!paymentOption) {
      Swal.fire("Error", "Please select a payment method.", "error");
      return;
    }

    const orderData = {
      _type: "order",
      customer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: {
          street1: formData.address1,
          street2: formData.address2,
          city: formData.city,
          country: formData.country,
        },
        subscribe: formData.subscribe,
      },
      items: cart.map((item) => ({
        _key: item._id,
        product: {
          _type: "reference",
          _ref: item._id,
        },
        quantity: item.quantity,
        price: item.price,
      })),
      paymentMethod: paymentOption,
      subtotal,
      shipping,
      total,
      orderDate: new Date().toISOString(),
      notes: formData.comment,
    };

    try {
      setIsSubmitting(true);

      const result = await sanityClient.create(orderData);
      Swal.fire({
        title: "Order Placed!",
        html: `
          <p><strong>Order ID:</strong> ${result._id.substring(0, 8)}</p>
          <p><strong>Total Amount:</strong> $${total.toFixed(2)}</p>
          <p><strong>Payment Method:</strong> ${paymentOption}</p>
        `,
        icon: "success",
      });

      clearCart();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        country: "Pakistan",
        subscribe: false,
        comment: "",
      });
      setPaymentOption("");
    } catch (error) {
      console.error("Failed to place order:", error);
      Swal.fire("Error", "Failed to place order. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6">Delivery Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="border p-2 rounded"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="address1"
              placeholder="Address Line 1"
              value={formData.address1}
              onChange={handleInputChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="address2"
              placeholder="Address Line 2"
              value={formData.address2}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="border p-2 rounded w-full"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            >
              <option value="Pakistan">Pakistan</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
            </select>
            <textarea
              name="comment"
              placeholder="Additional Comments (Optional)"
              value={formData.comment}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
            />
            <div>
              <label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="Credit Card"
                  onChange={(e) => setPaymentOption(e.target.value)}
                  required
                />
                Credit Card
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="paymentOption"
                  value="PayPal"
                  onChange={(e) => setPaymentOption(e.target.value)}
                  required
                />
                PayPal
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
