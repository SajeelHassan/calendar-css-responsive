import React from 'react'
import { Button, Form } from 'react-bootstrap'
import classes from './AppointmentForm.module.css'
import clsx from 'clsx';

const AppointmentForm = () => {
    return (<div>
        <Form>
            <Form.Group className={classes.formGroup}>
                <Form.Label column sm="2" >
                    Kunde:
                </Form.Label>
                <Form.Control type="text" />

            </Form.Group>

            <Form.Group className={classes.formGroup} >
                <Form.Label column sm="2">
                    Mitarbeiter:
                </Form.Label>

                <Form.Control type="text" />

            </Form.Group>
            <div className={classes.FromTo}>
                <Form.Group className={clsx(classes.formGroup, classes.formGroupMini)}>
                    <Form.Label column sm="2">
                        Von:
                    </Form.Label>

                    <Form.Control type="text" />

                </Form.Group>
                <Form.Group className={clsx(classes.formGroup, classes.formGroupMini)} >
                    <Form.Label column sm="2">
                        Bis:
                    </Form.Label>

                    <Form.Control type="text" />

                </Form.Group>
            </div>
            <Button className={classes.button}>Buchen</Button>
        </Form>
    </div>)

}
export default AppointmentForm;