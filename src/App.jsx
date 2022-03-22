import { GreenBg } from "./components/feature/GreenBg"
import { SkewBg } from "./components/feature/SkewBg"
import { HeaderPage } from "./components/HeaderPage"
import { ThreeBlcok } from "./components/ThreeBlcok"
import { PriceTable } from "./components/PriceTable"
import { Clients } from "./components/Clients"
import { Contact } from "./components/Contact"
import { Copyright } from "./components/Copyright"

export const App = () => {
    return (
        <>
            <HeaderPage />
            <ThreeBlcok />
            <SkewBg />
            <GreenBg />
            <PriceTable />
            <Clients />
            <Contact />
            <Copyright />
        </>
    )
}
