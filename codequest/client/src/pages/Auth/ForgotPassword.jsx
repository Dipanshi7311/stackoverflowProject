import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../action/auth';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email && !phone) {
            alert("Enter email or phone number");
            return;
        }
        dispatch(resetPassword({ email, phone }));
    };

    return (
        <div className="forgot-password-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="phone">
                    <h4>Phone</h4>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <button type="submit" className="auth-btn">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
