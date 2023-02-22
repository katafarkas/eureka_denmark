"use client";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="bg-secondary-200 text-center text-white">
      <div className="px-6 pt-6 w-full">
        <div className="mb-6 flex justify-center w-full">
          <IconButton>
            <FacebookIcon className="m-1 h-9 w-9" />
          </IconButton>
          <IconButton>
            <InstagramIcon className="m-1 h-9 w-9" />
          </IconButton>
          <IconButton>
            <EmailIcon className="m-1 h-9 w-9" />
          </IconButton>
        </div>
      </div>

      <div className="p-4 text-center bg-secondary-400">
        © 2023 Copyright:
        <a className="text-whitehite" href="https://tailwind-elements.com/">
          Eureka Denmark
        </a>
      </div>
    </footer>
  );
};

export default Footer;
