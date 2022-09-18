import { AiOutlineHome } from "react-icons/ai";
import { PaymentItem } from "../../components/CartItem";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react'
import { deleteAllPaymentsAction } from "../../store/actions/userAction"
import { useDispatch } from "react-redux"
import { SelectCustomWidth } from "../../components/InputCtWidth"

const Payment = () => {
    const dispatch = useDispatch();
    const selectRef = useRef();
    const cartItem = useSelector(state => state.cart);
    const [totalPayment, setTotalPayment] = useState(0);
    const [cities, setCities] = useState(['Lào Cai']);
    const [citiesObject, setCitiesObject] = useState([]);
    const [towns, setTowns] = useState([]);
    const [townsObject, setTownsObject] = useState([]);
    const [wards, setWards] = useState([]);
    const [wardsObject, setWardsObject] = useState([]);
    const [currentCity, setCurrentCity] = useState('Lào cai');
    const [currentTowns, setCurrentTowns] = useState('Lào cai');
    const [currentWard, setCurrentWard] = useState('Lào cai');
    const getTotalPayment = cartItem.productsPayment.reduce((sum, product) => {
        product = JSON.parse(product);
        return sum += product.costPerUnit * product.quantity
    }, 0)




    useEffect(() => {
        citiesObject.map((city) => {
            if (city['ProvinceName'] === currentCity) {

                fetchTownsHandler(city['ProvinceID']);
            }
        })
    }, [currentCity])

    useEffect(() => {
        townsObject.map((town) => {
            if (town['DistrictName'] === currentTowns) {

                fetchWardsHandler(town['DistrictID']);
            }
        })
    }, [currentTowns])
    console.log(townsObject);

    const fetchTownsHandler = (cityId) => {

        const fetchData = async () => {
            const res = await fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${cityId}`, {
                method: 'GET',
                headers: {
                    'token': '6dca80a5-3584-11ed-ad26-3a4226f77ff0'
                },
            })
            const data = await res.json();

            const townsData = [];

            data.data.map((town) => {
                townsData.push(town['DistrictName']);
            })
            setTowns(townsData);
            setTownsObject(data.data);

        }
        fetchData();
    }
    const fetchWardsHandler = (districtId) => {

        const fetchData = async () => {
            const res = await fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtId}`, {
                method: 'GET',
                headers: {
                    'token': '6dca80a5-3584-11ed-ad26-3a4226f77ff0'
                },
            })
            const data = await res.json();

            const wardsData = [];
            console.log(data.data);
            data.data.map((ward) => {
                wardsData.push(ward['WardName']);
            })
            setWards(wardsData);
            setWardsObject(wardsData);

        }
        fetchData();
    }

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
                method: 'GET',
                headers: {
                    'token': '6dca80a5-3584-11ed-ad26-3a4226f77ff0'
                },
            })
            const data = await res.json();

            const citiesData = [];

            data.data.map((city) => {
                citiesData.push(city['ProvinceName']);
            })
            setCities(citiesData);
            setCitiesObject(data.data);

        }
        fetchData();

        setTotalPayment(getTotalPayment);
    }, [])
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const res = await ApiPayment.createBill({
    //             email: 'longn03@gmail.com',
    //             address: 'hanoi',
    //             current_products: '4b539927-ba04-4991-a219-bdebed7fc495:1,3fb0ecab-648b-4b55-8ddc-e959547940cd:2'
    //         })
    //         console.log(res);
    //     }

    //     fetchProducts();
    // }, [])
    return (<div className='relative'>
        <header className="flex items-center w-full h-[60px] ">
            <Link className='w-[15%] flex justify-center' to='/home/fashion' onClick={() => {
                dispatch(deleteAllPaymentsAction());
            }}>
                <AiOutlineHome size={28} className=""></AiOutlineHome>
            </Link>
            <Link className='w-[85%] flex justify-center translate-x-[-7%] translate-y-[14%]' to='/home/fashion'>
                <img src={Logo} alt='hi' className='w-[70%]'></img>
            </Link>
        </header>

        <section className=''>
            <h1 className='text-center font-bold text-[17px] bg-[#d9d9d9] py-[10px]'>THANH TOÁN</h1>
            <div className='border-[1px] border-[#777] p-[10px] rounded-[10px] m-[10px] mt-[15px]'>
                <div className='h-[200px] overflow-y-auto border-b-[1px] border-[#777]'>
                    {cartItem.productsPayment.map((product, i) => {
                        product = JSON.parse(product);
                        return <PaymentItem key={i} i={i} image={product.image} name={product.name} cost={product.costPerUnit * product.quantity} quantity={product.quantity} ></PaymentItem>
                    })}
                </div>
                <div className='text-end mt-[10px] font-bold'>
                    <p>{`Tổng đơn hàng: ${totalPayment} đ`}</p>
                    <p>{`+ Phí vận chuyển: 100000đ`}</p>
                </div>
            </div>
        </section>

        <section className=" border-[1px] border-[#777] rounded-[10px] h-[350px] p-[10px] m-[10px] mt-[20px] mb-[50px]">

            <div className="relative w-full mb-[13px]">
                <p className=" absolute font-bold top-[-28px] left-[50%] translate-x-[-50%] bg-white p-[5px] text-[15px]">Thông tin người nhận</p>
            </div>
            <input placeholder="Họ và tên" className='w-full bg-[#d9d9d9] [&:not(last-child)]:mb-[10px] h-[30px] rounded-[10px] pl-[10px]'></input>
            <input placeholder="Số điện thoại" className='w-full bg-[#d9d9d9] [&:not(last-child)]:mb-[10px] h-[30px] rounded-[10px] pl-[10px]'></input>
            <div className='h-[50px]'>
                <SelectCustomWidth options={cities} label='' widthP='full' selectValue={currentCity} setSelectValue={setCurrentCity}></SelectCustomWidth>
            </div>
            <div className='h-[50px] w-full]'>
                <SelectCustomWidth options={towns} label='' widthP='full' selectValue={currentTowns} setSelectValue={setCurrentTowns}></SelectCustomWidth>
            </div>
            <div className='h-[50px] w-full]'>
                <SelectCustomWidth options={wards} label='' widthP='full' selectValue={currentWard} setSelectValue={setCurrentWard}></SelectCustomWidth>
            </div>
            <input placeholder="Địa chỉ nhận hàng" className='w-full bg-[#d9d9d9] [&:not(last-child)]:mb-[10px] h-[30px] rounded-[10px] pl-[10px]'></input>
        </section>
        <div className='h-[10px]'></div>
        <button className='w-full text-center text-[28px] bg-[#0083c2] py-[10px] fixed bottom-0 text-white' onClick={() => {
            cartItem.productsPayment = []
        }}>
            Đặt hàng
        </button>
    </div>);
}

export default Payment;