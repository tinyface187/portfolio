import React from "react";

import { Background, Modal, Title, Form, Label, Input, Divider, InputMsg } from "./EmailModalStyles";
import { Button } from "../../../../styles/globalStyles";

const EmailModal = () => {

  function clearForm() {
    document.querySelectorAll(".emailModal").forEach((f) => {
      f.reset();
    });
  }

  function close(e) {
    if(e.target === document.getElementById("emailModalWrapper")) {
      document.getElementById("emailModalWrapper").style.display = "none";
    }
  }

  return (
    <Background id="emailModalWrapper" onClick={(e) => close(e)}>
      <Modal id="emailModal">
        <Title className="gradient-text">E-Mail Me!</Title>
        <Form action="https://formsubmit.co/nforester351@gmail.com" method="POST">
          <Divider />
            <input type="hidden" name="_next" value="https://portfolio-nforester.vercel.app/pages/thankYou" />
          <div>
            <Label for="Name" className="gradient-text">Name:</Label><br />
            <Input type="text" name="Name" class="emailModal" autoComplete="off" required/>
          </div>
          <div>
            <Label for="e-mail" className="gradient-text">E-Mail:</Label><br />
            <Input type="email" name="E-Mail" class="emailModal" autoComplete="off" required/>
          </div>
          <div>
            <Label for="Message" className="gradient-text">Message:</Label><br />
            <InputMsg type="textbox" name="Message" class="emailModal" autoComplete="off" />
          </div>
          <Button type="submit" onClick={clearForm} style={{ transform: "scale(0.8)", marginLeft: "15%" }}>Send E-Mail</Button>
        </Form>
      </Modal>
    </Background>
  );
}

export default EmailModal;