type TitleProps = {
    onTitle: string;
}

function Title({ onTitle }: TitleProps) {
    return (
        <h1>{  onTitle }</h1>
    )
}

export default Title
