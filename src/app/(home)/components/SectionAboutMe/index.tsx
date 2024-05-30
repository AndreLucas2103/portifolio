import { IconUser } from '@/components/icons/IconUser';

export const SectionAboutMe = () => {
    return (
        <section className="section-default">
            <div className="flex">
                <div className="flex items-center justify-center gap-10px rounded-full border border-color5 px-20px py-[6px]">
                    <IconUser className="w-[10px] text-color2" />
                    <p className="text-xs text-white">ABOUT ME</p>
                </div>
            </div>

            <div className="mt-40px">
                <h1 className="text-5xl font-extralight text-white">
                    About <span className="font-bold text-color2">Me</span>
                </h1>

                <p className="mt-20px">
                    Hi, my name is Brown Reddick and I began using WordPress when first began. spent most of my waking
                    hours for the last ten years designing, programming and operating WordPress sites go beyond with
                    exclusive designer.
                </p>

                <div className="mt-40px grid grid-cols-2 gap-x-[80px] gap-y-10px text-sm">
                    <div className="flex w-full justify-between ">
                        <p>Phone:</p>
                        <p className="text-white">+(2) 870 174 302</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <p>Skype:</p>
                        <p className="text-white">brown@com</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <p>Language:</p>
                        <p className="text-white">English, Dutch, Spanish</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <p>Email:</p>
                        <p className="text-white">info@example.com</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <p>GitHub:</p>
                        <p className="text-white">github.com/user</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
