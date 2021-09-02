import React from 'react'
import { Nav } from "react-bootstrap";
import { CalendarWeek, EmojiSmile, Envelope, GearFill } from 'react-bootstrap-icons';
import classes from './Sidebar.module.css'
import clsx from 'clsx'
const Sidebar = () => {
    return (<>

        <Nav className={clsx('bg-white', classes.sidebar)}
            defaultActiveKey="/"
        >
            <Nav.Item className={classes.navItem}>
                <Nav.Link href="/" className={classes.navLink}> <CalendarWeek className={clsx(classes.navIcon, classes.active)} /> </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.navItem}>
                <Nav.Link href="/account">
                    <EmojiSmile className={classes.navIcon} /> </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.navItem}>
                <Nav.Link href="/mail"> <Envelope className={classes.navIcon} /> </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.navItem}>
                <Nav.Link href="/setting"><GearFill className={classes.navIcon} /></Nav.Link>
            </Nav.Item>
        </Nav>
    </>)
}
export default Sidebar;