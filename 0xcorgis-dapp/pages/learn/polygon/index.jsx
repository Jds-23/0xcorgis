import Head from 'next/head'

const pathways = [
    {
        level: [{ title: "Hello Metamask!" }]
    },
    {
        level: [{ title: "Using Polygonscan" }, { title: "Add the Polygon network manually" }],
    }
]



export default function Polygon() {
    return <>
        <Head>
            <title>Road to Polygon</title>
        </Head>
        <div >
            {pathways.map((data) => {
                if (data.level.length == 1) {
                    return <div>
                        {data.level[0].title}
                    </div>
                } else {
                    return (<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        {data.level.map((l) => {
                            return <div>
                                {l.title}
                            </div>
                        })
                        }
                    </div>)
                }
            })}
        </div>

    </>
}