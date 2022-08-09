import React from 'react';
import Navbar from './Navbar';
import FormValidator from './FormValidator';
import AlertDismissibleExample from './Alet';
import { Alert } from 'bootstrap';
const App = () => {
    return(
        <main>
            <Navbar />
            <AlertDismissibleExample />
            <FormValidator />
        </main>
        
        
        
    )
}

export default App;