import NavLink from "../NavLink"
import GradientWrapper from "../../GradientWrapper"
const FooterCTA = () => {
    return (
        <GradientWrapper wrapperClassName="inset-0" className="custom-screen ">
            <div id="contact" className="custom-screen  gap-x-12 justify-between md:flex">
                <div className="max-w-xl">
                    <h2 className=" text-3xl font-semibold sm:text-4xl">

                        Join Hill Hacks to address critical issues faced by countries worldwide through technology and creativity.
                    </h2>
                    <p className="mt-3 ">
                        Hill Hacks is a global competition that invites participants to address critical issues faced by countries worldwide through technology and creativity.
                    </p>
                </div>
                <div className="flex-none mt-4 md:mt-0">
                    <NavLink
                        href="#"
                        className="inline-flex items-center gap-x-2 text-white font-medium text-sm bg-blue-600 hover:bg-blue-500 active:bg-blue-700 "
                    >
                        Apply Now
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                </div>
            </div>
        </GradientWrapper>
    )
}

export default FooterCTA