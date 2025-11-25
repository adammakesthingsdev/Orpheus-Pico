/**
 * homepage!
 */
import styles from "@/app/homepage.module.css";
import Image from "next/image";
import GetStartedButton from "./fancybutton";
import Footer from "./footer";

export default function Homepage() {
    return (
        <div className={styles.container}>
            <Image
                alt="logo"
                src={"/flag-orpheus-left.svg"}
                width={100}
                height={100}
                className={styles.logo}
            />
            <div className="w-full h-[40rem] bg-content2 flex items-center justify-center flex-col">
                <h2 className="font-sans text-3xl mt-10">
                    Introducing Orpheus Pico
                </h2>
                <div className="w-full grow flex items-center justify-center">
                    <Image
                        alt="orpheus pico!"
                        src={"/transparent-orpheus.png"}
                        height={400}
                        width={400}
                        className={`${styles.image} h-3/4`}
                    />
                </div>
                <div className="w-full px-5 mb-5 flex items-center align-center flex-col">
                    <h3 className="font-sans text-2xl">
                        The world&apos;s hackiest open-source microcontroller!*
                    </h3>
                    <h4 className="font-sans text-xs">
                        *Hackiness is subjective. No hackiability guaranteed
                        unless required by court of law.
                    </h4>
                </div>
            </div>

            {/* <UnsupportedBrowserBanner /> */}
            {/* i disagree */}
            <div className="w-full bg-content3 px-8 py-5 flex-col flex items-center">
                <GetStartedButton href="/docs/pico/getting-started" />
                <div className={styles.textBody}>
                    <h3 className="text-xl">
                        One day at Hack Club HQ, I had an idea.{" "}
                    </h3>
                    <p className="mt-4">
                        While assembling some{" "}
                        <a href="https://sprig.hackclub.com">Sprigs</a>, I
                        realized a major problem with the Pi Pico Ws we used -{" "}
                        {"they're"} just really expensive. So why settle?
                    </p>
                    <p className="mt-4">
                        And from this the Orpheus Pico was born, designed to be
                        a drop-in open-source replacement to the Pi Pico with a
                        ton of new features and some stylish Hack Club branding.
                    </p>

                    <p className="mt-4">
                        You can check out the features list if you want, but the
                        tl;dr is:
                    </p>
                    <ul className="list-disc list-inside">
                        <li className={styles.subject}>More storage!</li>
                        <li className={styles.subject}>USB Type-C!</li>
                        <li className={styles.subject}>Onboard RGBLED!</li>
                        <li className={styles.subject}>Gorgeous artwork!</li>
                        <li className={styles.subject}>And MORE!</li>
                    </ul>
                    <p className="mt-4">
                        I&apos;ve had a lot of fun making it the way I wanted it
                        to be, but now I want you to do the same. So go make
                        something!
                    </p>
                    <p className="m-4">
                        - With ❤️ from{" "}
                        <a href="https://adammakesthings.dev">Adam</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
