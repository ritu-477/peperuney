const CommonPara = ({ text, className, }) => {
    return (
        <p className={`font-normal text-xl lg:leading-custom-4xl lg:text-2xl font-schoolbell text-charcoal-black ${className}`}>{text}</p>
    )
}

export default CommonPara

