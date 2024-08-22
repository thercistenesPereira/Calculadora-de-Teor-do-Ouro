import PriceGold from "../PriceGold"

type TitleProps = {
    onTitle: string;
}

function Title({ onTitle }: TitleProps) {
    return (
        <header>
            <h2>{  onTitle }</h2>
            <PriceGold />
        </header>
    )
}

export default Title
