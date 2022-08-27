import banner from '../../assets/fashionbanner.png'
import freeship from "../../assets/freeship.png";
const LayoutHomeFashion=()=>{
    return (<>
        <img className="" src={banner}></img>
        <img src={freeship} className="ml-auto w-full mt-[5px] sm:w-[60%]" />
        
    </>);
}
export default LayoutHomeFashion;