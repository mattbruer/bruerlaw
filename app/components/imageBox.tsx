"use client";
import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "60vw",
  bgcolor: "red",
  border: "2px solid #fff",
  p: 4,
};
type imgBoxProps = {
  src: string;
  alt: string;
  text: string;
};

const ImageBox = ({ src, alt, text }: imgBoxProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="imageBox">
      <Image
        style={{
          padding: "2px",
          border: "1px solid lightgrey",
          objectFit: "cover",
        }}
        src={src}
        alt={alt}
        fill={true}
      />
      <div className="imageBox-text-container">
        <p>{text}</p>
      </div>
      <Button
        aria-label={`view ${alt}image`}
        style={{ height: "100%", width: "100%" }}
        onClick={handleOpen}
      ></Button>
      <Modal
        id="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <Image
              style={{ boxShadow: "0px 0px 15px 2px black" }}
              src={src}
              alt={alt}
              fill={true}
            />
            <div
              style={{
                position: "relative",
                height: "60vw",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  bottom: 0,
                  color: "white",
                }}
              >
                {text}
              </p>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default ImageBox;
