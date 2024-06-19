import Image from "next/image";
import { Oswald, Poppins } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });
const poppins600 = Poppins({ weight: "600", subsets: ["latin"] });
const poppins300 = Poppins({ weight: "300", subsets: ["latin"] });

function Header() {
	return (
		<header
			style={{
				backgroundImage: "url(hero-image.png)",
			}}
			className="w-full h-fit flex justify-center bg-no-repeat bg-cover"
		>
			<div className="py-10 px-36 flex flex-col gap-20 container">
				<nav className="flex justify-between">
					<Image src={"/logo.svg"} alt="logo" width={160} height={30} className="" />
					<button className="uppercase border-primaryBlue border-2 px-8 py-4 rounded-lg text-xs text-primaryBlue font-semibold text-nowrap">
						enquire now
					</button>
				</nav>

				<section className="flex justify-between mb-10">
					<div className={"text-white flex flex-col gap-4"}>
						<div className="flex flex-col">
							<span className={oswald.className + " text-[2.5rem] uppercase"}>
								Harbour Lights
							</span>
							<span className={oswald.className + " text-[2.5rem] uppercase"}>
								DE <strong className="text-primaryBlue">Gresogono</strong>
							</span>
						</div>

						<span className="font-bold text-2xl">
							1, 2 & 3 Bedrooms Seaside Apartments<br></br>in Dubai Maritime City
						</span>

						<div
							className={
								poppins300.className +
								" flex mt-6 flex-col w-fit gap-2 text-[#e7ebefea] text-sm"
							}
						>
							<span className="bg-[#00000046] p-2 border-l-2 border-primaryBlue">
								Rental Returns of{" "}
								<b className="font-semibold text-[#e7ebef]">UPTO 11%**</b>
							</span>
							<span className="bg-[#00000046] p-2 border-l-2 border-primaryBlue">
								Capital Appreciation{" "}
								<b className="font-semibold text-[#e7ebef]">UPTO 32%**</b>
							</span>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="backdrop-blur text-white rounded-lg p-7 h-fit bg-[#5790be1e] flex flex-col">
							<span
								className={poppins300.className + " uppercase text-[#FCFCFC] text-xs"}
							>
								pricing starts from
							</span>
							<span
								className={oswald.className + " text-[2.7rem] uppercase text-[#FCFCFC]"}
							>
								$ 425,000
							</span>
							<span
								className={
									oswald.className + " font-light text-xl uppercase text-[#FCFCFC]"
								}
							>
								AED 1.3 Million
							</span>
							<button className="mt-4 uppercase bg-primaryBlue px-10  py-4 text-xs font-semibold text-white rounded-md">
								get a presentation
							</button>
						</div>
						<div className="text-[#98C5E8] text-xs backdrop-blur px-5 py-2 font-light rounded-md border-t-[1px] border-[#00000056] bg-[#5790be41]">
							Get an Expert's Presentation of Real<br></br>Estate in Dubai Life and
							investment.
						</div>
					</div>
				</section>
			</div>
		</header>
	);
}

export default Header;
