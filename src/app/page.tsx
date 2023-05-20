import React from "react";
import Head from "next/head";
import './globals.css';
import Script from "next/script";

export default function Home() {
  
  return (
    <>

      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
      
      <df-messenger
        intent="WELCOME"
        chat-title="test"
        agent-id="f873b93c-0392-4a81-9708-c946b44eacdb"
        language-code="en"
        expand="true"
      >
      </df-messenger>
  
      <h1>hi</h1> 
     


    </>
  );
}