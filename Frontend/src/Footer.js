import React, { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "./firebase";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  const [email, setEmail] = useState("");
  const db = getDatabase(auth);
  const putdata = () => {
    if (email === "") {
      alert("missing data");
      return false;
    }
    set(ref(db, "newsletter/" + email), {
      email: email,
    });
    alert("We will sent newsletter shortly");
  };
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark" >
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <div>
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn
                  onClick={putdata}
                  outline
                  color="light"
                  type="submit"
                  className="mb-4"
                >
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </div>
        </section>

        <section className="mb-4">
          <p>
            Elevate your everyday with our array of essential services tailored
            to simplify your life. From errands to essentials, we're your
            one-stop solution. Enjoy seamless convenience and efficiency as we
            handle the details, leaving you more time for what matters.
            Transform your daily routine with Clickeazzy. Discover the ease of
            our services today and experience life simplified
          </p>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        All right Reserved © 2024 Copyright:
        <a className="text-white" href="/">
          ClickEazzy.com
        </a>
      </div>
    </MDBFooter>
  );
}
