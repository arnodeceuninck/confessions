import style from './Icon.module.css';

import sendSrc from './send.svg';
import imgSrc from './image.svg';
import noImgSrc from './noImage.svg';
import pollSrc from './poll.svg';
import blockedSrc from './blocked.svg';
import trashSrc from './trash.svg';
import publishSrc from './publish.svg';
import archiveSrc from './archive.svg';
import playSrc from './play.svg';
import stopSrc from './stop.svg';
import tagSrc from './tag.svg';

import angleRightSrc from './angleRight.svg';
import angleDownSrc from './angleDown.svg';

const Send = () => (
    <img src={sendSrc} alt={'versturen'} />
);

const SetImage = ({cancel}) => {
   if(!cancel) return <img src={imgSrc} alt={'zet een afbeelding'} />
    return <img src={noImgSrc} alt={'afbeeldingselectie anuleren'} />
}

const Loading = () => (
    <img src={blockedSrc} alt={'wachten'} className={style.spin} />
);

const Blocked = ({loading}) => (
    <img src={blockedSrc} alt={'nog niet beschikbaar'} className={loading ? style.spin : ''} />
);

const Poll = () => (
    <img src={pollSrc} alt={'poll'} />
);

const Reject = () => (
    <img src={trashSrc} alt={'reject'} />
);

const Accept = () => (
    <img src={publishSrc} alt={'publish'} />
);

const Archive = () => (
    <img src={archiveSrc} alt={'archive'} />
);

const Start = () => (
    <img src={playSrc} alt={'start'} />
);

const Stop = () => (
    <img src={stopSrc} alt={'stop'} />
);

const Tag = () => (
    <img src={tagSrc} alt={'tag'} />
);

const Angle = {
    Right: () => <img src={angleRightSrc} alt={'angle right'} />,
    Down: () => <img src={angleDownSrc} alt={'angle down'} />
};

const icons = { Send, SetImage, Loading, Blocked, Poll, Reject, Accept, Archive, Start, Stop, Tag, Angle};
export default icons;
