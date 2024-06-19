import React from "react";
import Image from "next/image";
import { Oswald, Poppins } from "next/font/google";
const oswald600 = Oswald({ weight: "600", subsets: ["latin"] });
const poppins400 = Poppins({ weight: "400", subsets: ["latin"] });
const poppins600 = Poppins({ weight: "600", subsets: ["latin"] });

type screenshot = {
	image: string;
	text1: string;
	text2: string;
};
function Features(): React.ReactElement {
	const screenshots: Array<screenshot> = [
		{
			image: "/features/hotel1.png",
			text1: "Floating",
			text2: "Pools",
		},
		{
			image: "/features/hotel2.png",
			text1: "Spacious Cabins",
			text2: "Like Rooms",
		},
		{
			image: "/features/hotel3.png",
			text1: "Sea Facing",
			text2: "Swimming Pools",
		},
		{
			image: "/features/hotel4.png",
			text1: "Gymnasium",
			text2: "& Fitness",
		},
	];

	return (
		<section className="flex w-full justify-center">
			<div className="py-12 px-40 border flex gap-6 flex-col items-center container">
				<Image
					src="features/harbour_lights.svg"
					alt="harbour lights"
					width={175}
					height={50}
				/>
				<span
					className={
						oswald600.className + " text-3xl mt-2  uppercase  text-darkBlue"
					}
				>
					features & amenities
				</span>
				<p className={poppins400.className + " text-center text-black text-sm"}>
					Harbour Lights beautifully honours maritime voyages while embracing an
					opulent seafront<br></br>lifestyle. Its maritime-inspired amenities provide
					an unmatched seaside experience, offering a<br></br>life of tranquility and
					bliss.
				</p>

				<div className="flex self-stretch justify-between">
					{screenshots.map((item, index) => (
						<FeatureScreenShot {...item} key={index} />
					))}
				</div>
				<p className="text-[9px] mb-2 self-end text-[#686868]">
					*T&Cs apply | ** Based on similar branded projects in the last 2 years.{" "}
					<u className="cursor-pointer ">Source 1</u> |{" "}
					<u className="cursor-pointer ">Source 2</u>
				</p>
                <div className="self-end flex gap-2 ">
                    <button className={poppins600.className + " uppercase text-xs px-10 py-3 bg-darkBlue rounded-md text-white"}>
                        Exteroirs
                    </button>
                    <button className={poppins600.className + " uppercase text-xs px-10 py-3 border-darkBlue border-[1px] rounded-md bg-white text-darkBlue"}>
                        interiors
                    </button>
                </div>
                <Gallery />
			</div>
		</section>
	);
}

function Gallery() : React.ReactElement{ 
    return <div className="w-full">
        <img src="/gallery/main.jpg" alt="hotel view" className="w-full rounded-xl"/>
        <div className="grid grid-cols-4 mt-4 gap-4">
            <img src="/gallery/small1.jpg"/>
            <img src="/gallery/small2.jpg"/>
            <img src="/gallery/small3.jpg"/>
            <img src="/gallery/small4.jpg"/>
        </div>
    </div>
}

function FeatureScreenShot({
	image,
	text1,
	text2,
}: screenshot): React.ReactElement {
	return (
		<div
			className={
				"text-darkBlue flex flex-col items-center shadow-xl shadow-[#7e7e7e23] rounded-2xl bg-white p-2"
			}
		>
			<Image
				src={image}
				alt={text1 + " " + text2}
				aria-labelledby="feature-title"
				width={180}
				height={180}
				className="rounded-full border-transparent border-4 border-t-[#d9d9d98c]"
			/>
			<span className={poppins600.className + " mt-2 text-xs"}>{text1}</span>
			<span className={poppins600.className + " text-xs"}>{text2}</span>
		</div>
	);
}

export default Features;
