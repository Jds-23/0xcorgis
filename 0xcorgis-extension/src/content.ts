import "./styles/content.css";

const body = document.getElementsByTagName("body");
const corgisContainer = document.createElement("div");
corgisContainer.className = "Oxcorgis";
const canvas = document.createElement("canvas");
canvas.id = "canvas";
canvas.width = 200;
canvas.height = 200;
const script = document.createElement("script")
script.setAttribute("src", "https://unpkg.com/rive-js@0.7.16/dist/rive.min.js");
script.type = "text/javascript";
script.setAttribute('defer', '');
body[0].prepend(script)
corgisContainer.appendChild(canvas)

const urls = ["https://metamask.io/",
    'https://metamask.io/download/',
    "https://docs.polygon.technology/",
    "https://ethglobal.com/",
    "https://docs.chain.link/",
    "https://polygonscan.com/",
    "https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/"
]

if (urls.includes(window.location.href)) {
    var delayInMilliseconds = 5000;
    setTimeout(function () {
        var newScript = document.createElement("script");
        newScript.type = "text/javascript";
        var inlineScript = document.createTextNode(`
    new rive.Rive({
        src: 'https://s3.amazonaws.com/cdn.codewithcorgis.com/animations/vtoker.riv',
        canvas: document.getElementById('canvas'),
        autoplay: true,
        layout: new rive.Layout({fit: 'contain', alignment: 'center'}),
        animations: ['lookup'],
    });`);
        newScript.appendChild(inlineScript);
        body[0].appendChild(newScript);


    }, delayInMilliseconds);

    body[0].prepend(corgisContainer);

}


let url = window.location.href;

if (urls.includes(window.location.href)) {
    if (window.location.href === "https://ethglobal.com/") {
        document.getElementsByClassName("Oxcorgis-tooltip")[0]?.remove();
        const tooltip = document.createElement('div');
        tooltip.setAttribute("class", "Oxcorgis-tooltip");
        tooltip.innerHTML = "<div>Welcome to EthGlobal!</div><div class='Oxcorgis-links'><a href='https://0xcorgis-dapp.vercel.app/learn/ethglobal'>Learn</a><a href='https://0xcorgis-dapp.vercel.app/learn/ethglobal/about'>Play</a></div>";
        document.getElementsByClassName('Oxcorgis')[0].appendChild(tooltip);
    }
    if (window.location.href === "https://docs.polygon.technology/") {
        document.getElementsByClassName("Oxcorgis-tooltip")[0]?.remove();
        const tooltip = document.createElement('div');
        tooltip.setAttribute("class", "Oxcorgis-tooltip");
        tooltip.innerHTML = "<div>Welcome to Polygon!</div><div class='Oxcorgis-links'><a href='https://0xcorgis-dapp.vercel.app/learn/polygon'>Learn</a><a href='https://0xcorgis-dapp.vercel.app/learn/polygon/intro'>Play</a></div>";
        document.getElementsByClassName('Oxcorgis')[0].appendChild(tooltip);
    }
    if (window.location.href === "https://docs.chain.link/") {
        document.getElementsByClassName("Oxcorgis-tooltip")[0]?.remove();
        const tooltip = document.createElement('div');
        tooltip.setAttribute("class", "Oxcorgis-tooltip");
        tooltip.innerHTML = "<div>Welcome to Chanlink!</div><div class='Oxcorgis-links'><a href='https://0xcorgis-dapp.vercel.app/learn/chainlink'>Learn</a><a href=''>Play</a></div>";
        document.getElementsByClassName('Oxcorgis')[0].appendChild(tooltip);
    }
    if(window.location.href === "https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/"){
        document.getElementsByClassName("Oxcorgis-tooltip")[0]?.remove();
        const tooltip = document.createElement('div');
        tooltip.setAttribute("class", "Oxcorgis-tooltip");
        tooltip.innerHTML = "<div>Add Polygon Network</div><div class='Oxcorgis-links' style='grid-template-columns: 1fr'><a href='https://polygonscan.com/' target='_blank'>Need Help</a></div>";
        document.getElementsByClassName('Oxcorgis')[0].appendChild(tooltip);
    }
    if(window.location.href === "https://polygonscan.com/"){
        document.getElementsByClassName("Oxcorgis-tooltip")[0]?.remove();
        const tooltip = document.createElement('div');
        tooltip.setAttribute("class", "Oxcorgis-tooltip");
        tooltip.innerHTML = "<div>Scroll to the Bottom!</div>";
        document.getElementsByClassName('Oxcorgis')[0].appendChild(tooltip);
      
    }

}



// let url = window.location.href;

['click', 'popstate', 'onload'].forEach(evt =>
    window.addEventListener(evt, function () {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                if (window.location.href === "https://metamask.io/") {
                    console.log("Step 1")

                    document.getElementsByClassName("MetaMask-Corgis-Step-1b")[0]?.remove();
                    document.getElementsByClassName("MetaMask-Corgis-Step-1a")[0]?.remove();

                    const step1ADiv = document.createElement('div');
                    step1ADiv.setAttribute("class", "MetaMask-Corgis-Step-1a");
                    document.getElementsByClassName('Button__ButtonWrapper-sc-5os99m-0 hEkXKt button')[0].removeAttribute("href");
                    document.getElementsByClassName('Button__ButtonWrapper-sc-5os99m-0 hEkXKt button')[0].appendChild(step1ADiv);

                    const step1BDiv = document.createElement('div');
                    step1BDiv.setAttribute("class", "MetaMask-Corgis-Step-1b");
                    document.getElementsByClassName('Button__ButtonWrapper-sc-5os99m-0 jZLovj button')[0].removeAttribute("href");
                    document.getElementsByClassName('Button__ButtonWrapper-sc-5os99m-0 jZLovj button')[0].appendChild(step1BDiv);

                    document.getElementsByClassName("Oxcorgis-tooltip")[0]?.remove();
                    const tooltip = document.createElement('div');
                    tooltip.setAttribute("class", "Oxcorgis-tooltip");
                    tooltip.innerHTML = "Step 1: Click ???? Download <a>Learn More</a>";
                    document.getElementsByClassName('Oxcorgis')[0].appendChild(tooltip);
                }
                if (window.location.href === 'https://metamask.io/download/') {
                    console.log("Step 2")
                    document.getElementsByClassName("Oxcorgis-tooltip")[0]?.remove();
                    const tooltip = document.createElement('div');
                    tooltip.setAttribute("class", "Oxcorgis-tooltip");
                    tooltip.innerHTML = "Step 2: Click ???? Install Metamask <a>Learn More</a>";
                    document.getElementsByClassName('Oxcorgis')[0].appendChild(tooltip);

                    const delayMetaMaskStep2 = 5000;
                    setTimeout(function () {
                        const step2Div = document.createElement('div');
                        step2Div.setAttribute("class", "MetaMask-Corgis-Step-2");
                        step2Div.innerHTML = "<span class='Install_MetaMask_for_Chrome'>Install MetaMask for Chrome</span>"
                        document.getElementsByClassName("Button__ButtonWrapper-sc-5os99m-0 jZLovj button")[0].appendChild(step2Div);

                    }, delayMetaMaskStep2);

                }

            }
            url = location.href;
        });
    }, true)
);



if (urls.includes(window.location.href)) {
    if (window.location.href === "https://metamask.io/") {
        const step1ADiv = document.createElement('div');
        step1ADiv.setAttribute("class", "MetaMask-Corgis-Step-1a");
        document.getElementsByClassName('Button__ButtonWrapper-sc-5os99m-0 hEkXKt button')[0].removeAttribute("href");
        document.getElementsByClassName('Button__ButtonWrapper-sc-5os99m-0 hEkXKt button')[0].appendChild(step1ADiv);

        const step1BDiv = document.createElement('div');
        step1BDiv.setAttribute("class", "MetaMask-Corgis-Step-1b");
        document.getElementsByClassName('Button__ButtonWrapper-sc-5os99m-0 jZLovj button')[0].removeAttribute("href");
        document.getElementsByClassName('Button__ButtonWrapper-sc-5os99m-0 jZLovj button')[0].appendChild(step1BDiv);

    }

    if (window.location.href === "https://metamask.io/") {
        console.log("Step 1")
        document.getElementsByClassName("Oxcorgis-tooltip")[0]?.remove();
        const tooltip = document.createElement('div');
        tooltip.setAttribute("class", "Oxcorgis-tooltip");
        tooltip.innerHTML = "Step 1: Click ???? Download <a>Learn More</a>";
        document.getElementsByClassName('Oxcorgis')[0].appendChild(tooltip);
    }
    if (window.location.href === 'https://metamask.io/download/') {
        console.log("Step 2")
        document.getElementsByClassName("Oxcorgis-tooltip")[0]?.remove();
        const tooltip = document.createElement('div');
        tooltip.setAttribute("class", "Oxcorgis-tooltip");
        tooltip.innerHTML = "Step 2: Click ???? Install Metamask <a> Learn More</a>";
        document.getElementsByClassName('Oxcorgis')[0]?.appendChild(tooltip);

        const delayMetaMaskStep2 = 5000;
        setTimeout(function () {
            console.log("step 2 injections")
            const step2Div = document.createElement('div');
            step2Div.setAttribute("class", "MetaMask-Corgis-Step-2");
            step2Div.innerHTML = "<span class='Install_MetaMask_for_Chrome'>Install MetaMask for Chrome</span>"
            document.getElementsByClassName("Button__ButtonWrapper-sc-5os99m-0 jZLovj button")[0].appendChild(step2Div);

        }, delayMetaMaskStep2);
    }


    if(window.location.href === "https://polygonscan.com/"){
        const step1Div = document.createElement('div');
        step1Div.setAttribute("class", "PolygonScan-Corgis-Step-1");
        const data = document.getElementsByClassName("btn btn-xss btn-soft-light text-nowrap d-flex align-items-center mr-2")[0].innerHTML
        document.getElementsByClassName("btn btn-xss btn-soft-light text-nowrap d-flex align-items-center mr-2")[0].appendChild(step1Div)
        document.getElementsByClassName('PolygonScan-Corgis-Step-1')[0].innerHTML = data;
    }



}

chrome.runtime.sendMessage({ type: "REQ_CORGIS_STATUS" });

let corgis = false;
chrome.runtime.onMessage.addListener((message) => {
    console.log(message.type);
    console.log(message);
    switch (message.type) {

        case "CORGIS_STATUS":
            if (message.corgis) {
                if (!corgis) {
                    console.log(corgisContainer);
                    body[0].prepend(corgisContainer);
                }
            } else {
                corgisContainer.parentNode?.removeChild(corgisContainer);
            }
            corgis = message.corgis;
            break;
        default:
            break;
    }
});


