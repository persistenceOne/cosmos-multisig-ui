import React from "react";

import Head from "../head";
import StackableContainer from "./StackableContainer";

const Page = (props) => {
  return (
    <div className="page">
      <Head title={props.title || "Persistence Multisig Manager"} />
      <div className="container">
        {props.rootMultisig && (
          <div className="nav">
            <StackableContainer base lessPadding lessMargin>
              <p>
                <a href={`/multi/${props.rootMultisig}`}>← Back to multisig account</a>
              </p>
            </StackableContainer>
          </div>
        )}
        {props.children}
      </div>
      <div className="footer-links">
        <StackableContainer base lessPadding lessMargin>
          <p>
            <a href="https://github.com/samepant/cosmoshub-legacy-multisig">View on github</a>
          </p>
        </StackableContainer>
      </div>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
        .page {
          display: flex;
          justify-content: center;
          padding: 120px 0;
        }
        .container {
          position: relative;
          
        }
        button {
          background: rgba(229, 9, 19, 1 ) !important;
        }
        .nav {
          position: absolute;
          top: -40px;
          left: 0;
          display: flex;
        }
        a,
        a:visited {
          color: white;
        }
        .footer-links {
          position: fixed;
          bottom: 20px;
          right: 20px;
        }
      `}</style>
      <style global jsx>{`
        body {
          font-family: 'Poppins', sans-serif;
          color: white;
          min-height: 100vh;
          background: radial-gradient(99.06% 99.06% at 49.65% .94%,#222426 0,#282932 100%);
          font-size: 16px;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
        *:focus {
          outline: none;
        }
        button {
          cursor: pointer;
        }
        h1 {
          margin: 0;
          font-weight: 400;
          line-height: 1.15;
          font-size: 1.4em;
          text-align: center;
        }
        h2 {
          font-size: 1.25em;
          font-weight: 400;
          margin: 0;
        }
        h3 {
          font-size: 1em;
          font-style: italic;
          font-weight: bold;
          margin: 0;
        }
        p {
          max-width: 350px;
          margin: 0;
          font-size: 12px;
          font-style: italic;
          line-height: 14px;
        }
      `}</style>
    </div>
  );
};

export default Page;
