import React from "react"

const HeroComponent = props => {
  console.log(props.Image)
  return (
    <div
      className="w-full h-72 flex align-middle justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(http://localhost:1337${props.hero.Image.url})`,
      }}
    >
      <div className="w-full h-full bg-gray-900 bg-opacity-50 bg-clip-padding flex flex-col align-middle justify-center text-center backdrop-filter backdrop-blur-sm">
        <h1 className="text-4xl">{props.hero.Heading}</h1>
        <h3 className="text-xl">{props.hero.SubHeading}</h3>
      </div>
    </div>
  )
}

export default HeroComponent
