import React from "react"

const HeroComponent = props => {
  const { Title, Subtitle, BackgroundImage, Link } = props.hero;

  return (
    <div
      className="w-full h-72 flex align-middle justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: BackgroundImage.data ? `url(${BackgroundImage.data.attributes.url})` : '',
      }}
    >
      <div className="w-full h-full bg-gray-900 bg-opacity-50 bg-clip-padding flex flex-col align-middle justify-center text-center backdrop-filter backdrop-blur-sm">
        <h1 className="text-4xl">{Title}</h1>
        <h3 className="text-xl">{Subtitle}</h3>
      </div>
    </div>
  )
}

export default HeroComponent