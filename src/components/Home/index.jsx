import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  // Card,
} from "@material-tailwind/react";

import { Link } from "react-scroll";

import logo from "../../../public/img/home/bios.png";
import arrow from "../../../public/img/home/Arrow 1.png";
import tree from "../../../public/h-tree-min.png";
import tigerr from "../../../public/Tiger.png";

import { useTranslation } from "react-i18next";


export default function Home() {

  const { t } = useTranslation();

  const [openNav, setOpenNav] = React.useState(false);
  
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);
    
    const navList = (
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
        >
        <a href="#home" className="flex items-center">
          {t("homeNav-home")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center">
          {t("homeNav-about")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
        >
        <a href="#tokenomics" className="flex items-center">
          {t("homeNav-tokenomics")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
        >
        <a href="#roadmap" className="flex items-center">
          {t("homeNav-roadmap")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#howtobuy" className="flex items-center">
          {t('homeNav-howtobuy')}
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#faq" className="flex items-center">
          FAQ
        </a>
      </Typography> */}
    </ul>
  );
  

  return (
    <header
      id="home"
      className="relative w-full h-[50rem] lg:h-[67.5rem] overflow-hidden"
    >
      <img
        className="absolute object-cover w-full h-full"
        src="/H-bg-min.png"
        alt="imagem de fundo"
      />
      <div className="flex flex-col justify-center">
        <Navbar className="container fixed top-0 z-50 h-max max-w-full bg-[rgba(23,57,35,0.85)] border-none rounded-none py-2 px-4 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between lg:justify-around ">
            {/* <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography> */}
            <img className="w-24 lg:w-40" src={logo} alt="nature image" />
            <div className="flex justify-center items-center  gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              {/* <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Buy Now</span>
            </Button> */}
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button> */}
          </MobileNav>
        </Navbar>
        <div className="container">
          <div className="w-4/5 lg:w-1/2 2xl:w-2/3 pt-40 lg:pt-60 space-y-12 px-4 lg:ml-24 xl:ml-0 2xl:ml-80">
            {/* <Card className="mb-12 overflow-hidden">
            <img
              alt="nature"
              className="h-[32rem] w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
            />
          </Card> */}
            <Typography
              variant="h2"
              color="white"
              className="text-3xl lg:text-6xl 2xl:text-7xl font-['Cattino'] leading-10 text-white justify-start relative lg:max-w-3xl 2xl:max-w-4xl z-10"
            >
              {t('homeTitle')} <span className="text-[#39f89c]">{t('homeTitleSpan')}</span>
            </Typography>
            <Typography className="font-normal text-[#EAEAEA] relative z-10">
              {t('homeSubtitle')}
            </Typography>
            <Link
              className="flex flex-row"
              to="card-payment"
              smooth={true}
              duration={500}
            >
              <Button className="bg-[#40a072] flex flex-row justify-center rounded-none relative px-4 z-10 lg:w-[17.25rem] lg:h-[5.625rem] items-center">
                <span className="whitespace-nowrap md:text-lg lg:text-2xl leading-[39px] text-white relative p-2 w-1/2">
                  {t('homeButton')}
                </span>
                <img className="ml-2 p-3" src={arrow} alt="arrow" />
              </Button>
            </Link>
          </div>
          <img
            className="w-1/2 lg:w-1/3 absolute right-0 bottom-0  z-10 "
            src={tigerr}
            alt="tiger"
          />
          <img
            className="absolute right-0 bottom-0 z-0"
            src={tree}
            alt="tree"
          />
          {/* <img className="absolute w-[30rem] lg:w-[200rem] top-0 right-0 bg-repeat" src={luz} alt="Luz verde" />
            <img className="absolute top-0" src={luz1} alt="Luz verder" /> */}
        </div>
      </div>
    </header>
  );
}
