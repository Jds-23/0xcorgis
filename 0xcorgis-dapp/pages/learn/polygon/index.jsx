import Head from 'next/head'
import { useEffect, useState, createRef } from 'react'
import { useRive } from "rive-react";


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


const pathways = [
    {
        level: [{ title: "Hello Metamask!" }]
    },
    {
        level: [{ title: "Using Polygonscan" }, { title: "Add the Polygon network manually" }],
    }
]



export default function Polygon() {
    const divRef = createRef()
    const dimensions = useRefDimensions(divRef)
    const params = {
        src: "https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/logoborder.riv",
        autoplay: true,
        animations: ["still"]

    };
    const { RiveComponent: LogoRive, rive: logorive } = useRive(params);
    
    return <>
        <Head>
            <title>Road to Polygon</title>
        </Head>
        <div ref={divRef} style={{ margin: 0, height: "100%", width: "100%", position: "fixed",  top: "0", zIndex: "-1" }}>
            <svg width={dimensions.width} height={dimensions.height}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-k5_o0mah1d-1">
                        <stop stopColor={"rgb(130, 71, 229)"} offset="0%"></stop>
                        <stop stopColor={"rgb(130, 71, 229)"} offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
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


        <section style={{display: "grid", alignContent: "center", alignItems: "center", justifyContent: "center", justifyItems: "center", height: "100vh"}}>
            <h1 style={{ color: "white"}}>Choose your path</h1>
            <section >
            {pathways.map((data, index) => {
                if (data.level.length == 1) {
                    return <div key={index} style={{display: "grid", color: "white", textAlign: "center"}}>
                        <img style={{width: "75px"}} src="https://ipfs.io/ipfs/QmaYE29Ci5XzdHFiQPUEgWXbnNXYdJ7fBHN5pyzk1XMe33?filename=polygon.svg"/>
                        {data.level[0].title}
                    </div>
                } else {
                    return (<div key={index} style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        {data.level.map((l, index) => {
                            return <div key={index} style={{display: "grid", color: "white", textAlign: "center"}}>
                                 <img style={{width: "75px"}} src="https://ipfs.io/ipfs/QmaYE29Ci5XzdHFiQPUEgWXbnNXYdJ7fBHN5pyzk1XMe33?filename=polygon.svg"/>
                                {l.title}
                            </div>
                        })
                        }
                    </div>)
                }
            })}
            </section>
        </section>

    </>
}