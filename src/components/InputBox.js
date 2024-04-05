import React, { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./TextBox.css";
//import ReCAPTCHA from "react-google-recaptcha";

const FullWidthTextField = () => {
  const [url, setUrl] = useState("");
  const [btnText, setBtnText] = useState("Shorten");

  const baseUrl = "https://api.shrtco.de/v2/shorten?";
  const getUrl = `${baseUrl}url=${url}`;

  //const [verified, setVerified] = useState(false);

  // function onChange(value) {
  //   //setVerified(true);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl("Loading...");
    if (btnText === "Copy To Clipboard") {
      navigator.clipboard.writeText(url);
      setBtnText("Copied!");
      setUrl(url);
    } else
      axios
        .get(getUrl)
        .then((response) => {
          // handle success
          setUrl(response.data.result.full_short_link);
          setBtnText("Copy To Clipboard");
          // setVerified(false);
        })
        .catch(function (error) {
          // handle error
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid URL! Please check the URL and try again.",
          });
          setUrl("");
          // setVerified(false);
        });
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
    if (e.target.value !== url) {
      setBtnText("Shorten");
    }
  };

  return (
    <Box className="text-box-container">
      <TextField
        className="url-area"
        fullWidth
        id="fullWidth"
        value={url}
        onChange={handleChange}
        placeholder="Paste long url and shorten it"
        size="small"
        helperText="Ex: http://example.com/"
        sx={{
          [`& fieldset`]: {
            borderRadius: 50,
          },
        }}
      />
      <Box className="btn-box">
        <Button
          className="btn"
          onClick={handleSubmit}
          variant="contained"
          // disabled={!verified}
          style={{
            borderRadius: 50,
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          {btnText}
        </Button>
      </Box>
      {/* <Box className="recaptcha-box">
      <ReCAPTCHA
          sitekey="6Lc5GGYhAAAAAKWur2E8b4lWO7NXbzRsSHSPltHD"
          onChange={onChange}
        />
      </Box> */}
    </Box>
  );
};

export default FullWidthTextField;
