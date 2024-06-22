import Hero from "./components/ui/Header";
import Perks from "./components/sections/Perks";
import Features from "./components/sections/features";
import Footer from "./components/ui/Footer";

export default function Home() {
	return (
		<>
			<Hero />
			<Perks />
			<Features />
			<Footer />
		</>
	);
}
