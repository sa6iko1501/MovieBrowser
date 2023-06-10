

const Hero = ({text, backdrop}) =>{
    return(
        <div>
            <header className="bg-dark text-white p-5 hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}>
                <h1 className="hero-text">{text}</h1>
            </header>
        </div>
    )
}

export default Hero;