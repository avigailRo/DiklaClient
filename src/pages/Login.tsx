import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../apiCalls/userCalls';
import IUser from '../model/IUser';
import IUserState from '../model/IUserState';
import { RootState, store } from '../redux/store';
import { useSelector } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { setUserId } from '../redux/slices/userIdSlice';
import { Alert, AlertProps } from '@mui/material';
import { SnackBar } from './globalCss.styles';
interface FormData {
    username: string;
    email: string;
    password: string;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
    });
    const user: IUser = useSelector<RootState, IUserState>((state: any) => state.userReducer).user;
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
        // Add the action to send the details to the server or perform additional processing
    };

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        // Navigate to the "Register" page
        navigate('/Register');
    };
    const loginUser = async () => {

        try {
            const res = await login(formData.email, formData.password);
            if (res.data) {
                sessionStorage.setItem("token", res.data.token);
                store.dispatch(setUser(res.data.user))
                store.dispatch(setUserId(res.data.userId))
                setSnackbar({ children: ' successfully login', severity: 'success' });
                navigate('/Shop');
            } else {
                setSnackbar({ children: 'An unexpected error occurred. Please try again later.', severity: 'error' });
                navigate('/Register');

            }
        } catch (err:any) {
            setSnackbar({ children: "Something went wrong. An error occurred: " + err.message, severity: 'error' });
        }
    };
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
                    textAlign: 'right', // Align text to the right
                    width: '300px', // Set a fixed width
                }}
            >
                <h2 style={{ fontSize: '24px', margin: '0 0 20px' }}>התחברות</h2>
                <form onSubmit={handleSubmit}>

                    <label style={{ display: 'block', margin: '10px 0', textAlign: 'right' }}>
                        :מייל
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
                        :סיסמה
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
                        onClick={loginUser} >
                        התחברות
                    </button>
                    <br />
                    <br></br>
                    <button
                        style={{
                            backgroundColor: '#DAA520',
                            color: 'white',
                            cursor: 'pointer',
                            width: '100%', // Make the button full-width
                            padding: '10px', // Add padding to the button
                            fontSize: '16px',
                            border: 'none',
                        }}
                        onClick={handleRegisterClick}
                    >
                        הרשמה
                    </button>
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

export default Login;
