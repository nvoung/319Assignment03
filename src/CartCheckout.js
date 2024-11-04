import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
} from 'react-router-dom';

import { useLocation } from 'react-router-dom';

function CartCheckout({ cart, setCart, cartTotal, setCartTotal }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data); // log all data
		console.log(data.fullName); // log only fullname
		// update hooks
		setCart(data);
		setCartTotal(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className="container mt-5">
				<div className="form-group">
					<input
						{...register('firstName', { required: true })}
						placeholder="First Name"
						className="form-control"
					/>
					{errors.firstName && (
						<p className="text-danger">First Name is required.</p>
					)}
				</div>
				<div className="form-group">
					<input
						{...register('lastName', { required: true })}
						placeholder="Last Name"
						className="form-control"
					/>
					{errors.lastName && (
						<p className="text-danger">Last Name is required.</p>
					)}
				</div>
				<div className="form-group">
					<input
						{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
						placeholder="Email"
						className="form-control"
					/>
					{errors.email && <p className="text-danger">Email is required.</p>}
				</div>
		
				<div className="form-group">
					<input
						{...register('address', { required: true })}
						placeholder="Address"
						className="form-control"
					/>
					{errors.address && (
						<p className="text-danger">Address is required.</p>
					)}
				</div>
			
				<div className="form-group">
					<input
						{...register('address2')}
						placeholder="Address 2"
						className="form-control"
					/>
				</div>
			
				<div className="form-group">
					<input
						{...register('city', { required: true })}
						placeholder="City"
						className="form-control"
					/>
					{errors.city && <p className="text-danger">City is required.</p>}
				</div>
			
				<div className="form-group">
					<input
						{...register('state', { required: true })}
						placeholder="State"
						className="form-control"
					/>
					{errors.state && <p className="text-danger">State is required.</p>}
				</div>
			
				<div className="form-group">
					<input
						{...register('zip', { required: true })}
						placeholder="Zip"
						className="form-control"
					/>
					{errors.zip && <p className="text-danger">Zip is required.</p>}
				</div>

			
				<h4 className="mb-3">Payment</h4>
				<div className="my-3">
					<div className="form-check">
						<input
							id="credit"
							{...register('paymentMethod', {
								required: 'Payment method is required',
							})}
							type="radio"
							value="credit"
							className="form-check-input"
						/>
						<label className="form-check-label" htmlFor="credit">
							Credit card
						</label>
					</div>
					<div className="form-check">
						<input
							id="debit"
							{...register('paymentMethod', {
								required: 'Payment method is required',
							})}
							type="radio"
							value="debit"
							className="form-check-input"
						/>
						<label className="form-check-label" htmlFor="debit">
							Debit card
						</label>
					</div>
					<div className="form-check">
						<input
							id="paypal"
							{...register('paymentMethod', {
								required: 'Payment method is required',
							})}
							type="radio"
							value="paypal"
							className="form-check-input"
						/>
						<label className="form-check-label" htmlFor="paypal">
							PayPal
						</label>
					</div>
				</div>

				{errors.paymentMethod && (
					<p className="text-danger">{errors.paymentMethod.message}</p>
				)}

				<div className="form-group">
					<input
						{...register('creditCard', { required: true })}
						placeholder="Credit Card #"
						className="form-control"
					/>
					{errors.creditCard && (
						<p className="text-danger">Credit Card Number is required.</p>
					)}
				</div>
			
				<div className="form-group">
					<input
						{...register('expiration', { required: true })}
						placeholder="Expiration Date"
						className="form-control"
					/>
					{errors.expiration && (
						<p className="text-danger">Expiration Date is required.</p>
					)}
				</div>
			
				<div className="form-group">
					<input
						{...register('cvv', { required: true })}
						placeholder="CVV #"
						className="form-control"
					/>
					{errors.cvv && <p className="text-danger">CVV Number is required.</p>}
				</div>
			
				<button type="submit" className="btn btn-primary">
					Purchase
				</button>
			</form>
		</div>
	);
}
export default CartCheckout;
