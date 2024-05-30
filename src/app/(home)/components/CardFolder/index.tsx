export const CardFolder = () => {
    return (
        <div className="w-[300px] sm:w-[400px] md:w-[500px]">
            <div className="h-60px w-3/5 rounded-t-[20px] bg-color1" />
            <div className="flex w-full flex-col gap-20px rounded-b-[20px] rounded-tr-[20px] bg-color1 p-10px">
                <div className="flex w-full flex-col items-center justify-center gap-20px p-10px">
                    <div className="h-[120px] w-[120px] rounded-full border-8 border-color5"></div>
                    <div className="text-center">
                        <h1 className="text-xl font-medium text-white">André Cabral</h1>
                        <p className="text-sm text-color2">Developer</p>
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <div className="w-4/5 border-t border-color3" />
                </div>
                <div className="flex flex-col gap-10px px-20px">
                    <div className="flex w-full justify-between">
                        <p className="font-medium text-color7">Residence:</p>
                        <p className="text-color6">Canada</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <p className="font-medium text-color7">Residence:</p>
                        <p className="text-color6">Canada</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <p className="font-medium text-color7">Residence:</p>
                        <p className="text-color6">Canada</p>
                    </div>
                </div>

                <div className="rounded-[20px] bg-color3 p-20px">
                    <p>Skills</p>
                    <div>asdad</div>
                </div>
            </div>
        </div>
    );
};
