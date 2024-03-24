
import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {
    const {cont} = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
            {
                (cor) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: cor.bkgB }}>
                                Contexto B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default FunctionContextB