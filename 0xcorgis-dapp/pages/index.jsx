import Head from 'next/head'
import NavBar from '../components/NavBar';
import styled from '@emotion/styled'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useRive } from "rive-react";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

//background-color:  #B4D0FF;
const Hero = styled.section`
    width: 100%;
    min-height: calc(100vh - 240px);
    padding-top: 150px;
    display: grid;
    opacity: 1;
    justify-content: center;
`

const Background = styled.div`
background-image: url("background.svg");
background-size: contain;
animation-name: bg;
animation-duration: 100s;
animation-timing-function: linear;
animation-iteration-count: infinite;
width: 100%;
min-height: calc(100vh - 300px);
position: absolute;
top: 0;
bottom: 0;
left:0;

@keyframes bg {
    from { transform: translate(0, 0); }
    to { transform: translate(-100%, -5%); }
 }
`

const Button = styled.button`
    color: white;
    box-shadow: 0 10px 20px -10px #253078;
    width: 200px;
    height: 50px;
    font-size: 1em;
    border-radius: 60px;
    font-weight: 400;
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    transition-property: all;
    animation: gradient 20s ease infinite;
    background-size: 400% 400%;
    &:hover {
        background-color: rgb(254, 159, 53, 0.9);
        transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1.05) scaleY(1.05);
    }

    @keyframes gradient  {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
      }
`

const Title = styled.a`
    font-size: 1.5em;  
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(-45deg, #253078 0%, #CB5EEE 51%, #FEC14F 75%);
    animation: letter 1.25s steps(25, end) 0s infinite;
`

const params = {
    src: "https://ipfs.io/ipfs/QmRiTLSyft6Hu5XfhLszyY8DJEcT8iYsriW6gzTBDjEDsL?filename=miner.riv",
    autoplay: true,
    animations: ["platform"]
};

const params1 = {
    src: "https://ipfs.io/ipfs/QmQiWy1pzpHkBe6nQuwvqhfXmz7W6VEj5DwTf8MbnF6TCv?filename=minerjump.riv",
    autoplay: true,
    animations: ["jump"]
};

const params2 = {
    src: "https://ipfs.io/ipfs/QmU4KfihzLMnLeqLRm8gcyDqdE8XQNgkhb2ta5dkyKZxCh?filename=imposter.riv",
    autoplay: true,
    animations: ["imposter"]
}


const Home = () => {
    const { RiveComponent: PlatformRive, rive: platformrive } = useRive(params);
    const { RiveComponent: JumpRive, rive: jumprive } = useRive(params1);
    const { RiveComponent: ImposterRive, rive: imposterrive } = useRive(params2);

    return <div>
        <NavBar />
        < Background />
        <Hero style={{ zIndex: "305" }}>
            <section style={{ width: "1080px", display: "grid", gridTemplateColumns: "1fr 1fr", zIndex: "305" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gridRowGap: "15px" }}>
                    <h3 style={{ fontSize: "1.5em", margin: "0px", color: "white" }}> Build + Learn + Earn + Explore + Play</h3>
                    <h1 style={{ fontSize: "3.5em", margin: "0px", color: "white" }}><Title>Learn 2 Earn Games</Title> </h1>
                    <h2 style={{ fontSize: "2em", margin: "0px", color: "white" }}>Making web3 docs into a fun, cute, informative, game!</h2>
                    <Link href="learn">
                    <Button>
                      <strong>Press Start to Play ▶ </strong>
                      </Button>
                      
                      </Link>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center"
                }}>
                    <PlatformRive />
                </div>
            </section>
        </Hero>
        <section style={{ textAlign: "center", paddingTop: "30px", display: "grid", justifyItems: "center" }}>
            <strong style={{color: "white"}}>Roadmap</strong>
            <svg fill="white" height="16" width="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 30 30" enableBackground="new 0 0 30 30" xmlSpace="preserve">
                <g id="Background_xA0_Image_1_">
                </g>
                <g id="Row_1_1_">
                    <g>
                        <polygon points="24.4,9.8 15.1,18 5.7,9.8 3.1,12.9 15.1,23.3 27,12.9 24.4,9.8   " />
                    </g>
                </g>
            </svg>
        </section>

        <section style={{ display: "flex", flexDirection: "row", justifyItems: "center", justifyContent: "center" }}>

            <div style={{ alignSelf: "center", width: "1080px", height: "700px", display: "grid", gridTemplateColumns: "1fr 1fr", justifyContent: "center", justifyItems: "center", zIndex: "305", alignItems: "center" }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "540px",
                    height: "712px"
                }}>
                    <JumpRive />
                </div>
                <div >
                    <h3 style={{ fontSize: "1.5em", margin: "0px", color: "white" }}>FEATURES</h3>
                    <h1 style={{ fontSize: "3.5em", margin: "0px", color: "white" }}><Title>0x</Title>corgis</h1>
                    <p style={{ color: "white" }}>A love letter to web3 for a new audience, 0xcorgis is an teaching exploration game making documentation into a puzzle game.</p>
                </div>


            </div>
        </section>

        <section style={{ display: "flex", flexDirection: "row", justifyItems: "center", justifyContent: "center" }}>

            <div style={{ alignSelf: "center", width: "1080px", height: "700px", display: "grid", gridTemplateColumns: "1fr 1fr", justifyContent: "center", justifyItems: "center", zIndex: "305", alignItems: "center" }}>
                <div >
                    <h3 style={{ fontSize: "1.5em", margin: "0px", color: "white" }}>THE GAME</h3>
                    <h1 style={{ fontSize: "3.5em", margin: "0px", color: "white" }}><Title>0x</Title>corgis</h1>
                    <p style={{ color: "white" }}>Defeat imposter syndrome and explore the web3 space by playing puzzle and reading comics</p>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "540px",
                    height: "712px"
                }}>
                    <ImposterRive />
                </div>

            </div>
        </section>




      


        <footer style={{ display: "grid" }}>
            <div>
                ©2022 Code with Corgis™ • 0xcorgis
            </div>

        </footer>
    </div >
}

export default Home;

