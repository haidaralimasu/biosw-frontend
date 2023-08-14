import bios from "../../../public/bios.png";
// import discord from "../../../public/discord.png";
import email from "../../../public/email.png";
import twitter from "../../../public/twitter.png";
import telegran from "../../../public/telegram.png";
import facebook from "../../../public/facebook.png";
import youtube from "../../../public/youtube.png";
import medium from "../../../public/medium.png";
import document from "../../../public/document.png";
import doubletick from "../../../public/double-tick.png";
import warning from "../../../public/warning.png";

export default function Footer() {
  return (
    <footer
      id="faq"
      className="bg-[#142930] p-2 md:p-6 leading-7 text-[#C1C1C1] space-y-10"
    >
      <img
        className="w-28 xl:ml-[11%] 2xl:ml-[12%]"
        alt="Logo BiosWorld"
        src={bios}
      />
      <div className="flex justify-center">
        <div className="flex flex-col sm:flex-row justify-around text-base max-w-[1520px] xl:text-base 2xl:text-2xl xl:mx-28">
          <div className="container">
            <div className="hidden lg:block md:w-[70%] space-y-5">
              <p>
                Bios World Driving Environmental Change through Community and
                Blockchain
              </p>
              <p>
                We take great pride in our team of passionate specialists who
                are deeply committed to protecting the environment and promoting
                biodiversity. Our main goal is to raise awareness among the
                blockchain community about these essential pursuits. Through a
                range of dynamic initiatives, including the NFT marketplace,
                Vote-to-Earn (v2E), Educational Driven Play to Earn (P2E),
                crowdfunding, Rate to Earn (R2E), and Stake to Earn (S2E), we
                aim to empower individuals to make a positive impact.
              </p>
              <p>
                Together, we can create a greener and more sustainable future,
                where blockchain technology becomes a catalyst for environmental
                change. Join us in our mission and let's shape a better world
                for generations to come!
              </p>
            </div>
          </div>
          <ul className="flex flex-col text-center sm:text-left xl:space-y-4 mb-8 md:mr-16">
            <li className="hover:text-green-300">
              <a href="#about">About us</a>
            </li>
            <li className="hover:text-green-300">
              <a href="#tokenomics">Tokenomics</a>
            </li>
            <li className="hover:text-green-300">
              <a href="#">Charity Ambassadors</a>
            </li>
            <li className="hover:text-green-300">
              <a href="#roadmap">Roadmap</a>
            </li>
            <li className="hover:text-green-300">
              <a href="/biosword pitchdeck.pdf">Whitepaper</a>
            </li>
          </ul>
          <div className="ml-4 mr-[10%] lg:ml-12">
            <ul className="flex gap-3 sm:hidden">
              {/* <li>
                <a href="https://t.me/+SHC0-kzuABk0NGQ5">
                  <img alt="Logo Telegran" src={telegran} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbiosworld23">
                  <img alt="Logo Twitter" src={twitter} />
                </a>
              </li>
              <li>
                <a href="https://medium.com/@biosworld23">
                  <img alt="Logo medium" src={medium} />
                </a>
              </li> */}
              <li>
                <a href="https://www.support@biosworld.io">
                  <img alt="support@biosworld.io" src={email} />
                </a>
              </li>
              <li>
                <a href="/Biosworld_Privacy_Policy.pdf">
                  <img alt="Privacy Policy" src={document} />
                </a>
              </li>
              {/* <li>
                <a href="https://www.facebook.com/biosworld">
                  <img alt="Logo Discord" src={facebook} />
                </a>
              </li> */}
              <li>
                <a href="/BIOSW Terms_Of_Service (2).pdf (1).pdf">
                  <img alt="Terms of service" src={doubletick} />
                </a>
              </li>
              {/* <li>
                <a href="https://www.youtube.com/channel/UCIN-JdOQFvMN82zxhLY6lkQ">
                  <img alt="Logo Discord" src={youtube} />
                </a>
              </li> */}
              <li>
                <a href="/BIOSW Disclaimer & Risk Disclosure.pdf">
                  <img src={warning} alt="warning" />
                </a>
              </li>
            </ul>
            <ul className="hidden sm:block md:flex md:flex-col w-40 space-y-1 xl:space-y-4 mt-4 2xl:text-xl">
              {/* <li className="flex flex-row space-x-2">
                <img alt="Logo Telegran" src={telegran} />
                <a href="https://t.me/+SHC0-kzuABk0NGQ5">Telegran</a>
              </li> */}
              {/* <li className="flex flex-row space-x-2">
                <img alt="Logo Twitter" src={twitter} />
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbiosworld23">
                  Twitter
                </a>
              </li> */}
              {/* <li className="flex flex-row space-x-2">
                <img alt="Logo Facebook" src={facebook} />
                <a href="https://www.facebook.com/biosworld">Facebook</a>
              </li> */}
              {/* <li className="flex flex-row space-x-2">
                <img alt="Logo Discord" src={youtube} />
                <a href="https://www.youtube.com/channel/UCIN-JdOQFvMN82zxhLY6lkQ">
                  Youtube
                </a>
              </li> */}
              {/* <li className="flex flex-row space-x-2">
                <img alt="Logo Discord" src={medium} />
                <a href="https://medium.com/@biosworld23">Medium</a>
              </li> */}

              <li className="flex flex-row items-center hover:text-green-400 space-x-2">
                <img alt="Support biosworld" src={email} />
                <a href="mailto:support@biosworld.io">Contact Us</a>
              </li>
              <li className="flex flex-row items-center hover:text-green-400 space-x-2">
                <img alt="Privacy Policy" src={document} />
                <a href="/Biosworld_Privacy_Policy.pdf">Privacy Policy</a>
              </li>
              <li className="flex flex-row items-center hover:text-green-400 space-x-2">
                <img alt="Privacy Policy" src={doubletick} />
                <a href="/BIOSW Terms_Of_Service (2).pdf (1).pdf">
                  <p>Terms of Service</p>
                </a>
              </li>
              <li className="flex flex-row items-center hover:text-green-400 space-x-2">
                <img className="" alt="Privacy Policy" src={warning} />
                <a href="/Biosworld_Privacy_Policy.pdf">Disclaimer</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="flex justify-center text-base lg:text-3xl 2xl:pt-10">
        © Copyright 2023. All Rights Reserved
      </p>
    </footer>
  );
}
