import FunctionContextD from "./FunctionContextD"

import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextC = () => {
    const cor = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
            {
                (cor) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: cor.bkgC }}>
                                Contexto C
                            </h1>
                            <FunctionContextD />
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextC