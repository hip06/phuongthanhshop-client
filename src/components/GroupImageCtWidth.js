import { useEffect, useState } from "react"

export const GroupImageCtWidth = ({ data }) => {
    const { mainImage, image1, image2, image3 } = data
    const [imageShowed, setImageShowed] = useState(mainImage)
    useEffect(() => setImageShowed(mainImage),[mainImage])
    return (
        <>
            <div className={`w-full items-center bg-white overflow-hidden`}>
                <div className="w-full">
                    <img className="w-full object-cover" src={imageShowed} alt="main image" />
                </div>
            </div>
            <div className="w-full mx-auto">
                <div className="flex justify-items-center w-full mt-[8px]">
                    <div 
                    onClick={() => setImageShowed(mainImage)}
                    className="mx-[14px] cursor-pointer">
                        <img className="w-full" src={mainImage} alt="main image" />
                    </div>
                    <div 
                    onClick={() => setImageShowed(image1)}
                    className="mx-[14px] cursor-pointer">
                        <img className="w-full" src={image1} alt="main image" />
                    </div>
                    <div 
                    onClick={() => setImageShowed(image2)}
                    className="mx-[14px] cursor-pointer">
                        <img className="w-full" src={image2} alt="main image" />
                    </div>
                    <div 
                    onClick={() => setImageShowed(image3)}
                    className="mx-[14px] cursor-pointer">
                        <img className="w-full" src={image3} alt="main image" />
                    </div>
                </div>
            </div>
        </>
    );
}
