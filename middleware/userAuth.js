// middleware/auth.js

export default function ({ store, redirect, route }) {
    // Check if the user is authenticated
    if (!store.state.loginAdmin.isAuthAdmin) {
      redirect('login')
    }
  }
  