import Head from 'next/head'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, createRef } from 'react'
import { useRive } from "rive-react";
import Link from 'next/link'

const Title = styled.h1`
    font-size: 32px;
    line-height: 40px;
    color: white;
    margin: 0;
    text-align:center;
    z-index:1;
`

const Section = styled.div`
    background-color: #101428;
    display: grid;
    grid-template-rows: 200px auto;
    align-items: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`

const LearnGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(4,minmax(210px,1fr));
    color: white;
    margin: 0; 
    padding: 0;
    list-style: none;
`

const LearnItem = styled.div`
    border-radius: 16px;
    border-style: solid;
    border-width: 2px 2px 4px;
    cursor: pointer;
    display: grid;
    justify-content: center;
    margin: 12px;
    max-width: 250px;
    min-height: 217px;
    min-width: 200px;
    padding: 12px 12px 24px;
    text-align: center;
    cursor: pointer;
    grid-template-rows: 3fr 1fr;
    border-width: 3px 3px 10px;
    justify-items:center;
    align-items: center;
    position: relative;

    &.coming-soon:before {
        content: 'Coming Soon';
        position: absolute;
        top:10px;
        right: 10px;
        padding: 10px;
        background: #1899d6;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
    }

    &:hover {
        background: linear-gradient(135deg, #FF3366, #CB5EEE, #ee7752, #FFCC33, #00B3CC, #E233FF, #23a6d5);
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .15s;
        transition-property: all;
        animation: gradient 20s ease infinite;
        background-size: 400% 400%;
    }
    
`

const data = [{
    sponsors: "ethglobal",
    comingSoon: false
},
{
    sponsors: "polygon",
    comingSoon: false
},
{
    sponsors: "chainlink",
    comingSoon: false
},
{
    sponsors: "ens",
    comingSoon: true
},
{
    sponsors: "uniswap",
    comingSoon: true
},
{
    sponsors: "superfluid",
    comingSoon: true
},
// {
//     sponsors: "covalent",
//     comingSoon: true
// },
// {
//     sponsors: "web3auth",
//     comingSoon: true
// },
// {
//     sponsors: "nftport",
//     comingSoon: true
// },
// {
//     sponsors: "graph",
//     comingSoon: true
// },
// {
//     sponsors: "moralis",
//     comingSoon: true
// }

]


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


const Learn = () => {
    const divRef = createRef()
    const dimensions = useRefDimensions(divRef)
    const params = {
        src: "https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/logoborder.riv",
        autoplay: true,
        animations: ["still"]

    };
    const { RiveComponent: LogoRive, rive: logorive } = useRive(params);
    return <Section>
        <div ref={divRef} style={{ margin: 0, height: "100%", width: "100%", position: "fixed", top: "0", zIndex: '0' }}>
            <svg width={dimensions.width} height={dimensions.height}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-k5_o0mah1d-1">
                        <stop stop-color={"rgb(130, 71, 229)"} offset="0%"></stop>
                        <stop stop-color={ "rgb(130, 71, 229)" } offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g fill={"rgb(130, 71, 229)"}>
                        <polygon id="Rectangle" points={`35 3.63797881e-12 ${dimensions.width} 3.63797881e-12 ${dimensions.width} 35 0 35`}></polygon>
                    </g>
                    <g fill={"rgb(130, 71, 229)"}>
                        <polygon id="Rectangle" points={`${dimensions.width - 35} 3.63797881e-12 ${dimensions.width} 3.63797881e-12 ${dimensions.width} ${dimensions.height - 35} ${dimensions.width - 35} ${dimensions.height - 35}`}></polygon>
                    </g>
                    <g fill={"rgb(130, 71, 229)"}>
                        <polygon id="Rectangle" points={`${dimensions.width - 35} 3.63797881e-12 ${dimensions.width - 25} 3.63797881e-12 ${dimensions.width - 25} ${dimensions.height - 35} ${dimensions.width - 35} ${dimensions.height - 35}`}></polygon>
                    </g>
                    <g fill={"rgb(130, 71, 229)" }>
                        <polygon id="Rectangle" points={`0,${dimensions.height - 35}  0,${dimensions.height}  ${dimensions.width - 35},${dimensions.height} ${dimensions.width},${dimensions.height - 35}`}></polygon>
                    </g>
                    <g fill={"rgb(130, 71, 229)"}>
                        <polygon id="Rectangle" points={`0,${dimensions.height - 35}  0,${dimensions.height - 25}  ${dimensions.width - 10},${dimensions.height - 25} ${dimensions.width},${dimensions.height - 35}`}></polygon>
                    </g>

                    <g fill={"rgb(130, 71, 229)"}>
                        <polygon id="Rectangle" points={`0,35  0,${dimensions.height - 35}  35,${dimensions.height - 35} 35,35`}></polygon>
                    </g>

                    <g fill={"rgb(130, 71, 229)"}>
                        <polygon id="Rectangle" points={`25,35  25,${dimensions.height - 35}  35,${dimensions.height - 35} 35,35`}></polygon>
                    </g>

                </g>
                <g id="Books" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
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


        <Title>I want to learn...</Title>
        <LearnGrid>
            {data.map((d, index) => {
                return <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }} >
                    <Link href={d.comingSoon ===false ? `learn/${d.sponsors}` : ''}>
                    <LearnItem className={d.comingSoon ? 'coming-soon' : ''}>
                        <img style={{ "height": "120px", marginTop: "35px" }} src={`${d.sponsors}.svg`} />
                        <Title>{d.sponsors}</Title>
                    </LearnItem>
                    </Link>    
                </motion.div>
               
            })}
        </LearnGrid>
    </Section>
}

export default Learn;