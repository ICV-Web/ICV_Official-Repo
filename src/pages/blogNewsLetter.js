import React, { useState, useEffect } from "react"
import Layout from "../components/layout"

import {Container, Row, Col} from "react-bootstrap"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com'
import firebase from "gatsby-plugin-firebase"

const BlogNewsLetter = () => {
  
  const sendEmails = () => { 

    var emails = []
    let database = firebase.database();
    database.ref('/subscribed').once('value')
      .then(snapshot => {
        snapshot.forEach(child => {
          emails.push(child.val())
        })

        emails = [...new Set(emails)]
        console.log(emails)

        var templateParams = {
          emails : 'anas.qaiser@synapse-consulting.com.pk',
          bccEmails : emails.join(","),
        };

        console.log(templateParams)
        emailjs.send('service_s17rbh6', 'template_fzjx6ge', templateParams, 'user_25Y1NrEQ6qP3oZDPXy4Qt')
          .then((error) => {
            console.log(error.text);
          });
       })
       .catch(error => console.log(error))


  }
  
  useEffect(() => {
    sendEmails();
  }, []);

    return ('')
  }

export default BlogNewsLetter