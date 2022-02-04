import { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import { useRive } from "rive-react";
import { useEthers } from '@usedapp/core';
import ShortAddress from '../ShortAddress';

const CHAIN_ID = 31337

const Title = styled.a`
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-image: linear-gradient(
-3deg
, #253078 0%, #CB5EEE 28%, #FEC14F 100%);
-webkit-animation: letter 1.25s steps(25, end) 0s infinite;
animation: letter 1.25s steps(25, end) 0s infinite;
font-size: 45px;
`


const Header = styled.header`
  padding: 10px 40px;
  background: linear-gradient(90deg, #B4D0FF 15%, #B0BEEA 20%, #BFB0EA 70%, #B0DBEA 100%);
  z-index: 400;
  display: flex;
  width: 100%;
  position: fixed;
  height: 100px;
  align-items: center;
  justify-content: space-around;
`

const Logo = styled.div`
  display: grid;
  grid-template-columns: 90px 190px;
  align-items: center;
  grid-gap: 10px;
`

const Button = styled.div`
    border-radius: 16px;
    cursor: pointer;
    font-size: 20px;
    align-self: center;
    color: white;
    background-color: rgb(2, 14, 100);
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    transition-property: all;
    
    &:hover {
            background-color: rgb(254, 159, 53, 0.9);
            transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1.05) scaleY(1.05);
    }

`

const NavBar = () => {



    const params = {
        src: "https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/logoborder.riv",
        autoplay: true,
        animations: ["still"]
    };

    const { activateBrowserWallet, deactivate, account } = useEthers()
    const { RiveComponent: LogoRive, rive: logorive } = useRive(params);
    const [showConnectModal, setShowConnectModal] = useState(false);



    return (
        <>
            {showConnectModal && !account && (
                <div>
                    <div style={{ position: "fixed", top: "0", left: "0", width: "100%", height: "100%", overflow: "auto", zIndex: "500", backgroundColor: "rgba(0,0,0,0.5)" }} onClick={() => setShowConnectModal(false)}></div>
                    <section style={{
                        position: "fixed",
                        top: "25vh",
                        left: "10%",
                        width: "80%",
                        zIndex: "500",
                        backgroundColor: "#fff",
                        padding: "2rem",
                        display: "grid",
                        borderRadius: "16px",
                        left: "calc(50% - 15rem)",
                        width: "30rem"
                    }}>
                        <div style={{ margin: 0, position: "fixed", zIndex: "-1" }}>
                            {/* <svg width={100} height={100}>
                                <defs>
                                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-k5_o0mah1d-1">
                                        <stop stop-color="#7576C2" offset="0%"></stop>
                                        <stop stop-color="#8BA0DF" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                 <g fill={`${theme.rawColors.borderColor ? theme.rawColors.borderColor: "#7576C2" }`}> 
                        <polygon id="Rectangle" points={`35 3.63797881e-12 ${dimensions.width} 3.63797881e-12 ${dimensions.width} 35 0 35`}></polygon>
                        <polygon id="Rectangle" points={`${dimensions.width - 35} 3.63797881e-12 ${dimensions.width} 3.63797881e-12 ${dimensions.width} ${dimensions.height - 35} ${dimensions.width - 35} ${dimensions.height}`}></polygon>
                        <polygon id="Rectangle" points={`0,${dimensions.height - 35}  35,${dimensions.height}  ${dimensions.width - 35},${dimensions.height} ${dimensions.width - 35},${dimensions.height - 35}`}></polygon>
                        <polygon id="Rectangle" points={`0,35  0,${dimensions.height - 35}  35,${dimensions.height} 35,35`}></polygon>
                    </g>
                </g>
                <g id="Books" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard" transform="translate(0, 0)" fill="url(#linearGradient-k5_o0mah1d-1)">
                        <rect id="Rectangle" x={`${dimensions.width - 100}`} y='0' width="100" height="100" rx="8"></rect>
                    </g> 
                </g> 
                            </svg>*/}
                        </div>

                        <h1>Connect your wallet</h1>
                        <Button onClick={async () => {
                            await activateBrowserWallet()
                        }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                                <div style={{ alignSelf: "center", textAlign: "center" }}>
                                    <svg width="59px" height="53px" viewBox="0 0 59 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <defs>
                                            <linearGradient x1="50%" y1="13.4506863%" x2="50%" y2="100%" id="linearGradient-j44lx117al-1">
                                                <stop stop-color="#FFB500" offset="0%"></stop>
                                                <stop stop-color="#FF9F00" offset="13.268104%"></stop>
                                                <stop stop-color="#FF7E00" offset="100%"></stop>
                                            </linearGradient>
                                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-j44lx117al-2">
                                                <stop stop-color="#EFE1D9" offset="0%"></stop>
                                                <stop stop-color="#DAC0B2" offset="100%"></stop>
                                            </linearGradient>
                                        </defs>
                                        <g id="NFT" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Group-18">
                                                <polygon id="Path-233" fill="url(#linearGradient-j44lx117al-1)" points="3.08588465 0 21.6307804 7.28969457 36.6728921 7.28969457 55.3643047 0 59 8.69621701 54.3610434 26.8144604 59 39.5604367 55.3643047 53 41.6636304 48.608364 33.4715156 53 23.9558548 53 16.5237002 48.608364 3.60069858 53 0 39.5604367 4.24947637 26.5 0 8.69621701"></polygon>
                                                <polygon id="Path-237" fill="url(#linearGradient-j44lx117al-2)" points="16.5237002 48.608364 24.5165457 43.233161 34.1065283 43.233161 41.6636304 48.608364 33.4715156 53 23.9013189 53"></polygon>
                                                <polygon id="Path-231" fill="#7E3A03" points="3.08588465 0 0 8.7885381 4.07664923 26.8144604 16.3050464 23.4537423 24.9511128 15.8817391"></polygon>
                                                <polygon id="Path-232" fill="#7E3A03" points="55.3643047 0 33.4715156 15.8509259 42.1191313 23.3912235 54.3610434 26.8144604 59 8.69621701"></polygon>
                                                <polygon id="Path-234" fill="#131415" points="22.4592546 31.5756411 17.5373145 33.9271802 24.5165457 35.8119029"></polygon>
                                                <polygon id="Path-235" fill="#131415" points="36.2678525 31.5756411 34.1065283 35.8119029 41.257072 33.693772"></polygon>
                                                <polygon id="Path-236" fill="#131415" points="24.5165457 43.233161 23.9013189 48.9423563 24.7824012 48.0936871 33.4405678 48.0936871 34.3850395 48.9423563 33.8749613 43.233161 32.3369898 42.2132517 25.8830765 42.2132517"></polygon>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <h1>Metamask</h1>
                            </div>
                        </Button>

                        {/* <button onClick={async () => {
                            const fortmatic = new FortmaticConnector({
                                apiKey: 'pk_test_FB5E5C15F2EC5AE6',
                                chainId: '4',
                              });
                              activate(fortmatic);
                        }}>Formatic</button> */}

                        <p>By continuing, you agree to our Terms of Use</p>

                    </section>
                </div>
            )}
            <Header>
                <nav style={{ display: "grid", gridTemplateColumns: "1fr 3fr 2fr", maxWidth: "1200px", alignItems: "center", justifyContent: "center" }}>
                    <Logo>
                        <LogoRive />
                        <Title>0xcorgis</Title>
                    </Logo>

                    <div>

                    </div>
                    <div style={{ display: "grid", gridGap: "10px", gridTemplateColumns: "1fr 1fr" }} >
                        {!account && <div onClick={() => setShowConnectModal(true)}>
                            Connect Wallet
                    </div>}

                        {account && <ShortAddress address={account} avatar={true} />}
                        {account && <button onClick={deactivate}> Disconnect </button>}
                    </div>
                </nav>
            </Header>
        </>
    )
}

export default NavBar;