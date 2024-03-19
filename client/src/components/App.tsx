//
//
import { SoxCntxType, UseSox } from "../providers/SoxCntx";
//
//
export default function App() {
    //
    const { SX_init, debugSX, isConnected } = UseSox() as SoxCntxType;
    //
    //
    return (
        <>
            <div className="P-1 Body1">
                <div className="SP-X-2 AC">
                    <div className="FS-3 C-L2">Landing Page</div>

                    {isConnected ? (
                        <>
                            <button className="Btn" onClick={debugSX}>
                                Test socket
                            </button>
                        </>
                    ) : (
                        <button className="Btn" onClick={SX_init}>
                            Connect socket
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
