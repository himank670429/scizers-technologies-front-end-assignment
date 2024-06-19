import React from "react";
import { Oswald, Poppins } from "next/font/google";
import Image from "next/image";

const oswald500 = Oswald({ weight: "500", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });

function Perks() {
	type perk_data = Array<{
		icon: string;
		text1: string;
		text2: string;
	}>;
	const perks: perk_data = [
		{
			icon: "perks/Bookwith.svg",
			text1: "book with",
			text2: "only 20%",
		},
		{
			icon: "perks/payment.svg",
			text1: "payment plan",
			text2: "easy 70/30",
		},
		{
			icon: "perks/handson.svg",
			text1: "handover on",
			text2: "q2 2027",
		},
		{
			icon: "perks/area.svg",
			text1: "area starts from",
			text2: "700 sqmt",
		},
	];

	return (
		<section className="w-full h-fit flex justify-center bg-[#F4F9FF] ">
			<div className="container flex justify-between px-44 py-4">
				{perks.map((item, index) => (
					<div key={index} className="flex flex-col uppercase gap-1 text-darkBlue items-center">
						<Image src={item.icon} alt={item.text1} width={40} height={50} />
						<span className={poppins400.className + " text-sm"}>{item.text1}</span>
						<span className={oswald500.className + " text-[1.75rem]"}>{item.text2}</span>
                        <div className="bg-[#00357b1c] rounded-[13px] h-[5px] w-[73px]"></div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Perks;
