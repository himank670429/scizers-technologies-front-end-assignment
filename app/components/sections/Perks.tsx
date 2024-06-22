import React from "react";
import { Oswald, Poppins } from "next/font/google";
import Image from "next/image";

const oswald500 = Oswald({ weight: "500", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });

type PerkProps = {
	icon : string,
	text1 : string,
	text2 : string,
	className : string,
}

function Perks() : React.ReactElement {
	return (
		<section className="w-full h-fit flex justify-center bg-[#F4F9FF] ">
			<div className="container flex justify-around lg:justify-between spacing py-4">

				<PerkFigure icon = "perks/Bookwith.svg" text1 ="book with" text2="only 20%" className={"hidden sm:flex"}/>

				<PerkFigure icon = "perks/payment.svg" text1 ="payment plan" text2="easy 70/30" className={"flex"}/>

				<PerkFigure icon = "perks/handson.svg" text1 ="handover on" text2="q2 2027" className={"flex"}/>

				<PerkFigure icon = "perks/area.svg" text1 ="area starts from" text2="700 sqmt" className={"hidden md:flex"}/>

			</div>
		</section>
	);
}

// @Reusable Component
function PerkFigure({ icon, text1, text2, className } : PerkProps) : React.ReactElement<PerkProps>{
	return (
		<figure className={"flex-col uppercase gap-1 text-darkBlue items-center " + className}>
			<Image src={icon} alt={text1} width={40} height={50} />
			<span className={poppins400.className + " text-sm"}>{text1}</span>
			<span className={oswald500.className + " text-[1.75rem]"}>{text2}</span>
			<div className="bg-[#00357b1c] rounded-[13px] h-[5px] w-[73px]"></div>
		</figure>
	);
}
export default Perks;