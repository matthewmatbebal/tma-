// app/referral/page.tsx

import {LargeTitle} from "@telegram-apps/telegram-ui";
import Referral from "@/app/referral/Referral";

export default function TasksPage() {
    return (
        <div >
            <LargeTitle style={{textAlign: "center" , margin: "20px", border:'1px solid white', padding:'15px', color: "white"}} weight="3">INVITE</LargeTitle>
            <Referral />
        </div>
    );
}
