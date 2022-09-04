
export const GroupImageCtWidth = ({ WidthP, mainImage, image1, image2, image3 }) => {
    return (
        <>
            <div className={`w-[${WidthP}] h-[375px] items-center bg-white rounded-[10px] overflow-hidden`}>
                <div className="w-full">
                    <img className="w-full" src={mainImage} alt="main image" />
                </div>
            </div>
            <div className="row justify-items-center">
                <div className="flex items-stretch w-[50%] mt-[8px]">
                    <divc className="mr-[4px]">
                        <img className="w-full" src={image1} alt="main image" />
                    </divc>
                    <divc className="mr-[4px]">
                        <img className="w-full" src={image2} alt="main image" />
                    </divc>
                    <divc className="mr-[4px]">
                        <img className="w-full" src={image3} alt="main image" />
                    </divc>
                </div>
            </div>
        </>
    );
}
