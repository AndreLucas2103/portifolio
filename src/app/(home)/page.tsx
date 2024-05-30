import { SectionAboutMe, SectionIntroduce } from './components';

export default function HomePage() {
    return (
        <div className="flex w-full flex-col gap-20px py-40px text-color7">
            <SectionIntroduce />
            <SectionAboutMe />
        </div>
    );
}
