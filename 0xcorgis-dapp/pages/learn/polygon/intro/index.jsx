import Head from 'next/head'
import { useEthers } from '@usedapp/core';
import { useEffect, useState, createRef } from 'react'
import { useRive } from "rive-react";
import styled from '@emotion/styled'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import ShortAddress from '../../../../components/ShortAddress';


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
    type: "multiple"
}

]





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

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };
    const divRef = createRef()
    const dimensions = useRefDimensions(divRef)
    const { account } = useEthers()
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


    // const { RiveComponent: MetaMaskRive, rive: metamaskrive } = useRive({
    //     src: "https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/metamask.riv",
    //     autoplay: true,
    //     animations: ["metamask"]
    // });

    // const { RiveComponent: MetaMaskCorgisRive, rive: metamaskcorgisrive } = useRive({
    //     src: "https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/metastart.riv",
    //     autoplay: true,
    //     animations: ["start"]
    // });


    // const { RiveComponent: MetaMaskRive1, rive: metamaskrive1 } = useRive({
    //     src: "https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/metamask.riv",
    //     autoplay: true,
    //     animations: ["metamask"]
    // });

    // const animation = [<MetaMaskRive style={{ width: "100%", height: "100%" }} />, <MetaMaskRive1 style={{ width: "100%", height: "100%" }} />]

    return <>
        <Head>
            <title>Road to Polygon</title>
        </Head>
        <div ref={divRef} style={{ margin: 0, height: "100%", width: "100%", position: "fixed", backgroundColor: "#101428" }}>
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
                onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                }}
            >
                <section style={{ display: "grid", justifyContent: "center", height: "100%", paddingTop: "20px", marginTop: "50px", }}>
                    <div>

                        <div style={{ color: "white", display: "grid", fontWeight: "600" }}>
                            <span style={{ fontSize: "35px", textAlign: "center" }} >
                                {data[imageIndex].question}

                            </span>
                        </div>
                    </div>
                    <div style={{ display: "grid", justifyContent: "center" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", height: "450px", alignItems: "center", gridGap: "15px", }}>
                            {data[imageIndex]?.choice?.map((d, index) => {
                                return <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }} >
                                    <div  className={selected == d ? "selected" : ""} onClick={() => { setSelected(d) }} style={{
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
                        </div>

                    </div>
                    <div style={{ display: "grid", justifyContent: "center", gridTemplateRows: "0fr 0fr", gridGap: "30px" }}>
                        {
                            imageIndex == 0 ?
                                <Button onClick={() => paginate(1)} >Start</Button> :
                                <Button disabled={!selected} onClick={check} >Check</Button>
                        }
                    </div>
                </section>
            </motion.div>
        </AnimatePresence>

    </>
}