import { IconHome } from '@/components/icons';
import { IconDoubleCheck } from '@/components/icons/IconDoubleCheck';
import { IconPaperAirplane } from '@/components/icons/IconPaperAirplane';

export const SectionIntroduce = () => {
    return (
        <section className="section-default">
            <div className="flex">
                <div className="flex items-center justify-center gap-10px rounded-full border border-color5 px-20px py-[6px]">
                    <IconHome className="text-color2" />
                    <p className="text-xs text-white">INTRODUCE</p>
                </div>
            </div>

            <div className="mt-40px flex gap-30px">
                <div className="w-2/3">
                    <h1 className=" flex flex-col gap-10px text-5xl font-bold text-white">
                        <span>I Craft The</span>
                        <span className="text-color2">Digital Landscape</span>
                    </h1>

                    <p className="mt-40px">
                        I am a <span className="font-medium text-white">Frontend Developer</span> at heart and, i create
                        features that are best suited for the job at hand.
                    </p>

                    <div className="mt-20px flex gap-30px">
                        <div className="flex gap-10px">
                            <IconDoubleCheck className="text-color2" />
                            <p>Available for work</p>
                        </div>
                        <div className="flex gap-10px">
                            <IconDoubleCheck className="text-color2" />
                            <p>Full Time Job</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="mt-20px flex items-center justify-center gap-10px rounded-full bg-color2 px-30px py-20px text-white"
                    >
                        <IconPaperAirplane />
                        <p className="font-medium">HIRE ME</p>
                    </button>
                </div>
                <div className="w-1/3">asd</div>
            </div>
        </section>
    );
};
