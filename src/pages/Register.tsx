import React, { useState } from 'react';
import IUser from '../model/IUser';
import { login, signUp } from '../apiCalls/userCalls';
import { store } from '../redux/store';
import { setUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { setUserId } from '../redux/slices/userIdSlice';
import { SnackBar } from './globalCss.styles';
import { Alert, AlertProps } from '@mui/material';

interface FormData {
    username: string;
    email: string;
    password: string;
}

const Register = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [snackbar, setSnackbar] = React.useState<Pick<
        AlertProps,
        'children' | 'severity'
    > | null>(null);
    const handleCloseSnackbar = () => setSnackbar(null);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // כאן תוכל להוסיף את הפעולה של שליחת הפרטים לשרת או עיבוד נוסף
    };
    const handleSignUp = async() => {
        if(formData){
        const user: IUser = { userName: formData.username, email: formData.email, password: formData.password, username: formData.username };
        try {
             signUp(user).then(res=>{;       
            if (res.data) {
                sessionStorage.setItem("token", res.data.token);
                store.dispatch(setUser(res.data.user))
                store.dispatch(setUserId(res.data.userId))
                setSnackbar({ children: ' successfully login', severity: 'success' });
                navigate('/Shop');
            } else {
                setSnackbar({ children: 'An unexpected error occurred. Please try again later.', severity: 'error' });
            }
        })
        } catch (err:any) {
            setSnackbar({ children: "Something went wrong. An error occurred: " + err.message, severity: 'error' });
         }  }}
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div
                style={{
                    border: '2px solid gold',
                    borderRadius: '8px',
                    padding: '20px',
                    backgroundColor: 'white',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    width: '300px', // Set a fixed width
                }}
            >
                <h2 style={{ textAlign: 'right', fontSize: '24px', margin: '0 0 20px' }}>הרשמה</h2>
                <form onSubmit={handleSubmit}>
                    <label style={{ display: 'block', margin: '10px 0', textAlign: 'right' }}>
                        שם משתמש:
                        <br />
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </label>
                    <label style={{ display: 'block', margin: '10px 0', textAlign: 'right' }}>
                        מייל:
                        <br />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </label>
                    <label style={{ display: 'block', margin: '10px 0', textAlign: 'right' }}>
                        סיסמה:
                        <br />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                    </label>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: '#DAA520',
                            color: 'white',
                            cursor: 'pointer',
                            width: '100%', // Make the button full-width
                            padding: '10px', // Add padding to the button
                            fontSize: '16px',
                            border: 'none',
                        }}
                        onClick={handleSignUp}>
                        התחברות
                    </button>
                    <br />
                </form>
            </div>
            {!!snackbar && (
                <SnackBar
                    open
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    onClose={handleCloseSnackbar}
                    autoHideDuration={6000}
                >
                    <Alert {...snackbar} onClose={handleCloseSnackbar} />
                </SnackBar>)}
        </div>
    );
};

export default Register;
