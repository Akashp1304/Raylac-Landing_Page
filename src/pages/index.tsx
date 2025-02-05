import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DownloadSection from '../components/DownloadSection '
// import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import BigCards from "../components/cards";
import FAQ from '../components/FAQ';
import '../styles/globals.css';
export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <Hero />
                <Features />
                <BigCards/>
                <FAQ/>
                <DownloadSection/>
            </main>
            <Footer />
        </div>
    );
}
