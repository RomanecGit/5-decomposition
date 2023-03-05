import WeatherBlock from './WeatherBlock';
import MapBlock  from './MapBlock';
import BroadcastBlock  from './BroadcastBlock';
import TVProgramBlock  from './TVProgramBlock';
import FrequentlyVisitedBlock  from './FrequentlyVisitedBlock';

/** Основное тело страницы - считаем, что сюда входит все,
 что на скрине ниже строки поиска*/

function Body() {
    return (
        <>
            {/** 
             * баннер с Форсажем. Предполагаю, что баннеров несколько
             * и они периодически прокручиваются, поэтому List
             * Компонент "сам со себе", поэтому делать его не стал
             */}
            <BannerListBlock banners={banners}/>

            {/** блок Погода*/}
            <WeatherBlock/>

            {/** блок Карта*/}
            <MapBlock/>

            {/** блок Эфир"*/}
            <BroadcastBlock/>

            {/** блок Телепрограмма, делается аналогично предыдущему блоку Эфир,
             файл с компонентом делать не стал */}
            <TVProgramBlock/>

            {/** блок (часто?)Посещаемое, делается аналогично предыдущему блоку Эфир,
             файл с компонентом делать не стал */}
            <FrequentlyVisitedBlock/>
        </>
    );
}
export default Body;