import { Poppins } from "next/font/google";
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });
function Footer() {
  return (
    <section className="flex bg-extraDarkBlue w-full justify-center">
        <div className={poppins300.className + ' container text-xs text-white flex justify-center py-10'}>
            © DAMAC Copyright 2024 All rights reserved.
        </div>
    </section>
  )
}

export default Footer