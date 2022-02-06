import Head from 'next/head'
import { ethers, utils, BigNumber } from 'ethers'
import { useEffect, useState, createRef } from 'react'
import { useRive } from "rive-react";
import styled from '@emotion/styled'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import ShortAddress from '../../../../components/ShortAddress';
import Web3Modal from "web3modal"
import { playAddress }  from '../../../../config';
import Play from '../../../../artifacts/contracts/Play.sol/Play.json'
import { useRouter } from 'next/router';


function shuffle(arr) {
    return Array(arr.length).fill(null)
        .map((_, i) => [Math.random(), i])
        .sort(([a], [b]) => a - b)
        .map(([, i]) => arr[i])
}


const data = [{
    question: "Road to Polygon",
    choice: []
},
{
    question: "Which of these is \"Polygon\"?",
    choice: shuffle(["ethglobal", "polygon", "chainlink"]),
    answer: "polygon",
},
{
    question: "We appreciate you for getting started!",
    choice: []
}]





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

const Button = styled.button`
    border-radius: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    font-size: 20px;
    height: 72px;
    width: 400px;
    align-self: center;
    color: white;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    transition-property: all;
    background: linear-gradient(135deg, #61E694 0%, #00B3CC 100%);
    &:hover {
        border: 1px solid white;
        box-shadow: 0 2px 16px 6px #1d273d;
        transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1.05) scaleY(1.05);
        transition: all .2s ease-in-out
    }

    &:disabled{
        border: 1px solid white;
        box-shadow: 0 2px 16px 6px #1d273d;
        background: #afafaf;
    }

`
const useRefDimensions = (ref) => {
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);


    useEffect(() => {
        if (ref) {
            setHeight(ref.current.offsetHeight)
            setWidth(ref.current.offsetWidth)
        }
    }, [ref])
    return { height, width }
}

export default function Polygon() {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, data.length, page);
    const [selected, setSelected] = useState('')
    const [isCorrect, setCorrect] = useState(-1)
    const [account, setAccount] = useState();
    const [isStake, setStake] = useState(false)
    const router = useRouter()

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    const divRef = createRef()
    const dimensions = useRefDimensions(divRef)
    const params = {
        src: "https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/logoborder.riv",
        autoplay: true,
        animations: ["still"]

    };
    const { RiveComponent: LogoRive, rive: logorive } = useRive(params);
    const check = () => {
        if (selected == data[imageIndex].answer) {
            setSelected('')
            paginate(1)
            setCorrect(-1)
        }
        else {
            setCorrect(false)
        }
    }

    async function connect() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const account = await signer.getAddress();
        setAccount(account);
        const contract = new ethers.Contract(playAddress, Play.abi, signer)
        const balance = await contract.balances(account)
        console.log("Balance")
        console.log(balance)

        const data = BigNumber.from(balance);
        console.log(data);
        console.log(utils.formatEther(data));
        if(utils.formatEther(data) > 0.0025){
            setStake(true)
        } else {
            setStake(false)
        }


    }

    async function play() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(playAddress, Play.abi, signer)
        const price = ethers.utils.parseUnits("0.0025", 'ether')
        const transaction = await contract.learn({
            value: price
        })
        await transaction.wait()
        paginate(1)
    }

    async function earn() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(playAddress, Play.abi, signer)
        const account = await signer.getAddress();
        const balance = await contract.balances(account)
        console.log(balance)
        const data = BigNumber.from(balance);
        console.log(data);
        console.log(utils.formatEther(data));
        const d = utils.formatEther(data)
        const earnPrice = parseFloat(d) * (1 - 0.02)
        console.log(earnPrice)
        const price = ethers.utils.parseUnits(`${earnPrice}`, 'ether')
        const transaction = await contract.earn(price)
        await transaction.wait()
        router.push("/learn/polygon")


    }



    return <>
        <Head>
            <title>Road to Polygon</title>
        </Head>
        <div ref={divRef} style={{ margin: 0, height: "100%", width: "100%", position: "fixed", zIndex: "-1" }}>
            <svg width={dimensions.width} height={dimensions.height}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-k5_o0mah1d-1">
                        <stop stopColor={isCorrect === -1 ? "rgb(130, 71, 229)" : (isCorrect ? 'green' : '#ff4b4b')} offset="0%"></stop>
                        <stop stopColor={isCorrect === -1 ? "rgb(130, 71, 229)" : (isCorrect ? 'green' : '#ff4b4b')} offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fill={isCorrect === -1 ? "rgb(130, 71, 229)" : (isCorrect ? 'green' : '#ff4b4b')}>
                        <polygon id="Rectangle" points={`35 3.63797881e-12 ${dimensions.width} 3.63797881e-12 ${dimensions.width} 35 0 35`}></polygon>
                    </g>
                    <g fill={isCorrect === -1 ? "rgb(130, 71, 229)" : (isCorrect ? 'green' : '#ff4b4b')}>
                        <polygon id="Rectangle" points={`${dimensions.width - 35} 3.63797881e-12 ${dimensions.width} 3.63797881e-12 ${dimensions.width} ${dimensions.height - 35} ${dimensions.width - 35} ${dimensions.height - 35}`}></polygon>
                    </g>
                    <g fill={isCorrect === -1 ? "rgb(130, 71, 229)" : (isCorrect ? 'green' : '#ff4b4b')}>
                        <polygon id="Rectangle" points={`${dimensions.width - 35} 3.63797881e-12 ${dimensions.width - 25} 3.63797881e-12 ${dimensions.width - 25} ${dimensions.height - 35} ${dimensions.width - 35} ${dimensions.height - 35}`}></polygon>
                    </g>
                    <g fill={isCorrect === -1 ? "rgb(130, 71, 229)" : (isCorrect ? 'green' : '#ff4b4b')}>
                        <polygon id="Rectangle" points={`0,${dimensions.height - 35}  0,${dimensions.height}  ${dimensions.width - 35},${dimensions.height} ${dimensions.width},${dimensions.height - 35}`}></polygon>
                    </g>
                    <g fill={isCorrect === -1 ? "rgb(130, 71, 229)" : (isCorrect ? 'green' : '#ff4b4b')}>
                        <polygon id="Rectangle" points={`0,${dimensions.height - 35}  0,${dimensions.height - 25}  ${dimensions.width - 10},${dimensions.height - 25} ${dimensions.width},${dimensions.height - 35}`}></polygon>
                    </g>

                    <g fill={isCorrect === -1 ? "rgb(130, 71, 229)" : (isCorrect ? 'green' : '#ff4b4b')}>
                        <polygon id="Rectangle" points={`0,35  0,${dimensions.height - 35}  35,${dimensions.height - 35} 35,35`}></polygon>
                    </g>

                    <g fill={isCorrect === -1 ? "rgb(130, 71, 229)" : (isCorrect ? 'green' : '#ff4b4b')}>
                        <polygon id="Rectangle" points={`25,35  25,${dimensions.height - 35}  35,${dimensions.height - 35} 35,35`}></polygon>
                    </g>

                </g>
                <g id="Books" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Artboard" transform="translate(0, 0)" fill="url(#linearGradient-k5_o0mah1d-1)">
                        <rect id="Rectangle" x={`${dimensions.width - 100}`} y='0' width="100" height="100" rx="8"></rect>
                    </g>
                </g>
            </svg>
            <div style={{ position: "absolute", top: 0, right: 0 }}>
                <section style={{ width: 100, height: 100 }}>
                    <LogoRive />
                </section>
            </div>
        </div>


        <div style={{
            display: "grid",
            paddingTop: "55px",
            paddingLeft: "50px",
            paddingRight: "120px",
            gridGap: "9px", zIndex: "1"
        }}>

            {account && <ShortAddress address={account} avatar={true} color={"white"} />}
            <div style={{
                width: "100%",
                background: "#1C2840",
                borderRadius: "16px",
                height: "20px"
            }}>


                <div style={{ width: imageIndex == data.length - 1 ? "100%" : `${(imageIndex / data.length) * 100}%`, backgroundColor: "#3DE01F", height: "20px", transition: "width 2s", borderRadius: "16px" }}>
                </div>


            </div>
        </div>


        <AnimatePresence initial={false} custom={direction}>
            <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
            >
                <section style={{ display: "grid", justifyContent: "center", height: "100%", paddingTop: "20px", marginTop: "50px", }}>
                    <div>

                        <div style={{ color: "white", display: "grid", fontWeight: "600", alignItems: "center", justifyItems: "center" }}>
                            <span style={{ fontSize: "35px", textAlign: "center" }} >
                                {data[imageIndex].question}
                             
                            </span>
                            { (imageIndex === 0 || imageIndex == 2) && <img src="https://ipfs.io/ipfs/Qma8tgCPASkZaQgxzQDFuELUiZ876uaSwkQo2WVpSU9yQy?filename=polygonComic.svg"/>}
                        </div>
                    </div>
                    <div style={{ display: "grid", justifyContent: "center" }}>
                        { imageIndex === 1 && <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "450px", alignItems: "center", gridGap: "15px", }}>
                            {data[imageIndex]?.choice?.map((d, index) => {
                                return <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} >
                                    <div className={selected == d ? "selected" : ""} onClick={() => { setSelected(d) }} style={{
                                        color: "white", width: "200px", height: "250px", cursor: "pointer", borderRadius: "16px", padding: "15px",
                                        borderRadius: "16px",
                                        borderWidth: selected == d ? '5px 5px 10px' : "3px 3px 10px",
                                        borderBottomColor: "initial",
                                        borderStyle: "solid",
                                        borderTopColor: "initial",
                                        cursor: "pointer",
                                        display: "grid",
                                        justifyContent: "center"
                                    }}>
                                        <img src={`/${d}.svg`} />

                                    </div>
                                </motion.div>
                            })}
                        </div>}

                    </div>
                    <div style={{ display: "grid", justifyContent: "center", gridTemplateRows: "0fr 0fr", gridGap: "30px" }}>
                        {!account && <Button onClick={connect}>Please Connect Wallet</Button>}
                        {
                            account  && (imageIndex === 0 ?
                                !isStake ? <Button onClick={play} >Stake 0.0025 Polygon to Play</Button>: <Button onClick={()=>{paginate(1)}}>Continue</Button>:
                                imageIndex === data.length - 1 ? <Button onClick={earn}>Earn</Button> : <Button disabled={!selected} onClick={check} >Check</Button>)
                        }
                    </div>
                </section>
            </motion.div>
        </AnimatePresence>

    </>
}