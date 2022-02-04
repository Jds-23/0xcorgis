import Head from 'next/head'

const pathways = [
    {
        level: [{ title: "Hello EthGlobal!" }]
    }
]

export default function EthGlobal() {
    return <>
        <Head>
            <title>EthGlobal</title>
        </Head>
        <div >
            {pathways.map((data, index) => {
                if (data.level.length == 1) {
                    return <div key={index}>
                        {data.level[0].title}
                    </div>
                } else {
                    return (<div key={index} style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        {data.level.map((l, index) => {
                            return <div key={index}>
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