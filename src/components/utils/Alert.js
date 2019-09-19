import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertDismissible({alertTitle, alertContent, alertType}) {
  const [show, setShow] = useState(true);

  useEffect(
    () => {
      let timer = setTimeout(() => setShow(false), 2000);
      return () => {
         clearTimeout(timer)
      }
    }
  )
  return (
    <>
      <Alert show={show} onClose={() => setShow(false)} variant={alertType} dismissible>
        <Alert.Heading>{alertTitle}</Alert.Heading>
        <p>
          {alertContent}
        </p>
      </Alert>
    </>
  );
}
