import Head from 'next/head'

const pathways = [
    {
        level: [{ title: "Hello EthGlobal!" }]
    }, {
        level: [{ title: "About EthGlobal"}]
    }
]

export default function EthGlobal() {
    return <>
        <Head>
            <title>EthGlobal</title>
        </Head>
        <div >
            <h1>Choose your path</h1>
            {pathways.map((data, index) => {
                if (data.level.length == 1) {
                    return <div key={index}>
                        <img src="https://ipfs.io/ipfs/QmQPAubBHYRxbsqVAAzExkJbkUEEWo4V3NrXr7j5QM5TN6?filename=ethglobal.svg"/>
                        {data.level[0].title}
                    </div>
                } else {
                    return (<div key={index} style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        {data.level.map((l, index) => {
                            return <div key={index}>
                                 <img src="https://ipfs.io/ipfs/QmQPAubBHYRxbsqVAAzExkJbkUEEWo4V3NrXr7j5QM5TN6?filename=ethglobal.svg"/>
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