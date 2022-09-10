import { BallTriangle } from 'react-loader-spinner'

export const LoadingPageDesktop = () => {
    return (
        <div className='hidden lg:flex w-screen h-screen justify-center items-center bg-overlay-30 fixed z-60'>
            <BallTriangle
                height={200}
                width={200}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    )
}
