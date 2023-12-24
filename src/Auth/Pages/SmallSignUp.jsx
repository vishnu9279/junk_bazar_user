import { Button } from "@mui/material";
import PhoneInput from "react-phone-number-input";
import userImage from '../../assets/PNG/smallUserImag.png'
import { useState } from "react";

const SmallSignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");



    return (
        <div className="small-devices ">

            <div className="pl-10 pr-10 mx-auto">
                <img src={userImage} className="w-[300px] h-[300px] " alt="" />
            </div>
            <div className="bg-white p-10 rounded-t-lg shadow-2xl shadow-slate-900">
                <div className="">
                    <h2 className="text-[#303030]  text-[22px] mt-2 mb-0">
                        Sign up now
                    </h2>
                    <p className="text-[#707070]  text-[10px]">
                        Create a new account in four simple steps
                    </p>
                </div>
                <form className="mt-5">
                    <div className="border border-l-zinc-600 rounded p-2 max-w-sm">
                        <PhoneInput
                            international
                            defaultCountry="IN"
                            value={phoneNumber}
                            onChange={setPhoneNumber} />
                    </div>
                    <Button
                        label="Continue"
                        classname="font-semibold text-[19px] p-[2] text-center bg-[#5AB344] w-full text-white rounded-[27px] outline-none border-none  hover:opacity-80"


                    />
                    <div className="mt-20">

                        <p className="text-[14px] text-[#4A4A4A] mt-2 text-center font-[400]">
                            Don't have an account?{" "}
                            <span
                                className="text-[#81D742] hover:font-semibold hover:underline cursor-pointer">
                                Sign In
                            </span>
                        </p>
                    </div>
                </form>
            </div>

        </div>


    );
}

export default SmallSignUp;