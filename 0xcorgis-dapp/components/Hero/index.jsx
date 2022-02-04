import { AnimatePresence, motion, useCycle } from 'framer-motion'
import { useEffect } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled'


const Letters = styled.a`
    font-size: 1.5em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(135deg, ${props => props.color1} 50%, ${props => props.color2} 51%, ${props => props.color3} 75%);
    animation: letter 1.25s steps(25, end) 0s infinite;
    @keyframes letter {
        25% {
            background-image: linear-gradient(135deg, ${props => props.color3} 50%, ${props => props.color1} 51%, ${props => props.color2} 75%);
        }
        50% {
            background-image: linear-gradient(135deg, ${props => props.color2} 50%, ${props => props.color3} 51%, ${props => props.color1} 75%);
        }
        100% {
            background-image: linear-gradient(135deg, ${props => props.color1} 50%, ${props => props.color2} 51%, ${props => props.color3} 75%);
        }
    }

`



// animation: OpacityAnim 2s ease-in-out calc(-1 * 2s) infinite alternate;




const Split = ({ children, ...rest }) => {
  
    let colors = {
        "Web3": ["#fed58d", "#ffe3b4", "#b4f5ff"],
        "Solidity": ["#031596", "#4689AA", "#4657AA"],
        "Rustacean": ["#e33b26", "#E39A26", "#E3266F"],
        "Pythonian": ["#3572A5", "#353AA5", "#E3266F"],
        "Pythonista": ["#f6ff52", "#FEDA63", "#F9ECB4"]
    }
    
    let letters = children.split('')
    return letters.map((letter, index) => {
        return (<div
            key={children + index}
            style={{ display: 'inline-block', overflow: 'hidden' }}>
            <motion.div {...rest} style={{ display: 'inline-block', willChange: 'transform' }} custom={index}>
                <Letters color1={colors?.[children]?.[0]} color2={colors?.[children]?.[1]} color3={colors?.[children]?.[2]}>{letter === ' ' ? <span style={{ marginLeft: '30px', fontWeight: "600" }}></span> : letter}</Letters>
            </motion.div>
        </div>)
    })
}


const Hero = ({ svg }) => {
    const loading = (
        <div>Loading...</div>
    );



    const [currentLanguage, setLanguage] = useCycle(
        { text: "Web3" },
        { text: "Solidity" },
        { text: "Rustacean" },
        { text: "Pythonian" },
        { text: "Pythonista" }
    );
    // { text: "TypeScript", color: "#2b7489" },
    // { text: "JavaScript", color: "#f1e05a" }

    useEffect(() => {
        const timeOut = setTimeout(setLanguage, 7000);
        return () => clearTimeout(timeOut);
    }, [currentLanguage, setLanguage]);
    return <div style={{ height: "700px", background: "linear-gradient(130deg,  #B4D0FF 15%,  #B0BEEA 20%, #BFB0EA 50%, #B0DBEA 100%)", paddingTop: "150px" }}>
        <div style={{ width: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div>
                <h1 style={{ fontSize: "56px", color: "rgb(2, 14, 100)", fontWeight: "600" }}>
                    <AnimatePresence>
                        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
                            <Split initial={{ y: '100%' }}
                                animate="visible"
                                variants={{
                                    visible: i => ({
                                        y: 0,
                                        transition: {
                                            delay: i * 0.25
                                        }
                                    })
                                }}
                            >{currentLanguage.text}</Split>


                        </motion.div>
                    </AnimatePresence> with Corgis;</h1>
                <p>A fun way to learn &amp; earn !
                A teaching gateway to web3:
                Making tech cool, cute, and informative!
                        <ul>
                        <li>+ Gain a skill </li>
                        <li>+ Build cool projects </li>
                        <li>+ Byte-sized lessons puzzle </li>
                        <li> + Learn a language by animated comics</li>
                        <li> +  Explore a topic by blockchain game</li>
                    </ul>




                </p>
                <Link href="learn/metamask">
                <button>Get Started</button>
                </Link>
                {/* <h1>Learn to Earn </h1>
            <p>Learn to Code in a Cute and Informative way while earning NFTs</p>  */}
            </div>

            {/* <section style={{height: "600px", width: "600px"}}>
            { svg ? <img src={`${svg}`} style={{width: "100%"}}/> : '' }
        </section>
        <section>
            <h3 style={{margin: "0px"}}>{new Date(Date.now()).toDateString() }</h3>
            <h1 style={{fontSize: "3rem", margin: "0px"}}>Code with Corgis</h1>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                <div>
                <p>Current Bid</p>
                <h2 style={{margin: "0px", fontSize: "2rem"}}>Ξ 00.00</h2>
                </div>
                <div>
                    <p>Enrollment Ends in</p>
                    <h2 style={{margin: "0px", fontSize: "2rem"}}> 00:00:00</h2>
                </div>
               
            </div>     
      
        </section> */}
        </div>
    </div>
}

export default Hero;