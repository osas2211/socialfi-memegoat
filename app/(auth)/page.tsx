"use client"
import { Button } from "antd"
import Image from "next/image"
import { baseURL } from "@/app/api"
import { motion } from "framer-motion"
import React, { useEffect } from "react"
import { AuthStore } from "@/utils/store"
import { useRouter } from "next/navigation"
import { BsTwitterX } from "react-icons/bs"
import { Header } from "@/components/shared/Header"

const AuthPage = () => {
  const router = useRouter()
  const { isAuth } = AuthStore()

  const xLogin = () => {
    window.open(`${baseURL}/auth/x`, "_self")
  }

  useEffect(() => {
    if (isAuth) {
      router.push('/dashboard')
    }
  }, [isAuth])

  return (
    <div className="bg-custom-black min-h-screen text-custom-white relative">
      <Header />
      <div className="md:pt-[8rem] pt-[6rem] px-5">
        <div className="">
          <div className="p-6 flex justify-center items-center min-h-[85vh] gap-7 bg-gradient-to-r from-primary-90/5 to-primary-70/10 backdrop-blur-[120px] relative z-[20]">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
              className="lg:w-[30%] text-center"
            >
              <h3 className="text-2xl md:text-4xl orbitron leading-normal">
                Welcome
              </h3>
              <h3 className="text-2xl md:text-4xl orbitron leading-normal">
                To Meme Goat Earn
              </h3>
              <p className="text-silver text-sm mt-6 leading-6">
                Embark on a journey where every interaction with MemeGoat is a
                masterpiece, and the community thrives in the spirit of
                innovation.
              </p>
              <div className="md:w-[80%] mx-auto mt-7 grid grid-cols-2 gap-5">
                <Button icon={<BsTwitterX />} iconPosition="end" type="primary" onClick={() => xLogin()}>
                  Sign in with
                </Button>
                {/* <Button
                  iconPosition="end"
                  className="w-full bg-transparent border-primary-50 text-primary-30"
                >
                  Connect Wallet
                </Button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-[50px] blur-[200px] bg-primary-20"></div>
      <div className="fixed top-[50%] right-[30%] h-[15rem] w-[15rem] blur-[250px] bg-primary-20"></div>
      <div className="fixed top-[10vh] right-0 md:right-[-30rem] hidden xl:block z-[30]">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative w-[170px] h-[170px] md:w-[60rem] md:h-[60rem]"
        >
          <Image src="/logo.svg" className="w-full h-full" alt="" fill />
        </motion.div>
      </div>
    </div>
  )
}

export default AuthPage
