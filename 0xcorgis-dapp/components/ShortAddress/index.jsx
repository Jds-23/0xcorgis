import { useEthers } from '@usedapp/core';
import Davatar from "@davatar/react"
import { useReverseENSLookUp } from '../../utils/ensLookup';
import { useEnsAvatarLookup } from "../../utils/ensAvatar";
import styled from '@emotion/styled'

const Online = styled.div`
 width: 15px;
 height: 15px;
 background-color: #3DE01F;
 border-radius: 100%;
 opacity: 0;
 animation: fade 2s infinite;
 -moz-animation: fade 2s infinite;
 -webkit-animation: fade 2s infinite;;
 -o-animation: fade 2s  infinite;

@keyframes fade {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}

`


const ShortAddress = ({ address, avatar, color }) => {
    const { library: provider } = useEthers();
    const ens = useReverseENSLookUp(address);
    const ensAvatar = useEnsAvatarLookup(address);
    const shortAddress = address && [address.substr(0, 4), address.substr(address.length - 4, 4)].join('...');
    return <div style={{ display: "grid", gridTemplateColumns: "15px 24px 1fr", gridGap: "10px", alignItems: "center" }}>
        <Online/>
        {avatar &&
            <div key={address}>
                <Davatar
                    size={24}
                    address={address}
                    provider={provider}
                />
            </div>}
        <div style={{ color: color ?  color: "#020E64", fontFamily: "Eina03-SemiBold"}} >{ens ? ens : shortAddress}</div>
    </div>
}

export default ShortAddress;