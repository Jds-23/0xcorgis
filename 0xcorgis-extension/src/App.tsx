import * as React from "react";
import styled from '@emotion/styled';
import { useRive } from "rive-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = styled.header`
  padding: 10px 40px;
  display: flex;
  position: fixed;
  background-color: #0E101E;
  height: 72px;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  width: 320px;
  border-bottom: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source:  linear-gradient(-45deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;
  transition-property: all;
  animation: gradient 5s ease infinite;
  animation: gradient 5s ease infinite;
  z-index:1;
  @keyframes gradient  {
    0% {
        border-image-source: linear-gradient(-45deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
    }
    50% {
        border-image-source: linear-gradient(15deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
    }
    100% {
        border-image-source: linear-gradient(45deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
    }
  }
`

const Logo = styled.div`
  display: grid;
  grid-template-columns: 65px;
  align-items: center;
  grid-gap: 10px;
`

const Card = styled.div`
    color: white;
    margin-top: 25px;
    padding: 15px;
    border-radius: 16px;
    font-size: 3em;
    border-image-slice: 1;
    border-width: 3px;
    border-bottom: 10px solid; 
    border-bottom-style: solid;
    border-top: 3px;
    border-top-style: solid;
    border-left-style: solid;
    border-right-style: solid; 
    cursor: pointer;
    display: grid;
    grid-template-columns: 60px 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 15px;
`

const Section = styled.section`
     width:320px;
     padding-top: 90px;
     background-color: #0E101E;
     padding: 10px 40px;
`

const ToggleButton = styled.div`
    width: 70px;
    cursor: pointer;
    background: white;
    user-select: none;
    border-radius: 3px;
    padding: 2px;
    height: 32px;
    position: relative;
  
   .dialog-button {
    font-size: 14px;
    line-height: 16px;
    font-weight: bold;
    cursor: pointer;
    background: linear-gradient(-45deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
    background-size: 400% 400%;
    color: white;
    padding: 8px 12px;
    border-radius: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    min-width: unset;
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 34px;
    cursor: pointer;
    transition: all 0.3s ease;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    transition-property: all;
    background-size: 400% 400%;
    animation: gradientToggle 5s ease infinite;

    @keyframes gradientToggle  {
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

  }
  
  .disabled {
    background-color: #707070;
    left: 2px;
  }

`


const Footer = styled.footer`
  padding: 10px 40px;
  display: flex;
  position: fixed;
  background-color: #0E101E;
  height: 72px;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  width: 320px;
  border-top: 10px solid;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source:  linear-gradient(-45deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;
  transition-property: all;
  animation: gradient 5s ease infinite;
  animation: gradient 5s ease infinite;

  @keyframes gradient  {
    0% {
        border-image-source: linear-gradient(-45deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
    }
    50% {
        border-image-source: linear-gradient(15deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
    }
    100% {
        border-image-source: linear-gradient(45deg, #FF3366, #CB5EEE, #ee7752,   #FFCC33, #00B3CC,  #E233FF, #23a6d5);
    }
  }
`

const quests = [
    {
        url: "https://docs.polygon.technology/",
        text: "polygon",
        image: "https://ipfs.io/ipfs/QmaYE29Ci5XzdHFiQPUEgWXbnNXYdJ7fBHN5pyzk1XMe33?filename=polygon.svg"
    },
    {
        url: "https://ethglobal.com/",
        text: "ethglobal",
        image: "https://ipfs.io/ipfs/QmQPAubBHYRxbsqVAAzExkJbkUEEWo4V3NrXr7j5QM5TN6?filename=ethglobal.svg"
    },
    {
        url: "https://docs.chain.link/",
        text: "chainlink",
        image: "https://ipfs.io/ipfs/QmeUzjrU3Ar2Eu6UCphzQ2HpsDfmWBjFbbQeYCQsvM8ke7?filename=chainlink.svg"
    }
]




const App = () => {
    const [quest, setQuest] = React.useState(true);
    const params = {
        src: "https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/logoborder.riv",
        autoplay: true,
        animations: ["still"]
    };
    const { RiveComponent: LogoRive, rive: logorive } = useRive(params);

    const [corgis, setcorgis] = React.useState(true);

    React.useEffect(() => {
        chrome.runtime.sendMessage({ type: "REQ_CORGIS_STATUS" });

        chrome.runtime.onMessage.addListener((message: any) => {
            switch (message.type) {
                case "CORGIS_STATUS":
                    setcorgis(message.corgis);
                    break;
                default:
                    break;
            }
        });
    }, []);

    const Toggle = () => {

        chrome.runtime.sendMessage({ type: "TOGGLE_CORGIS", corgis: !corgis });
    };
    const clickQuest = (url: any) => {
        chrome.runtime.sendMessage({ type: "TOGGLE_QUEST", quest: !quest });
        chrome.tabs.create({ url: url, active: false });
    }



    return (
        <>
            <Header >
                <nav style={{ display: "grid", gridTemplateColumns: "1fr 5fr 1fr", maxWidth: "320px", alignItems: "center", justifyContent: "center" }}>
                    <Logo>
                        <div style={{ height: '65px', width: '65px' }}>
                            <LogoRive />
                        </div>
                    </Logo>
                    <div style={{ justifyContent: "center", textAlign: "center" }}>
                        <svg width="200px" height="30px" viewBox="0 0 200 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="NFT" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="Eina03-SemiBold, Eina 03" fontSize="40" fontWeight="500">
                                <text id="0xcorgis" fill="#EBF0FF">
                                    <tspan x="-1" y="31">0xcorgis</tspan>
                                </text>
                            </g>
                        </svg>
                    </div>

                </nav>
            </Header>
            <Section>
                <div>
                    <h2 style={{ marginTop: "120px", fontSize: "30px", marginBottom: "0px", color: "white" }} >Starter Quest</h2>
                    <p style={{
                        color: "white",
                        margin: "0",
                        fontSize: "16px"
                    }}>Getting started is hard! Try our starter quests in order to learn new skills in web3 guided by the 0xcorgi.</p>

                </div>
                {
                    quests.map((data, index) => {
                        return <motion.div whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }} onClick={() => { clickQuest(data.url) }}>
                            <Card>
                                <div>
                                    <img src={data.image} style={{ height: "60px" }} />
                                </div>
                                <section>

                                    {data.text}
                                </section>
                            </Card>
                        </motion.div>
                    })
                }

                <div style={{ marginBottom: "120px" }}>
                    <h2 style={{ marginTop: "30px", fontSize: "30px", marginBottom: "0px", color: "white" }} > Learn 2 Earn</h2>
                    <p style={{
                        color: "white",
                        margin: "0",
                        fontSize: "16px"
                    }}>Explore
                        Press start to play </p>
                </div>


            </Section>

            <Footer style={{
                position: "fixed", display: "grid", gridTemplateColumns: "1fr 1fr", bottom: "0",
                color: "white",
                width: "100%",
                alignItems: "center",
                textAlign: "center",
                justifyItems: "center"
            }}>
                <h1>Show 0xcorgi</h1>
                <ToggleButton className="toggle-container" onClick={Toggle}>
                    <div className={`dialog-button ${corgis ? "" : "disabled"}`}>
                        {corgis ? "ON" : "OFF"}
                    </div>
                </ToggleButton>
            </Footer>
        </>
    );
};

export default App;