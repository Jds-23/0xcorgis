import Head from 'next/head'
import { useEffect, useState, createRef } from 'react'
import { useRive } from "rive-react";
import styled from '@emotion/styled'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useRouter } from 'next/router';

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

const HR = styled.span`
    display: flex;
    height: 20px;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    width:600px;
    border-bottom: 3px solid;
    border-image-slice: 1;
    border-top-width: 3px;
    border-right-width: 3px;
    border-left-width: 3px;
    border-image-source: linear-gradient(
-45deg
, rgb(255, 51, 102), rgb(203, 94, 238), rgb(238, 119, 82), rgb(255, 204, 51), rgb(0, 179, 204), rgb(226, 51, 255), rgb(35, 166, 213));
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
    transition-property: all;
    animation: 5s ease 0s infinite normal none running gradient;
    z-index: 1;
`


const Card = styled.button`
    color: white;
    margin-top: 25px;
    padding: 10px;
    border-radius: 16px;
    font-size: 16px;
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
    border-color: white;
    background:transparent;

    &:disabled {
        background-color:#e5e5e5;
        color: #e5e5e5;
        border-color: #e5e5e5;

    }
`




export default function Chainlink() {
    const [[page, direction], setPage] = useState([0, 0]);
    const divRef = createRef()
    const dimensions = useRefDimensions(divRef)
    const router = useRouter()
    const params = {
        src: "https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/logoborder.riv",
        autoplay: true,
        animations: ["still"]

    };
    const { RiveComponent: LogoRive, rive: logorive } = useRive(params);
    const params2 = {
        src: "https://ipfs.io/ipfs/Qmcy42hrBmpGEbjVokDEvki47zQwjwaFAvb4caD3iRUCQW?filename=ethglobal.riv",
        autoplay: true,
        animations: ["ethglobal"]
    };


    const { RiveComponent: EthGlobalRive, rive: ethglobalrive } = useRive(params2);

    return <>
        <Head>
            <title>Chainlink</title>
        </Head>
        <div ref={divRef} style={{ margin: 0, height: "100%", width: "100%", position: "fixed", top: "0", zIndex: "-1" }}>
            <svg width={dimensions.width} height={dimensions.height}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-k5_o0mah1d-1">
                        <stop stopColor={"#2368E4"} offset="0%"></stop>
                        <stop stopColor={"#2368E4"} offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fill={"#2368E4"}>
                        <polygon id="Rectangle" points={`35 3.63797881e-12 ${dimensions.width} 3.63797881e-12 ${dimensions.width} 35 0 35`}></polygon>
                    </g>
                    <g fill={"#2368E4" }>
                        <polygon id="Rectangle" points={`${dimensions.width - 35} 3.63797881e-12 ${dimensions.width} 3.63797881e-12 ${dimensions.width} ${dimensions.height - 35} ${dimensions.width - 35} ${dimensions.height - 35}`}></polygon>
                    </g>
                    <g fill={"#2368E4" }>
                        <polygon id="Rectangle" points={`${dimensions.width - 35} 3.63797881e-12 ${dimensions.width - 25} 3.63797881e-12 ${dimensions.width - 25} ${dimensions.height - 35} ${dimensions.width - 35} ${dimensions.height - 35}`}></polygon>
                    </g>
                    <g fill={"#2368E4" }>
                        <polygon id="Rectangle" points={`0,${dimensions.height - 35}  0,${dimensions.height}  ${dimensions.width - 35},${dimensions.height} ${dimensions.width},${dimensions.height - 35}`}></polygon>
                    </g>
                    <g fill={"#2368E4" }>
                        <polygon id="Rectangle" points={`0,${dimensions.height - 35}  0,${dimensions.height - 25}  ${dimensions.width - 10},${dimensions.height - 25} ${dimensions.width},${dimensions.height - 35}`}></polygon>
                    </g>

                    <g fill={"#2368E4" }>
                        <polygon id="Rectangle" points={`0,35  0,${dimensions.height - 35}  35,${dimensions.height - 35} 35,35`}></polygon>
                    </g>

                    <g fill={"#2368E4" }>
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

                <section style={{ display: "grid", justifyContent: "center", height: "100%", paddingTop: "20px", marginTop: "50px" }}>
                    <div>

                        <div style={{ color: "white", display: "grid", fontWeight: "600" }}>
                            <span style={{ fontSize: "35px", textAlign: "center" }} >
                            <div style={{height: "500px"}}>
                                <img src={'/chainlink.svg'}/>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div style={{ display: "grid", justifyContent: "center" }}>

                    </div>
                    <div style={{ display: "grid", justifyContent: "center", gridTemplateRows: "0fr 0fr", gridGap: "30px" }}>
                        <Button onClick={() => { router.push("/learn")}}>Coming Soon... in the Future!</Button>
                    </div>
                </section>
            </motion.div>
        </AnimatePresence>

    </>


}
