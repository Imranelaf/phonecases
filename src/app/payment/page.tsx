'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardInfo from "../components/UI/CardInfo";
import UserInfo from "../components/UI/UserInfo";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const PaymentPage = () => {
  const [step, setStep] = useState<number>(0);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <p className="text-gray-700 mb-6">Complete your payment below.</p>
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <div className={`w-full h-8 my-5 flex ${
          step == 1 ? 'justify-start' : 'justify-end'
        }`}>
          {
            step == 0 ? <CircleArrowRight className="cursor-pointer font-bold text-green-800"
            onClick={() => setStep(1)} /> :
             <CircleArrowLeft className="cursor-pointer font-bold text-green-800"
             onClick={() => setStep(0)}
             />
          }
        </div>
        <AnimatePresence initial={false} custom={step}>
          {step === 0 ? (
            <motion.div
              key="userInfo"
              custom={step}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <UserInfo />
            </motion.div>
          ) : (
            <motion.div
              key="cardInfo"
              custom={step}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <CardInfo />

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PaymentPage;