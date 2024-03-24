import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextD = () => {
    const cor = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
            {
                (cor) => {
                    return (
                        <div>
                            <h1 style={{  backgroundColor: cor.bkgD }}>
                                Contexto D
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextD