"use client";
import { useRef } from "react";
import style from "./mail.module.css";
import Button from "../Button/Button";
import fectching from "../callback-end/fetch";
export default function Mail({ className, placeholder }) {
    let name = useRef(() => null);
    let email = useRef(() => null);
    let phone = useRef(() => null);
    let subject = useRef(() => null);
    let message = useRef(() => null);
    function sendMail() {
        console.log("test");
        let cName = name.current.value;
        let cEmail = email.current.value;
        let cPhone = phone.current.value;
        let cSubject = subject.current.value;
        let cMessage = subject.current.value;
        cMessage.replaceAll(/\n/ig, "<br>");
        let mailData = {
            to: "studyatmohamed@gmail.com",
            subject: cSubject,
            body:
            {
                username: cName,
                email: cEmail,
                phone: cPhone,
                message: cMessage
            }
        }
        fectching("https://mail-fjc1.onrender.com/mail","POST",mailData).then(
            res=>{
                console.log(res.status);
            }
        );
    }
    return <div className={"container " + style.mail + " " + className}>
        <input ref={name} placeholder="Your Name" />
        <input ref={email} placeholder="Your Email" />
        <input ref={phone} placeholder="Your Phone" />
        <input ref={subject} placeholder="Email subject" />
        <textarea ref={message} placeholder={placeholder || "Insert your text here..."}>
        </textarea>
        <Button text={"send"} onClick={sendMail}></Button>
    </div>
};