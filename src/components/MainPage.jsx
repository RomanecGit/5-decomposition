import Header   from './Header';
import Body     from './Body';
import Footer   from './Footer';
// import Header from './Header';
// import Header from './Header';
// import Header from './Header';
// import Header from './Header';
// import Header from './Header';
/**
 * Основной компонент вывода главной страницы сайта
 */
function MainPage() {
    return (
        <>
            {/** header сайта. Предположим, что хэдэр - вся верхняя часть до
             строки поиска (включая строку поиска)*/}
            <Header/>

            {/** Основное тело страницы - считаем, что сюда входит все,
             что на скрине ниже строки поиска*/}
            <Body/>

            {/** Футер сайта, в этом задании пустой, но традиционно пусть
             будет - контакты, копирайты итп*/}
            <Footer/>
        </>
    )
}

export default MainPage;






