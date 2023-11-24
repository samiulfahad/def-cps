import { Carousel, Typography, Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

function Slider() {
  return (
    
    <Carousel className="rounded-xl w-full md:w-4/5 mx-auto h-screen mt-10" autoplay autoplayDelay={4000} loop>
      <div className="relative h-3/4 w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              City Public School, Durgapur
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              A part of Durgapur Educational Foundation
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-3/4 w-full">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <p className="mb-4 text-2xl text-white font-bold lg:text-3xl">
              NO MIRROR CAN REFLECT A PICTURE OF A HUMAN AS BEST AS HIS ATTITUDE AND WAY OF SPEAKING DO.
            </p>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
            —-  HAZRAT ALI (R:)
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-3/4 w-full">
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              Donate and be a part
            </Typography>
            <Typography variant="lead" color="white" className="mb-12 opacity-80">
              Help us to grow and make their future better
            </Typography>
            <div className="flex">
              <Link to={"/donate"} className="btn">
                Donate
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default Slider
