import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center mt-8 gap-3 lg:gap-5 lg:flex-row lg:items-start group"
            variants={childVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 mt-3 w-fit p-3 rounded-xl bg-blue-100/50 group-hover:bg-blue-200/70 transition-colors">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                    {title}
                </h4>
                <p className="text-base text-foreground-accent">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet