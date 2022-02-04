import { useState, useEffect } from 'react';
import Web3Modal from "web3modal"
import { ethers, utils, BigNumber } from 'ethers'
import { playAddress }  from '../config'
import Play from '../artifacts/contracts/Play.sol/Play.json'




export default function Home() {
    useEffect(() => {
        //load()
    }, [])

    async function load() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()

    }

    async function learn() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        console.log(signer)
        const contract = new ethers.Contract(playAddress, Play.abi, signer)
        const price = ethers.utils.parseUnits("0.0025", 'ether')
        console.log(contract)
        console.log(price)
        console.log(price);
        const transaction = await contract.learn({
            value: price
        })
        await transaction.wait()
    }

    async function balance() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(playAddress, Play.abi, signer)
        const account = await signer.getAddress();

        const balance = await contract.balances(account)
        console.log("Balance")
        console.log(balance)

        const data = BigNumber.from(balance);
        console.log(data);
        console.log(utils.formatEther(data));
        const d = utils.formatEther(data)
        console.log(parseFloat(d) * 0.02)
        console.log(d);

        // 0.0025 * (1 - .02)
        //console.log(utils.parseUnits(d));
        //await tokenContract.balances('0xF717B30D486F3c2EBF77df02714e86d0da6Dbd8F');
        // console.log(data);
        // console.log(contract)
        // console.log(price)
        // console.log(price);
        // const transaction = await contract.balance({
        //     value: price
        // })
        //await transaction.wait()
    }

    async function earn() {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(playAddress, Play.abi, signer)
        const account = await signer.getAddress();
        console.log(contract)
        const balance = await contract.balances(account)
        console.log(balance)
        const data = BigNumber.from(balance);
        console.log(data);
        console.log(utils.formatEther(data));
        const d = utils.formatEther(data)
        const earnPrice = parseFloat(d) * (1 - 0.02)
        console.log(earnPrice)
        const price = ethers.utils.parseUnits(`${earnPrice}`, 'ether')
        console.log(price)

        const transaction = await contract.earn(price)
        await transaction.wait()
    }

    return (
        <div>

            <button onClick={() => learn()}>Learn</button>
            <button onClick={() => balance()}>Balance</button>
            <button onClick={() => earn()}>Earn</button>

        </div>
    )
}