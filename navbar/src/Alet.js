import {Alert, Button} from 'react-bootstrap';
import React, {useState} from 'react';
function AlertDismissibleExample() {
  //const [show, setShow] = useState(true);

//   if (show) {
    return (
    //   <Alert variant="danger" onClose={() => setShow(false)} dismissible>
    //     <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    //     <p>
    //       Change this and that and try again. Duis mollis, est non commodo
    //       luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    //       Cras mattis consectetur purus sit amet fermentum.
    //     </p>
    //   </Alert>
    [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
))
    );
 // }
  //return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default AlertDismissibleExample;

